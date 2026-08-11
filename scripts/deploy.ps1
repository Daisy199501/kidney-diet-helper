param(
  [string]$Token = $env:GITHUB_TOKEN,
  [string]$RepoName = "kidney-diet-helper",
  [string]$RepoDesc = "Shenyou Shiyang Zhushou - CKD diet helper based on NHC 2024 guideline",
  [switch]$Private
)

if (-not $Token) { throw "Please set GitHub token via env GITHUB_TOKEN or -Token" }

$git = "C:\Users\18210\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe"
$headers = @{ Authorization = "Bearer $Token"; Accept = "application/vnd.github+json"; "X-GitHub-Api-Version" = "2022-11-28" }

# 1. Get account
$user = Invoke-RestMethod -Method Get -Uri "https://api.github.com/user" -Headers $headers
$owner = $user.login
Write-Host "GitHub account: $owner"

# 2. Create repo (skip if exists)
try {
  $body = @{ name = $RepoName; description = $RepoDesc; private = [bool]$Private; has_wiki = $false } | ConvertTo-Json
  Invoke-RestMethod -Method Post -Uri "https://api.github.com/user/repos" -Headers $headers -Body $body -ContentType "application/json" | Out-Null
  Write-Host "Repository created: $owner/$RepoName"
} catch {
  Write-Host "Repository may already exist, continue pushing: $($_.Exception.Message)"
}

# 3. Push main branch
& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/$owner/$RepoName.git"
& $git branch -M main
$b64 = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("x-access-token:$Token"))
& $git -c "http.extraheader=Authorization: Basic $b64" push -u origin main
if ($LASTEXITCODE -ne 0) { throw "git push failed" }

# 4. Enable GitHub Pages (main branch, root path)
$pagesBody = @{ source = @{ branch = "main"; path = "/" } } | ConvertTo-Json -Depth 3
try {
  $res = Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/$owner/$RepoName/pages" -Headers $headers -Body $pagesBody -ContentType "application/json"
  if ($res.html_url) { $url = $res.html_url }
} catch {
  try {
    Invoke-RestMethod -Method Put -Uri "https://api.github.com/repos/$owner/$RepoName/pages" -Headers $headers -Body $pagesBody -ContentType "application/json" | Out-Null
  } catch {
    Write-Host "Pages enable note: $($_.Exception.Message)"
  }
}

# 5. Wait for build and print URL
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
Write-Host "Deployed URL: $url"
