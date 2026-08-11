const fs = require('fs');
const base = 'C:/tmp/web/';
const html = fs.readFileSync(base + 'index.html', 'utf8');
const extra = fs.readFileSync(base + 'recipes-extra.js', 'utf8');

function extractRecipes(src) {
  const m = src.match(/const RECIPES = (\[[\s\S]*?\]);\s*\n\s*if\(typeof EXTRA_RECIPES/);
  if (!m) throw new Error('RECIPES block not found');
  return eval(m[1]);
}

function extractExtra(src) {
  const m = src.match(/var EXTRA_RECIPES = (\[[\s\S]*?\]);/);
  if (!m) throw new Error('EXTRA_RECIPES block not found');
  return eval(m[1]);
}

const r1 = extractRecipes(html);
const r2 = extractExtra(extra);
const all = r1.concat(r2);
const ings = new Set();
all.forEach(r => r.ingredients.forEach(i => ings.add(i[0])));

fs.writeFileSync(base + 'recipes.json', JSON.stringify(all, null, 1), 'utf8');
fs.writeFileSync(base + 'ingredient-names.txt', [...ings].sort((a, b) => a.localeCompare(b, 'zh')).join('\n'), 'utf8');
console.log('recipes:', all.length);
console.log('ingredients:', ings.size);
