const { chromium } = require('C:/Users/18210/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const url = process.argv[2] || 'https://daisy199501.github.io/kidney-diet-helper/';
  page.on('pageerror', e => console.log('PAGEERROR:', e.message));
  page.on('console', m => { if (m.type() === 'error') console.log('CONSOLE:', m.text().slice(0, 200)); });
  page.on('requestfailed', r => console.log('REQFAIL:', r.url(), r.failure() && r.failure().errorText));
  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    console.log('HTTP', resp && resp.status());
    console.log('title:', await page.title());
    console.log('final url:', page.url());
    console.log('consent button:', await page.locator('#consentBtn').count());
    console.log('body head:', (await page.evaluate(() => document.body ? document.body.innerText.slice(0, 200) : 'NO BODY')));
    await page.screenshot({ path: 'C:/tmp/web/shots/live-check.png' });
  } catch (e) {
    console.log('LIVE ERR:', e.message.split('\n')[0]);
  }
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
