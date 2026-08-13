import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const XLSX = "C:/Users/18210/Documents/WeChat Files/wxid_2957809577812/FileStorage/File/2026-08/菜谱整理模板_4234.xlsx";
const OUT = "C:/tmp/web/user-recipes.json";

const blob = await FileBlob.load(XLSX);
const workbook = await SpreadsheetFile.importXlsx(blob);

const sheets = await workbook.inspect({ kind: "sheet", include: "id,name" });
console.log("sheets:", sheets.ndjson);

const tpl = workbook.worksheets.getItem("菜谱模板");
const used = tpl.getUsedRange();
const addr = used.address;
console.log("used range:", addr);
const values = await used.values;
console.log("rows:", values.length, "cols:", values[0]?.length);

await fs.writeFile(OUT, JSON.stringify(values, null, 1), "utf8");

// 打印非空行摘要
const header = values[0];
values.slice(1).forEach((row, i) => {
  if (row.some(c => c !== null && String(c).trim() !== "")) {
    console.log(`row${i + 2}:`, (row[1] || "") + " | " + (row[2] || "") + " | " + (row[3] || "") + " | " + (row[4] || "") + " | " + (row[5] || "") + " | " + String(row[6] || "").slice(0, 30));
  }
});
