const { chromium } = require('C:/Users/18210/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8000/';
const SHOTS = 'C:/tmp/web/shots/';
fs.mkdirSync(SHOTS, { recursive: true });

let passed = 0, failed = 0;
const failures = [];
function ok(name, cond, extra) {
  if (cond) { passed++; console.log('PASS', name); }
  else { failed++; failures.push(name + (extra ? ' :: ' + extra : '')); console.log('FAIL', name, extra || ''); }
}

async function newPage(browser, viewport) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 2 });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.__errors = errors;
  return page;
}

async function fillProfile(page, opts) {
  await page.click('#consentBtn');
  await page.selectOption('#pf-region', opts.region);
  await page.selectOption('#pf-stage', opts.stage);
  await page.fill('#pf-height', opts.height);
  await page.fill('#pf-weight', opts.weight);
  await page.selectOption('#pf-gender', opts.gender);
  await page.selectOption('#pf-activity', opts.activity);
  await page.selectOption('#ind-potassium', opts.potassium || '不关注');
  await page.selectOption('#ind-phosphorus', opts.phosphorus || '不关注');
  await page.selectOption('#ind-sodium', opts.sodium || '不关注');
  await page.selectOption('#ind-albumin', opts.albumin || '不关注');
  await page.selectOption('#ind-hemoglobin', opts.hemoglobin || '不关注');
  await page.selectOption('#ind-uric', opts.uric || '不关注');
  await page.click('#profileForm button[type="submit"]');
  await page.waitForSelector('#view-rec.active');
}

