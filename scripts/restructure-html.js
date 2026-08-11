const fs = require('fs');
const p = 'C:/Users/18210/Documents/肾病患者小工具/index.html';
let html = fs.readFileSync(p, 'utf8');

html = html.replace(
  '<script src="recipes-extra.js"></script>',
  '<script src="data/recipes.js"></script>\n<script src="data/ingredients.js"></script>'
);

const start = html.indexOf('const RECIPES = [');
const endMark = 'if(typeof EXTRA_RECIPES !== "undefined") RECIPES.push(...EXTRA_RECIPES);';
const end = html.indexOf(endMark);
if (start < 0 || end < 0) throw new Error('RECIPES block markers not found');
html = html.slice(0, start) + html.slice(end + endMark.length);

fs.writeFileSync(p, html, 'utf8');
console.log('restructured, length:', html.length);
