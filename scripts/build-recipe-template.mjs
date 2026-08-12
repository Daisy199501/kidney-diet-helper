import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const ROOT = "C:/Users/18210/Documents/肾病患者小工具/";
const OUT = ROOT + "outputs/2026-08-12-recipe-template/";
await fs.mkdir(OUT, { recursive: true });

const workbook = Workbook.create();

// 读取食材库用于“食材参考”页
const ingSrc = await fs.readFile(ROOT + "data/ingredients.js", "utf8");
const ingDb = JSON.parse(ingSrc.match(/const INGREDIENT_DB = (\[[\s\S]*\]);/)[1]);
const ingRows = ingDb.map(f => [
  f.name,
  f.per100g.potassium + "",
  f.per100g.phosphorus + "",
  f.per100g.sodium + "",
  f.level.k,
  f.level.p,
  f.level.na,
  f.source === "guide-table1.1" ? "指南附录1表1.1" : "成分表常见口径估算"
]);

const GREEN = "#1F5F46";
const LIGHT_YELLOW = "#FFF8E1";
const LIGHT_GREEN = "#E8F3EC";
const BORDER = "#D9D9D9";

// ============ Sheet 1: 填写说明 ============
const guide = workbook.worksheets.add("填写说明");
guide.showGridLines = false;
guide.getRange("A1:H1").merge();
guide.getRange("A1").values = [["《成人慢性肾脏病食养指南（2024年版）》菜谱整理模板"]];
guide.getRange("A1").format = { fill: GREEN, font: { bold: true, color: "#FFFFFF", size: 14 }, horizontalAlignment: "center", verticalAlignment: "center" };
guide.getRange("A1:H1").format.rowHeight = 30;

guide.getRange("A3:H3").merge();
guide.getRange("A3").values = [["使用步骤"]];
guide.getRange("A3").format = { font: { bold: true, size: 12 } };
const steps = [
  ["1", "在“菜谱模板”页填写，一行一道菜。食材名称请尽量使用“食材参考”页里的标准名称。"],
  ["2", "营养数值（能量、蛋白质、钠、钾、磷、钙、铁、水）由我们根据食材和用量自动计算，你无需填写。"],
  ["3", "来源必须写明：指南附录3（第几页/哪个地区菜谱）、指南附录4（食养方）、或“自编”。"],
  ["4", "填写完成后把文件发回，我们导入计算、打标签并纳入推荐库。"],
  ["5", "如果你用到“食材参考”页没有的食材，请在备注写明，并提供每100克钠/钾/磷参考值（或标注“待查证”）。"]
];
guide.getRange("A4:B8").values = steps;
guide.getRange("A4:B8").format = { verticalAlignment: "top", wrapText: true };
guide.getRange("A4:A8").format = { font: { bold: true }, horizontalAlignment: "center" };
guide.getRange("B4:B8").format.columnWidth = 100;

guide.getRange("A10:H10").merge();
guide.getRange("A10").values = [["填写要点"]];
guide.getRange("A10").format = { font: { bold: true, size: 12 } };
const points = [
  ["地区", "东北 / 西北 / 华北 / 华东 / 华中 / 西南 / 华南 / 通用"],
  ["季节", "春 / 夏 / 秋 / 冬 / 四季"],
  ["餐次", "早餐 / 午餐 / 晚餐 / 加餐"],
  ["适用分期", "全分期，或写“CKD 3-5期非透析/腹膜透析/血液透析”，多个用 / 分隔"],
  ["食材及用量", "格式：名称+克数，分号分隔，如：西红柿150g;鸡蛋2枚;食用油8g"],
  ["做法步骤", "用数字编号，步骤间用分号分隔，如：1.切块;2.炒熟;3.调味"],
  ["营养与标签", "无需填写，我们按指南附录1表1.1及成分表口径自动计算"],
  ["合规提示", "菜谱内容仅供参考，不替代医生和营养师建议；避免绝对化承诺（如“保证降钾”）"]
];
guide.getRange("A11:B18").values = points;
guide.getRange("A11:B18").format = { verticalAlignment: "top", wrapText: true, borders: { preset: "all", style: "thin", color: BORDER } };
guide.getRange("A11:A18").format = { font: { bold: true }, fill: LIGHT_GREEN };
guide.getRange("B11:B18").format.columnWidth = 100;

