param(
  [string]$Token = $env:GITHUB_TOKEN,
  [string]$RepoName = "kidney-diet-helper",
  [string]$RepoDesc = "肾友食养助手：基于《成人慢性肾脏病食养指南（2024年版）》的响应式饮食参考工具",
  [switch]$Private
)

$ErrorActionPreference = "Stop"
if (-not $Token) { throw "请先设置 GitHub Token：`$env:GITHUB_TOKEN='ghp_...' 或 -Token ghp_..." }

$git = "C:\Users\18210\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
$headers = @{ Authorization = "Bearer $Token"; Accept = "application/vnd.github+json"; "X-GitHub-Api-Version" = "2022-11-28" }

# 1. 获取账号
$user = Invoke-RestMethod -Method Get -Uri "https://api.github.com/user" -Headers $headers
$owner = $user.login
Write-Host "GitHub 账号: $owner"

# 2. 创建仓库（已存在则跳过）
try {
  $body = @{ name = $RepoName; description = $RepoDesc; private = [bool]$Private; has_wiki = $false } | ConvertTo-Json
  Invoke-RestMethod -Method Post -Uri "https://api.github.com/user/repos" -Headers $headers -Body $body -ContentType "application/json" | Out-Null
  Write-Host "仓库已创建: $owner/$RepoName"
} catch {
  Write-Host "仓库可能已存在，继续推送: $($_.Exception.Message)"
}

# 3. 推送 main 分支
& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/$owner/$RepoName.git"
& $git branch -M main
$b64 = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("x-access-token:$Token"))
& $git -c "http.extraheader=Authorization: Basic $b64" push -u origin main
if ($LASTEXITCODE -ne 0) { throw "git push 失败" }

# 4. 开启 GitHub Pages（main 分支根目录）
$pagesBody = @{ build_type = "legacy"; source = @{ branch = "main"; path = "/" } } | ConvertTo-Json -Depth 3
try {
  Invoke-RestMethod -Method Put -Uri "https://api.github.com/repos/$owner/$RepoName/pages" -Headers $headers -Body $pagesBody -ContentType "application/json" | Out-Null
} catch {
  Write-Host "Pages 开启提示: $($_.Exception.Message)"
}

# 5. 等待构建并输出地址
$url = ""
for ($i = 0; $i -lt 30; $i++) {
  Start-Sleep -Seconds 5
  try {
    $page = Invoke-RestMethod -Method Get -Uri "https://api.github.com/repos/$owner/$RepoName/pages" -Headers $headers
    if ($page.html_url) { $url = $page.html_url }
    if ($page.status -and $page.status -ne "building") { break }
  } catch { }
}
Write-Host ""
Write-Host "部署完成，访问地址: $url"
