const fs = require('fs');
const src = fs.readFileSync('C:/Users/18210/Documents/肾病患者小工具/data/recipes.js', 'utf8');
const RECIPES = eval(src.match(/const RECIPES = (\[[\s\S]*\]);/)[1]);

function recommend(profile) {
  const hard = [];
  if (profile.indicators.potassium === "偏高") hard.push("lowK");
  if (profile.indicators.phosphorus === "偏高") hard.push("lowP");
  if (profile.indicators.sodium === "偏高") hard.push("lowNa");
  if (profile.indicators.uric === "偏高") hard.push("lowPurine");
  return RECIPES.filter(r => {
    if (!r.stages.includes("all") && !r.stages.includes(profile.stage)) return false;
    return hard.every(f => r.flags.includes(f));
  }).map(r => {
    const userIngs = new Set(profile.ingredients);
    const present = r.ingredients.filter(([n]) => userIngs.has(n));
    let score = 0;
    if (r.region === profile.region) score += 20;
    score += Math.round(40 * present.length / r.ingredients.length);
    if (hard.every(f => r.flags.includes(f))) score += 30;
    return { id: r.id, name: r.name, meal: r.meal, score, present: present.length, total: r.ingredients.length, flags: r.flags };
  }).sort((a, b) => b.score - a.score);
}

function stageCounts() {
  const c = {};
  RECIPES.forEach(r => r.stages.forEach(s => c[s] = (c[s] || 0) + 1));
  return c;
}

const cases = [
  { label: "CKD3-5期·钾磷双高·食材[土豆,茄子]", profile: { region: "华北", stage: "CKD 3-5期非透析", ingredients: ["土豆", "茄子"], indicators: { potassium: "偏高", phosphorus: "偏高" } } },
  { label: "CKD3-5期·钾磷双高·无食材", profile: { region: "华北", stage: "CKD 3-5期非透析", ingredients: [], indicators: { potassium: "偏高", phosphorus: "偏高" } } },
  { label: "血液透析·钾磷双高·食材[土豆,茄子]", profile: { region: "华北", stage: "血液透析", ingredients: ["土豆", "茄子"], indicators: { potassium: "偏高", phosphorus: "偏高" } } },
  { label: "CKD3-5期·仅钾高·食材[土豆,茄子]", profile: { region: "华北", stage: "CKD 3-5期非透析", ingredients: ["土豆", "茄子"], indicators: { potassium: "偏高", phosphorus: "不关注" } } },
  { label: "CKD1-2期·钾磷双高·食材[土豆,茄子]", profile: { region: "华北", stage: "CKD 1-2期", ingredients: ["土豆", "茄子"], indicators: { potassium: "偏高", phosphorus: "偏高" } } },
  { label: "CKD3-5期·钾磷双高·食材[鸡蛋,西红柿]", profile: { region: "华北", stage: "CKD 3-5期非透析", ingredients: ["鸡蛋", "西红柿"], indicators: { potassium: "偏高", phosphorus: "偏高" } } },
];

console.log("stage counts:", JSON.stringify(stageCounts()));
console.log("flag counts: lowK", RECIPES.filter(r => r.flags.includes("lowK")).length,
  "lowP", RECIPES.filter(r => r.flags.includes("lowP")).length,
  "lowK&lowP", RECIPES.filter(r => r.flags.includes("lowK") && r.flags.includes("lowP")).length,
  "lowK&lowP&all-stage", RECIPES.filter(r => r.flags.includes("lowK") && r.flags.includes("lowP") && r.stages.includes("all")).length);
console.log("lowK recipes by stage: all", RECIPES.filter(r => r.flags.includes("lowK") && r.stages.includes("all")).length,
  "CKD1-2 only", RECIPES.filter(r => r.flags.includes("lowK") && r.stages.length === 1 && r.stages[0] === "CKD 1-2期").length);

cases.forEach(c => {
  const list = recommend(c.profile);
  const top5 = list.slice(0, 5).map(x => `${x.name}(${x.present}/${x.total})`).join("、");
  console.log(`\n[${c.label}] 匹配数=${list.length} 最高分=${list[0] ? list[0].score : "-"}`);
  console.log("  top5:", top5 || "无");
});

// 策略1 测算：硬排除 highK/highP，其余按标签排序，可匹配数量
function recommendLoose(profile) {
  const exclude = [];
  if (profile.indicators.potassium === "偏高") exclude.push("highK");
  if (profile.indicators.phosphorus === "偏高") exclude.push("highP");
  if (profile.indicators.sodium === "偏高") exclude.push("lowNa") && exclude.push("highNa");
  const prefer = [];
  if (profile.indicators.potassium === "偏高") prefer.push("lowK");
  if (profile.indicators.phosphorus === "偏高") prefer.push("lowP");
  if (profile.indicators.sodium === "偏高") prefer.push("lowNa");
  const list = RECIPES.filter(r => {
    if (!r.stages.includes("all") && !r.stages.includes(profile.stage)) return false;
    if (exclude.some(f => r.flags.includes(f))) return false;
    return true;
  }).map(r => {
    let score = 0;
    if (r.region === profile.region) score += 10;
    prefer.forEach(f => { if (r.flags.includes(f)) score += 25; });
    return { name: r.name, score, flags: r.flags };
  }).sort((a, b) => b.score - a.score);
  return list;
}

const looseCases = [
  { label: "CKD3-5期·钾磷双高（宽松版）", profile: { region: "华北", stage: "CKD 3-5期非透析", indicators: { potassium: "偏高", phosphorus: "偏高" } } },
  { label: "血液透析·钾磷双高（宽松版）", profile: { region: "华北", stage: "血液透析", indicators: { potassium: "偏高", phosphorus: "偏高" } } },
];
looseCases.forEach(c => {
  const list = recommendLoose(c.profile);
  const lowBoth = list.filter(x => x.flags.includes("lowK") && x.flags.includes("lowP")).length;
  console.log(`\n[${c.label}] 可用=${list.length}（其中双低=${lowBoth}，中钾/中磷可焯水限量=${list.length - lowBoth}）`);
});

// 策略2 测算：替代食材命中（以“西葫芦”为例：哪些菜谱的替代项提到西葫芦或土豆）
const target = "西葫芦";
const viaSub = RECIPES.filter(r => r.substitutes && r.substitutes.includes(target)).map(r => r.name);
console.log(`\n[替代匹配] 用户有“${target}”，可作为替代食材的菜谱：${viaSub.length} 道`, viaSub.slice(0, 10).join("、"));
