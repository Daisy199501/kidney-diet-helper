const fs = require('fs');
const src = fs.readFileSync('C:/Users/18210/Documents/肾病患者小工具/data/recipes.js', 'utf8');
const RECIPES = eval(src.match(/const RECIPES = (\[[\s\S]*\]);/)[1]);
[101, 104, 105, 110, 124, 131, 132, 134].forEach(id => {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  console.log(`#${id} ${r.name} [${r.region} ${r.season} ${r.meal}] ${r.stages.join('/')}`);
  console.log('  ing:', r.ingredients.map(i => i[0] + i[1]).join(';'));
  console.log('  nut:', JSON.stringify(r.nutrition));
  console.log('  flags:', r.flags.join('/'));
});
