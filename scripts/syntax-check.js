const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('C:/Users/18210/Documents/肾病患者小工具/index.html', 'utf8');
const matches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (!matches.length) throw new Error('no inline script found');
let code = matches.map(m => m[1]).join('\n');
new vm.Script(code);  // 仅做语法检查
console.log('inline script syntax OK, chars:', code.length);

// 校验两个数据文件可被解析并加载
for (const f of ['data/recipes.js', 'data/ingredients.js']) {
  const src = fs.readFileSync('C:/Users/18210/Documents/肾病患者小工具/' + f, 'utf8');
  new vm.Script(src);
  const sandbox = {};
  vm.createContext(sandbox);
  const key = f.includes('recipes') ? 'RECIPES' : 'INGREDIENT_DB';
  vm.runInContext(src + '\n;__result = ' + key + ';', sandbox);
  const val = sandbox.__result;
  if (!val || !val.length) throw new Error(f + ' 未定义或为空');
  console.log(f, 'OK, entries:', val.length);
}
