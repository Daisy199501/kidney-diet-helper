const fs = require('fs');
const oldRecipes = JSON.parse(fs.readFileSync('C:/tmp/web/recipes.json', 'utf8'));
const src = fs.readFileSync('C:/tmp/web/data/recipes.js', 'utf8');
const m = src.match(/const RECIPES = (\[[\s\S]*\]);\s*$/);
const rebuilt = eval(m[1]);
const ids = [1, 7, 10, 11, 13, 16, 40, 55, 73, 86, 96, 100];
for (const id of ids) {
  const old = oldRecipes.find(r => r.id === id);
  const neu = rebuilt.find(r => r.id === id);
  if (!old || !neu) { console.log('missing', id); continue; }
  console.log(`#${id} ${neu.name}`);
  console.log('  old:', JSON.stringify(old.nutrition), old.flags.join('/'));
  console.log('  new:', JSON.stringify(neu.nutrition), neu.flags.join('/'));
}