guide.getRange("A20:H20").merge();
guide.getRange("A20").values = [["颜色与字段说明"]];
guide.getRange("A20").format = { font: { bold: true, size: 12 } };
const legend = [
  ["浅黄底", "需要你填写的输入列（菜名、食材、做法、来源等）"],
  ["深绿表头", "列标题，不要改动"],
  ["来源列", "指南附录3（可注明页码）/ 指南附录4 / 自编，必须填写"],
  ["审核状态列", "待审核 / 通过 / 需修改，方便你和营养师协作"]
];
guide.getRange("A21:B24").values = legend;
guide.getRange("A21:B24").format = { verticalAlignment: "top", borders: { preset: "all", style: "thin", color: BORDER } };
guide.getRange("A21:A24").format = { font: { bold: true } };
guide.getRange("A21").format.fill = LIGHT_YELLOW;
guide.getRange("A23:B23").format.fill = "#F2F2F2";

// ============ Sheet 2: 菜谱模板 ============
const tpl = workbook.worksheets.add("菜谱模板");
tpl.showGridLines = false;
const headers = ["序号", "菜名", "地区", "季节", "餐次", "适用分期", "食材及用量", "做法步骤", "烹饪时间(分钟)", "难度", "替代食材", "注意事项", "来源", "审核状态", "备注"];
tpl.getRange("A1:O1").values = [headers];
tpl.getRange("A1:O1").format = {
  fill: GREEN, font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center", verticalAlignment: "center",
  borders: { preset: "all", style: "thin", color: BORDER }
};
tpl.getRange("A1:O1").format.rowHeight = 28;
tpl.freezePanes.freezeRows(1);

const examples = [
  ["示例1", "番茄炒蛋", "华东", "春", "午餐", "全分期", "西红柿150g;鸡蛋2枚;小葱5g;食用油8g", "1.西红柿切块，鸡蛋打散;2.热油将蛋液炒至刚凝固，盛出备用;3.下西红柿炒软，回锅拌匀，少盐调味", 10, "简单", "西红柿可用西葫芦替换", "少盐；蛋白质总量按分期和医嘱控制。", "自编", "待审核", ""],
  ["示例2", "清蒸鲈鱼", "华南", "春", "晚餐", "CKD 3-5期非透析/腹膜透析/血液透析", "鲈鱼120g;姜5g;葱5g;蒸鱼豉油4g", "1.鲈鱼处理干净，铺姜片;2.水开后大火蒸8分钟;3.去姜丝撒葱花，淋少量豉油", 18, "中等", "鲈鱼可用鸡胸肉替换", "不再加盐，豉油少量；磷中等，按医嘱限量。", "自编", "待审核", ""],
  ["示例3", "小米粥", "华北", "春", "早餐", "全分期", "小米50g;清水500ml", "1.小米淘洗后加水;2.煮开转小火;3.熬25分钟至软稠", 30, "简单", "小米可用大米替换", "不加糖；粥水计入每日水量。", "自编", "待审核", ""]
];
tpl.getRange("A3:O5").values = examples;

// 空白填写行（3–202 行，含示例共 200 行）
const inputRange = "A3:O202";
tpl.getRange(inputRange).format = {
  verticalAlignment: "top", wrapText: true,
  borders: { preset: "all", style: "thin", color: BORDER }
};
// 输入列浅黄底（除序号/审核状态外均需填写）
tpl.getRange("B3:O202").format.fill = LIGHT_YELLOW;
tpl.getRange("A3:A202").format.fill = "#FFFFFF";
tpl.getRange("N3:N202").format.fill = "#FFFFFF";
tpl.getRange("O3:O202").format.fill = "#FFFFFF";