async function main() {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });

  // ---------- 三端视口布局 ----------
  for (const vp of [
    { name: 'phone-390', viewport: { width: 390, height: 844 } },
    { name: 'ipad-768', viewport: { width: 768, height: 1024 } },
    { name: 'pc-1440', viewport: { width: 1440, height: 900 } },
  ]) {
    const page = await newPage(browser, vp.viewport);
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const noOverflow = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    ok(`${vp.name} 无横向溢出`, noOverflow, await page.evaluate(() => `${document.documentElement.scrollWidth}/${window.innerWidth}`));
    await page.screenshot({ path: SHOTS + vp.name + '-home.png', fullPage: false });
    await page.close();
  }

  // ---------- 数据合并与去重 ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    const info = await page.evaluate(() => {
      const base = n => n.replace(/（[^）]*）/g, '').trim();
      const isVariant = n => ['低磷', '低盐', '低糖', '低嘌呤', '低蛋白', '补铁'].some(k => n.includes(k) && n.includes('（'));
      const bases = RECIPES.map(r => base(r.name));
      const news = RECIPES.filter(r => r.id >= 101);
      return {
        total: RECIPES.length,
        uniqueIds: new Set(RECIPES.map(r => r.id)).size,
        dupBases: RECIPES.filter((r, i) => bases.indexOf(base(r.name)) !== i && !isVariant(r.name)).map(r => r.name),
        hasDialysisDish: RECIPES.some(r => r.name === '酸菜白肉炖粉条（低盐版）' && r.stages.includes('腹膜透析') && r.stages.includes('血液透析')),
        hasSteamSweetPotato: RECIPES.some(r => r.name === '蒸红薯' && r.season === '四季'),
        hasLowPSeaBass: RECIPES.some(r => r.name === '清蒸鲈鱼（低磷版）'),
        newOk: news.every(r => r.nutrition && r.nutrition.energy > 0 && r.ingredients.length > 0)
      };
    });
    ok('合并后共133道菜谱', info.total === 133, 'total=' + info.total);
    ok('ID唯一', info.uniqueIds === info.total, 'ids=' + info.uniqueIds);
    ok('无重名菜谱（去括号基名）', info.dupBases.length === 0, info.dupBases.join('、'));
    ok('新增透析菜谱分期正确', info.hasDialysisDish);
    ok('新增“四季”菜谱', info.hasSteamSweetPotato);
    ok('保留“清蒸鲈鱼（低磷版）”变体', info.hasLowPSeaBass);
    ok('新增菜谱营养与食材完整', info.newOk);
    await page.close();
  }

  // ---------- 用例1：按指标推荐（血钾/血磷偏高） ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 3-5期非透析', height: '170', weight: '60', gender: '男', activity: '轻体力', potassium: '偏高', phosphorus: '偏高' });
    const count = await page.locator('#recContent .recipe-card').count();
    ok('用例1 推荐列表非空', count > 0, 'count=' + count);
    const info = await page.evaluate(() => {
      const p = JSON.parse(localStorage.getItem('ys_profile'));
      const list = recommend(p);
      return {
        n: list.length,
        noHigh: list.every(r => !r.flags.includes('highK') && !r.flags.includes('highP')),
        topLowBoth: !!(list[0] && list[0].flags.includes('lowK') && list[0].flags.includes('lowP'))
      };
    });
    ok('用例1 双高患者可用菜谱≥60道', info.n >= 60, 'n=' + info.n);
    ok('用例1 不含高钾/高磷菜谱', info.noHigh);
    ok('用例1 排序优先低钾+低磷', info.topLowBoth);
    const headers = await page.locator('#recContent .group-title').allTextContents();
    const seq = ['可直接做', '差 1–2 个食材', '需备齐更多食材'];
    const present = seq.filter(k => headers.some(h => h.includes(k)));
    const idxs = present.map(k => headers.findIndex(h => h.includes(k)));
    ok('用例1 分组顺序：可直接做 > 差1-2 > 需备齐', idxs.every((v, i) => i === 0 || v > idxs[i - 1]), headers.join(' / '));
    ok('用例1 无控制台错误', page.__errors.length === 0, page.__errors.join(' | '));
    await page.screenshot({ path: SHOTS + 'use1-recommend-phone.png' });
    await page.close();
  }

  // ---------- 用例2：按食材推荐 ----------
  {
    const page = await newPage(browser, { width: 768, height: 1024 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华东', stage: 'CKD 1-2期', height: '165', weight: '55', gender: '女', activity: '轻体力' });
    await page.click('[data-view="profile"]');
    await page.waitForSelector('#view-profile.active');
    for (const ing of ['土豆', '茄子', '鸡蛋', '西红柿']) {
      await page.click(`[data-ing="${ing}"]`);
    }
    await page.click('#profileForm button[type="submit"]');
    await page.waitForSelector('#view-rec.active');
    const match = await page.evaluate(() => {
      const p = JSON.parse(localStorage.getItem('ys_profile'));
      const list = recommend(p);
      const top = list[0];
      return { n: list.length, hasPresent: top && top.present.length > 0, missingNote: !!top && !!top.missing };
    });
    ok('用例2 返回结果并带已匹配食材', match.n > 0 && match.hasPresent);
    ok('用例2 展示缺料提示', match.missingNote);
    await page.screenshot({ path: SHOTS + 'use2-ingredients-ipad.png' });
    await page.close();
  }

  // ---------- 用例2b：替代食材匹配 ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 1-2期', height: '170', weight: '60', gender: '男', activity: '轻体力' });
    await page.click('.tabbar [data-view="profile"]');
    await page.waitForSelector('#view-profile.active');
    await page.click('[data-ing="西葫芦"]');
    await page.click('#profileForm button[type="submit"]');
    await page.waitForSelector('#view-rec.active');
    const info = await page.evaluate(() => {
      const p = JSON.parse(localStorage.getItem('ys_profile'));
      const list = recommend(p);
      const withSub = list.filter(r => r.sub && r.sub.length > 0);
      return { n: list.length, subCount: withSub.length, sample: withSub[0] ? withSub[0].name + ':' + withSub[0].sub.map(s => s.missing + '←' + s.use).join(',') : '' };
    });
    ok('用例2b 替代匹配：用西葫芦可替代的菜谱>0', info.subCount > 0, 'sub=' + info.subCount + ' ' + info.sample);
    await page.close();
  }

  // ---------- 分组：可直接做排最前 ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 1-2期', height: '170', weight: '60', gender: '男', activity: '轻体力' });
    await page.click('.tabbar [data-view="profile"]');
    await page.waitForSelector('#view-profile.active');
    for (const ing of ['黄瓜', '粉丝']) await page.click(`[data-ing="${ing}"]`);
    await page.click('#profileForm button[type="submit"]');
    await page.waitForSelector('#view-rec.active');
    const first = await page.locator('#recContent .group-title').first().textContent();
    ok('分组：可直接做排最前', first.includes('可直接做'), first);
    await page.screenshot({ path: SHOTS + 'use2c-groups.png' });
    await page.close();
  }

  // ---------- 用例3：菜谱详情 ----------
  {
    const page = await newPage(browser, { width: 1440, height: 900 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 3-5期非透析', height: '170', weight: '60', gender: '男', activity: '轻体力' });
    await page.locator('#recContent .recipe-card').first().click();
    await page.waitForSelector('#view-detail.active');
    const info = await page.evaluate(() => {
      const ing = document.querySelectorAll('#view-detail .ing-list li').length;
      const steps = document.querySelectorAll('#view-detail .steps li').length;
      const nutri = document.querySelectorAll('#view-detail .nutri-table tr').length;
      const pctCells = document.querySelectorAll('#view-detail .nutri-table td.pct').length;
      const badges = document.querySelectorAll('#view-detail .level-badge').length;
      const header = document.querySelector('#view-detail .nutri-table tr:first-child')?.textContent || '';
      const stage = document.querySelector('#view-detail .detail-hero + .meta .pill:last-child')?.textContent || '';
      const fav = !!document.querySelector('#view-detail [data-fav]');
      return { ing, steps, nutri, pctCells, badges, header, stage, fav };
    });
    ok('用例3 食材清单>0', info.ing > 0);
    ok('用例3 分步做法>0', info.steps > 0);
    ok('用例3 营养估算10项+表头', info.nutri === 11, 'rows=' + info.nutri);
    ok('用例3 占每日参考比例列', info.pctCells === 10 && info.header.includes('占每日参考'), 'pct=' + info.pctCells);
    ok('用例3 一餐判定标签', info.badges >= 10, 'badges=' + info.badges);
    ok('用例3 显示适用分期', info.stage.includes('适用'));
    ok('用例3 有收藏按钮', info.fav);
    await page.screenshot({ path: SHOTS + 'use3-detail-pc.png' });
    await page.close();
  }

  // ---------- 用例4：收藏 ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 1-2期', height: '170', weight: '60', gender: '男', activity: '轻体力' });
    await page.locator('#recContent .recipe-card').first().click();
    await page.waitForSelector('#view-detail.active');
    await page.click('#view-detail [data-fav]');
    await page.click('.tabbar [data-view="fav"]');
    await page.waitForSelector('#view-fav.active');
    const favCount = await page.locator('#favContent .recipe-card').count();
    ok('用例4 收藏后出现在我的收藏', favCount >= 1, 'count=' + favCount);
    await page.click('#favContent .recipe-card [data-fav]');
    const after = await page.locator('#favContent .recipe-card').count();
    ok('用例4 取消收藏后消失', after === 0, 'count=' + after);
    await page.close();
  }

  // ---------- 用例5：提醒 + ICS 导出 ----------
  {
    const page = await newPage(browser, { width: 768, height: 1024 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.click('#consentBtn');
    await page.click('[data-view="remind"]');
    await page.waitForSelector('#view-remind.active');
    await page.fill('#rm-name', '服药提醒');
    await page.selectOption('#rm-type', '服药');
    await page.click('#addTimeBtn');
    await page.click('#addTimeBtn');
    const times = page.locator('.rm-time');
    await times.nth(0).fill('08:00');
    await times.nth(1).fill('12:00');
    await times.nth(2).fill('18:00');
    await page.selectOption('#rm-repeat', 'weekly');
    await page.click('#remindForm button[type="submit"]');
    const row = await page.locator('#remindList .reminder-row').count();
    const rowText = await page.locator('#remindList .reminder-row').first().textContent();
    ok('用例5 提醒保存成功', row === 1, 'row=' + row);
    ok('用例5 显示3个时间点', rowText.includes('08:00') && rowText.includes('12:00') && rowText.includes('18:00'));
    const downloadPromise = page.waitForEvent('download');
    await page.click('#exportIcs');
    const download = await downloadPromise;
    const icsPath = 'C:/tmp/web/reminders.ics';
    await download.saveAs(icsPath);
    const ics = fs.readFileSync(icsPath, 'utf8');
    ok('用例5 ICS 导出含日历头', ics.includes('BEGIN:VCALENDAR') && ics.includes('END:VCALENDAR'));
    ok('用例5 ICS 含每周重复规则', ics.includes('RRULE:FREQ=WEEKLY') && ics.includes('BYDAY=MO,TU,WE,TH,FR'));
    ok('用例5 ICS 含3个事件', (ics.match(/BEGIN:VEVENT/g) || []).length === 3);
    await page.screenshot({ path: SHOTS + 'use5-remind-ipad.png' });
    await page.close();
  }

  // ---------- 用例6：每日需求 + 智能配餐 ----------
  {
    const page = await newPage(browser, { width: 1440, height: 900 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 3-5期非透析', height: '170', weight: '60', gender: '男', activity: '轻体力' });
    await page.click('[data-view="plan"]');
    await page.waitForSelector('#view-plan.active');
    const cards = await page.locator('.target-card').allTextContents();
    ok('用例6 目标卡片8项', cards.length === 8, 'n=' + cards.length);
    const txt = cards.join(' ');
    ok('用例6 能量1800kcal', txt.includes('1800'));
    ok('用例6 蛋白36g', txt.includes('36'));
    ok('用例6 钾2500mg', txt.includes('2500'));
    ok('用例6 磷800mg', txt.includes('800'));
    ok('用例6 铁12mg', txt.includes('12'));
    ok('用例6 水1700ml', txt.includes('1700'));
    await page.click('[data-auto-plan="1"]');
    const mealTexts = await page.locator('.meal-recipe').allTextContents();
    ok('用例6 智能配餐四餐齐备', mealTexts.every(t => t && !t.includes('未选择')), mealTexts.join(' | '));
    const totals1 = await page.locator('.totals-row').allTextContents();
    ok('用例6 累计营养8行', totals1.length === 8);
    ok('用例6 累计显示百分比', totals1.every(t => t.includes('%')), totals1.join(' | '));
    ok('用例6 累计带判定标签', await page.locator('.totals-row .level-badge').count() >= 8);
    const sel = page.locator('.meal-slot:first-child [data-meal-select]');
    const curVal = await sel.inputValue();
    const opts = await sel.locator('option').all();
    let targetIdx = null;
    for (let i = 0; i < opts.length; i++) {
      const v = await opts[i].getAttribute('value');
      if (v && v !== curVal) { targetIdx = i; break; }
    }
    await sel.selectOption({ index: targetIdx });
    const totals2 = await page.locator('.totals-row').allTextContents();
    ok('用例6 手动换菜后累计更新', totals1.join() !== totals2.join());
    await page.screenshot({ path: SHOTS + 'use6-plan-pc.png' });
    await page.close();
  }

  // ---------- 特殊分期显示：CKD1-2 钾不限制 / 透析水遵医嘱 ----------
  {
    const page = await newPage(browser, { width: 768, height: 1024 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await page.click('#consentBtn');
    await page.selectOption('#pf-region', '华北');
    await page.selectOption('#pf-stage', 'CKD 1-2期');
    await page.fill('#pf-height', '170');
    await page.fill('#pf-weight', '60');
    await page.selectOption('#ind-potassium', '正常');
    const preview = await page.locator('#profileTargets .preview-grid').textContent();
    ok('CKD1-2期血钾正常显示“不限制”', preview.includes('不限制'));
    await page.selectOption('#pf-stage', '腹膜透析');
    await page.waitForTimeout(100);
    const preview2 = await page.locator('#profileTargets .preview-grid').textContent();
    ok('透析期水显示“遵医嘱”', preview2.includes('遵医嘱'));
    await page.close();
  }

  // ---------- 超标红色高亮 ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华北', stage: 'CKD 3-5期非透析', height: '170', weight: '60', gender: '男', activity: '轻体力', potassium: '偏高' });
    await page.evaluate(() => {
      localStorage.setItem('ys_plan', JSON.stringify({ breakfast: 7, lunch: 16, dinner: 31, snack: null }));
    });
    await page.reload({ waitUntil: 'networkidle' });
    await page.click('.tabbar [data-view="plan"]');
    await page.waitForSelector('#view-plan.active');
    const overCount = await page.locator('.totals-row.over').count();
    const kRow = page.locator('.totals-row', { hasText: '钾' }).first();
    const hasOverClass = await kRow.evaluate(el => el.classList.contains('over'));
    const numColor = await kRow.locator('.totals-num').evaluate(el => getComputedStyle(el).color);
    const kBadge = await kRow.locator('.level-badge').textContent();
    const barColor = await kRow.locator('.bar-fill').evaluate(el => getComputedStyle(el).backgroundColor);
    ok('超标营养素红色高亮（钾行）', hasOverClass && overCount >= 1, `over=${overCount} color=${numColor}`);
    ok('超标行标签为“偏高”', kBadge === '偏高', kBadge);
    ok('超标时绿条变红条', barColor === 'rgb(177, 67, 67)', barColor);
    await page.screenshot({ path: SHOTS + 'use7-exceed-red.png' });
    await page.close();
  }

  // ---------- 本地持久化 ----------
  {
    const page = await newPage(browser, { width: 390, height: 844 });
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await fillProfile(page, { region: '华南', stage: '血液透析', height: '160', weight: '50', gender: '女', activity: '轻体力' });
    await page.reload({ waitUntil: 'networkidle' });
    const persisted = await page.evaluate(() => JSON.parse(localStorage.getItem('ys_profile')).region);
    ok('刷新后档案保留', persisted === '华南');
    const overlayHidden = await page.evaluate(() => document.getElementById('overlay').classList.contains('hidden'));
    ok('刷新后不再弹免责声明', overlayHidden);
    await page.close();
  }

  await browser.close();
  console.log('----');
  console.log('PASS', passed, 'FAIL', failed);
  if (failures.length) console.log(failures.join('\n'));
  process.exit(failed ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(1); });
