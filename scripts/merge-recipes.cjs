const fs = require('fs');

let existing = JSON.parse(fs.readFileSync('C:/tmp/web/recipes.json', 'utf8'));
const rows = JSON.parse(fs.readFileSync('C:/tmp/web/user-recipes.json', 'utf8'));

// 现有库按菜名去重（保留首个，如历史遗留的两道同名“凉拌木耳”）
const seenExisting = new Set();
const existingClean = existing.filter(r => {
  if (seenExisting.has(r.name)) return false;
  seenExisting.add(r.name);
  return true;
});
existing = existingClean;

function baseName(name) {
  return String(name).replace(/（[^）]*）/g, '').trim();
}
const VARIANT_KEEP = ['低磷', '低盐', '低糖', '低嘌呤', '低蛋白', '补铁'];

const existingExact = new Set(existing.map(r => r.name));
const existingBase = new Set(existing.map(r => baseName(r.name)));

function parseStages(s) {
  if (!s) return ['all'];
  const t = String(s).trim();
  if (t === '全分期') return ['all'];
  const out = [];
  t.split('/').forEach(x => {
    x = x.trim();
    if (x === 'CKD 5期透析') { out.push('腹膜透析', '血液透析'); }
    else if (x) out.push(x);
  });
  return out;
}

function parseIngredients(s) {
  return String(s || '').split(';').map(p => p.trim()).filter(Boolean).map(p => {
    const m = p.match(/^(.+?)(\d+(?:\.\d+)?.*)$/);
    if (!m) return [p, ''];
    return [m[1].trim(), m[2].trim()];
  });
}

function parseSteps(s) {
  return String(s || '').split(';').map(x => x.trim().replace(/^\d+[\.、]\s*/, '')).filter(Boolean);
}

const added = [];
const skipped = [];
const seenNew = new Set();

rows.slice(1).forEach((row) => {
  const name = row[1];
  if (name === null || String(name).trim() === '') return;
  const n = String(name).trim();
  const base = baseName(n);
  const isVariant = VARIANT_KEEP.some(k => n.includes(k) && n.includes('（'));
  if (existingExact.has(n) || existingBase.has(base)) {
    if (existingBase.has(base) && isVariant) {
      // 健康变体（如 清蒸鲈鱼（低磷版））保留
    } else {
      skipped.push(n);
      return;
    }
  }
  if (seenNew.has(base)) { skipped.push(n + '（本批内重复）'); return; }
  seenNew.add(base);

  added.push({
    id: 101 + added.length,
    name: n,
    region: String(row[2] || '').trim() || '通用',
    season: String(row[3] || '').trim() || '四季',
    meal: String(row[4] || '').trim() || '午餐',
    stages: parseStages(row[5]),
    ingredients: parseIngredients(row[6]),
    steps: parseSteps(row[7]),
    time: (row[8] !== null && row[8] !== '') ? String(row[8]) + '分钟' : '20分钟',
    difficulty: String(row[9] || '').trim() || '简单',
    substitutes: String(row[10] || '').trim(),
    notes: String(row[11] || '').trim(),
    source: String(row[12] || '').trim() || '自编',
    ageGroup: String(row[14] || '').trim(),
    genderNote: String(row[15] || '').trim(),
    condition: String(row[16] || '').trim(),
    remark: String(row[17] || '').trim(),
    flags: [],
    tags: [],
    nutrition: {}
  });
});

const merged = existing.concat(added);
fs.writeFileSync('C:/tmp/web/recipes.json', JSON.stringify(merged, null, 1), 'utf8');

console.log('existing:', existing.length, 'added:', added.length, 'skipped:', skipped.length, 'total:', merged.length);
console.log('skipped:', skipped.join('、'));
console.log('added names:', added.map(r => r.name).join('、'));