const widths = { A: 7, B: 16, C: 9, D: 7, E: 9, F: 26, G: 32, H: 48, I: 11, J: 8, K: 24, L: 30, M: 13, N: 10, O: 18 };
for (const [col, w] of Object.entries(widths)) {
  tpl.getRange(`${col}:${col}`).format.columnWidth = w;
}

// 下拉校验
const validations = [
  ["C3:C202", ["东北", "西北", "华北", "华东", "华中", "西南", "华南", "通用"]],
  ["D3:D202", ["春", "夏", "秋", "冬", "四季"]],
  ["E3:E202", ["早餐", "午餐", "晚餐", "加餐"]],
  ["J3:J202", ["简单", "中等", "较难"]],
  ["M3:M202", ["指南附录3", "指南附录4", "自编", "其他"]],
  ["N3:N202", ["待审核", "通过", "需修改"]]
];
for (const [range, values] of validations) {
  tpl.dataValidations.add({ range, rule: { type: "list", values } });
}

// ============ Sheet 3: 食材参考 ============
const ing = workbook.worksheets.add("食材参考");
ing.showGridLines = false;
const ingHeaders = ["食材名称", "钾(mg/100g)", "磷(mg/100g)", "钠(mg/100g)", "钾等级", "磷等级", "钠等级", "数据来源"];
ing.getRange("A1:H1").values = [ingHeaders];
ing.getRange("A1:H1").format = {
  fill: GREEN, font: { bold: true, color: "#FFFFFF" },
  horizontalAlignment: "center", verticalAlignment: "center",
  borders: { preset: "all", style: "thin", color: BORDER }
};
ing.freezePanes.freezeRows(1);
ing.getRange("A2:H" + (1 + ingRows.length)).values = ingRows;
ing.getRange("A2:H" + (1 + ingRows.length)).format = {
  verticalAlignment: "top", borders: { preset: "all", style: "thin", color: BORDER }
};
const ingWidths = { A: 14, B: 13, C: 13, D: 13, E: 9, F: 9, G: 9, H: 20 };
for (const [col, w] of Object.entries(ingWidths)) {
  ing.getRange(`${col}:${col}`).format.columnWidth = w;
}
for (const col of ["E", "F", "G"]) {
  const range = ing.getRange(`${col}2:${col}${1 + ingRows.length}`);
  range.conditionalFormats.add("containsText", { text: "高", format: { fill: "#FBE4E4", font: { color: "#B14343", bold: true } } });
  range.conditionalFormats.add("containsText", { text: "中", format: { fill: "#FFF3E0", font: { color: "#C26A3B", bold: true } } });
  range.conditionalFormats.add("containsText", { text: "低", format: { fill: "#E4F1EA", font: { color: "#1F5F46", bold: true } } });
}

// ============ 校验与导出 ============
const check = await workbook.inspect({
  kind: "table",
  range: "菜谱模板!A1:O8",
  include: "values",
  tableMaxRows: 8,
  tableMaxCols: 15
});
console.log(check.ndjson.slice(0, 800));

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "formula error scan"
});
console.log("formula errors:", errors.ndjson);

const ingCheck = await workbook.inspect({
  kind: "table",
  range: "食材参考!A1:H78",
  include: "values",
  tableMaxRows: 4,
  tableMaxCols: 8
});
console.log(ingCheck.ndjson.slice(0, 500));

const preview = await workbook.render({ sheetName: "菜谱模板", range: "A1:O8", scale: 1, format: "png" });
await fs.writeFile(OUT + "preview.png", new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(OUT + "菜谱整理模板.xlsx");
await fs.copyFile(OUT + "菜谱整理模板.xlsx", ROOT + "菜谱整理模板.xlsx");
console.log("saved:", OUT + "菜谱整理模板.xlsx");
