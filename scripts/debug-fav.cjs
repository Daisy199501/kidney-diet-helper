const { chromium } = require('C:/Users/18210/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on('pageerror', e => console.log('PAGEERROR', e.message));
  await page.goto('http://127.0.0.1:8000/', { waitUntil: 'networkidle' });
  await page.click('#consentBtn');
  await page.selectOption('#pf-region', '华北');
  await page.selectOption('#pf-stage', 'CKD 1-2期');
  await page.fill('#pf-height', '170');
  await page.fill('#pf-weight', '60');
  await page.selectOption('#pf-gender', '男');
  await page.selectOption('#pf-activity', '轻体力');
  await page.click('#profileForm button[type="submit"]');
  await page.waitForSelector('#view-rec.active');
  console.log('cards:', await page.locator('#recContent .recipe-card').count());
  await page.locator('#recContent .recipe-card').first().click();
  await page.waitForSelector('#view-detail.active');
  console.log('detail fav buttons:', await page.locator('#view-detail [data-fav]').count());
  console.log('fav btn text:', await page.locator('#view-detail [data-fav]').first().textContent());
  await page.locator('#view-detail [data-fav]').first().click();
  await page.waitForTimeout(300);
  console.log('ys_favs:', await page.evaluate(() => localStorage.getItem('ys_favs')));
  console.log('fav btn text after:', await page.locator('#view-detail [data-fav]').first().textContent());
  await page.click('.tabbar [data-view="fav"]');
  await page.waitForTimeout(300);
  console.log('fav cards:', await page.locator('#favContent .recipe-card').count());
  console.log('favContent html:', (await page.locator('#favContent').innerHTML()).slice(0, 300));
  await browser.close();
}
main().catch(e => { console.error(e); process.exit(1); });
