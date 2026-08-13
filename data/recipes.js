// 菜谱库：100 道示例菜谱。营养值按《成人慢性肾脏病食养指南（2024年版）》附录1表1.1及中国食物成分表常见口径估算，仅供饮食参考，请遵医嘱。
const RECIPES = [
{
"id": 1,
"name": "番茄炒蛋",
"region": "华东",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 248,
"protein": 14.4,
"fat": 17.1,
"carb": 9.1,
"sodium": 339,
"potassium": 430,
"phosphorus": 166,
"calcium": 75,
"iron": 2.7,
"water": 90
},
"ingredients": [
[
"鸡蛋",
"2枚"
],
[
"西红柿",
"1个约150g"
],
[
"小葱",
"5g"
],
[
"食用油",
"8g"
]
],
"steps": [
"西红柿切块，鸡蛋打散。",
"热油将蛋液炒至刚凝固，盛出备用。",
"下西红柿炒软，回锅拌匀，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "西红柿可用西葫芦替换",
"notes": "少盐；蛋白质总量按分期和医嘱控制。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 2,
"name": "西葫芦炒肉丝",
"region": "华北",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 205,
"protein": 14.0,
"fat": 12.1,
"carb": 9.9,
"sodium": 245,
"potassium": 382,
"phosphorus": 153,
"calcium": 34,
"iron": 2.5,
"water": 110
},
"ingredients": [
[
"西葫芦",
"200g"
],
[
"瘦肉",
"60g"
],
[
"蒜",
"5g"
],
[
"食用油",
"8g"
]
],
"steps": [
"西葫芦切片，瘦肉切丝。",
"瘦肉丝焯水后捞出，去除部分磷。",
"热油爆香蒜片，下肉丝和西葫芦快炒，少盐调味。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "瘦肉可用鸡胸肉替换",
"notes": "肉量按分期控制，汤不喝。",
"source": "示例数据，待审核"
},
{
"id": 3,
"name": "冬瓜豆腐汤",
"region": "华东",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 117,
"protein": 10.3,
"fat": 4.1,
"carb": 9.5,
"sodium": 215,
"potassium": 270,
"phosphorus": 143,
"calcium": 191,
"iron": 3.2,
"water": 320
},
"ingredients": [
[
"冬瓜",
"250g"
],
[
"豆腐",
"100g"
],
[
"姜",
"3g"
],
[
"香菜",
"5g"
]
],
"steps": [
"冬瓜去皮切块，豆腐切块。",
"水开后下冬瓜和姜片煮至半熟。",
"下豆腐再煮5分钟，少盐调味，撒香菜。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "豆腐可用冬瓜瓤等量替换",
"notes": "汤不喝底，减少钠和磷摄入。",
"source": "示例数据，待审核"
},
{
"id": 4,
"name": "白菜炖豆腐",
"region": "东北",
"season": "冬",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 174,
"protein": 12.3,
"fat": 9.8,
"carb": 9.1,
"sodium": 386,
"potassium": 373,
"phosphorus": 169,
"calcium": 242,
"iron": 3.8,
"water": 280
},
"ingredients": [
[
"大白菜",
"200g"
],
[
"北豆腐",
"100g"
],
[
"葱",
"5g"
],
[
"食用油",
"6g"
]
],
"steps": [
"白菜切段，豆腐切块。",
"少油下葱段，加白菜翻炒。",
"加水与豆腐同炖15分钟，少盐调味。"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "白菜可用娃娃菜替换",
"notes": "豆腐磷含量中等，按医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 5,
"name": "蒸茄子",
"region": "西南",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 79,
"protein": 2.6,
"fat": 2.4,
"carb": 11.8,
"sodium": 185,
"potassium": 312,
"phosphorus": 59,
"calcium": 51,
"iron": 1.3,
"water": 120
},
"ingredients": [
[
"茄子",
"200g"
],
[
"蒜",
"6g"
],
[
"生抽",
"3g"
],
[
"香油",
"2g"
]
],
"steps": [
"长茄子切条，上锅蒸8分钟。",
"蒜切末，加生抽和香油调成蘸料。",
"茄子蒸熟后淋少量蘸料即可。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "茄子可用西葫芦替换",
"notes": "蘸料少量，避免过咸。",
"source": "示例数据，待审核"
},
{
"id": 6,
"name": "胡萝卜炒西兰花",
"region": "西北",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 154,
"protein": 6.3,
"fat": 8.1,
"carb": 14.0,
"sodium": 328,
"potassium": 436,
"phosphorus": 121,
"calcium": 101,
"iron": 2.4,
"water": 130
},
"ingredients": [
[
"西兰花",
"150g"
],
[
"胡萝卜",
"80g"
],
[
"蒜",
"5g"
],
[
"食用油",
"7g"
]
],
"steps": [
"西兰花掰小朵，胡萝卜切片。",
"西兰花焯水1分钟捞出。",
"热油炒胡萝卜，再下西兰花和蒜片，少盐调味。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "西兰花可用菜花替换",
"notes": "高钾时请遵医嘱并控制份量。",
"source": "示例数据，待审核"
},
{
"id": 7,
"name": "土豆烧茄子",
"region": "东北",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 262,
"protein": 5.8,
"fat": 10.7,
"carb": 35.7,
"sodium": 218,
"potassium": 776,
"phosphorus": 110,
"calcium": 52,
"iron": 2.2,
"water": 100
},
"ingredients": [
[
"土豆",
"150g"
],
[
"茄子",
"150g"
],
[
"青椒",
"30g"
],
[
"食用油",
"10g"
]
],
"steps": [
"土豆切块浸泡，茄子切块。",
"土豆焯水后捞出，降低部分钾。",
"热油煸炒土豆和茄子，加水焖熟，少盐调味。"
],
"time": "25分钟",
"difficulty": "中等",
"substitutes": "土豆可用冬瓜替换",
"notes": "土豆含钾较高，血钾偏高时不建议食用。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 8,
"name": "南瓜小米粥",
"region": "华北",
"season": "秋",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 166,
"protein": 4.2,
"fat": 1.3,
"carb": 34.3,
"sodium": 2,
"potassium": 230,
"phosphorus": 111,
"calcium": 29,
"iron": 2.4,
"water": 380
},
"ingredients": [
[
"南瓜",
"80g"
],
[
"小米",
"40g"
],
[
"清水",
"500ml"
]
],
"steps": [
"南瓜去皮切小块。",
"小米淘洗后与南瓜同煮。",
"小火熬20分钟至粥软稠即可。"
],
"time": "30分钟",
"difficulty": "简单",
"substitutes": "南瓜可用山药替换",
"notes": "一次食用量适中，不加糖。",
"source": "示例数据，待审核"
},
{
"id": 9,
"name": "黄瓜拌粉丝",
"region": "华中",
"season": "夏",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 172,
"protein": 1.2,
"fat": 2.3,
"carb": 36.6,
"sodium": 13,
"potassium": 104,
"phosphorus": 30,
"calcium": 29,
"iron": 1.0,
"water": 110
},
"ingredients": [
[
"黄瓜",
"100g"
],
[
"粉丝",
"40g"
],
[
"醋",
"5g"
],
[
"香油",
"2g"
]
],
"steps": [
"粉丝用温水泡软后过凉。",
"黄瓜切丝与粉丝同拌。",
"加醋和香油调味即可。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "黄瓜可用丝瓜替换",
"notes": "粉丝属于主食类，注意控制份量。",
"source": "示例数据，待审核"
},
{
"id": 10,
"name": "山药排骨汤",
"region": "华中",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"goodProtein"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 346,
"protein": 14.8,
"fat": 24.3,
"carb": 17.1,
"sodium": 276,
"potassium": 452,
"phosphorus": 142,
"calcium": 27,
"iron": 1.7,
"water": 360
},
"ingredients": [
[
"山药",
"120g"
],
[
"排骨",
"80g"
],
[
"姜",
"3g"
],
[
"枸杞",
"3g"
]
],
"steps": [
"排骨焯水去浮沫。",
"山药去皮切段，与排骨、姜同炖。",
"小火炖40分钟，少盐调味。"
],
"time": "60分钟",
"difficulty": "中等",
"substitutes": "排骨可用瘦肉替换",
"notes": "汤易含钠和嘌呤，少量喝，肉和山药适量吃。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 11,
"name": "清蒸鲈鱼",
"region": "华南",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"highP",
"goodProtein",
"ironRich",
"lowPurine"
],
"tags": [
"慎用：高磷",
"优质蛋白",
"含铁",
"低嘌呤"
],
"nutrition": {
"energy": 133,
"protein": 22.7,
"fat": 4.1,
"carb": 1.2,
"sodium": 404,
"potassium": 281,
"phosphorus": 301,
"calcium": 74,
"iron": 1.9,
"water": 90
},
"ingredients": [
[
"鲈鱼",
"120g"
],
[
"姜",
"5g"
],
[
"葱",
"5g"
],
[
"蒸鱼豉油",
"4g"
]
],
"steps": [
"鲈鱼处理干净，铺姜片。",
"水开后大火蒸8分钟。",
"去姜丝撒葱花，淋少量豉油。"
],
"time": "18分钟",
"difficulty": "中等",
"substitutes": "鲈鱼可用鸡胸肉替换",
"notes": "不再加盐，豉油少量；磷中等，按医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 12,
"name": "凉拌苦瓜",
"region": "西南",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"lowP",
"lowNa",
"lowPurine"
],
"tags": [
"低磷",
"低钠",
"低嘌呤"
],
"nutrition": {
"energy": 62,
"protein": 1.8,
"fat": 2.2,
"carb": 8.9,
"sodium": 8,
"potassium": 399,
"phosphorus": 60,
"calcium": 22,
"iron": 1.2,
"water": 90
},
"ingredients": [
[
"苦瓜",
"150g"
],
[
"蒜",
"5g"
],
[
"醋",
"4g"
],
[
"香油",
"2g"
]
],
"steps": [
"苦瓜去瓤切片，焯水1分钟。",
"过凉水沥干，加蒜末。",
"用醋和香油拌匀即可。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "苦瓜可用黄瓜替换",
"notes": "焯水可帮助减少部分钾。",
"source": "示例数据，待审核"
},
{
"id": 13,
"name": "冬瓜虾仁",
"region": "华东",
"season": "夏",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"lowPurine"
],
"tags": [
"低钾",
"低磷",
"低钠",
"低嘌呤"
],
"nutrition": {
"energy": 114,
"protein": 7.5,
"fat": 6.9,
"carb": 5.5,
"sodium": 264,
"potassium": 242,
"phosphorus": 117,
"calcium": 80,
"iron": 1.4,
"water": 260
},
"ingredients": [
[
"冬瓜",
"200g"
],
[
"鲜虾仁",
"50g"
],
[
"姜",
"3g"
],
[
"食用油",
"6g"
]
],
"steps": [
"冬瓜切片，虾仁去虾线。",
"热油炒姜片和虾仁至变色。",
"下冬瓜翻炒，加水焖熟，少盐调味。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "虾仁可用瘦肉替换",
"notes": "虾仁磷中等，控制份量。",
"source": "示例数据，待审核"
},
{
"id": 14,
"name": "丝瓜炒蛋",
"region": "华南",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 186,
"protein": 9.0,
"fat": 11.8,
"carb": 11.0,
"sodium": 273,
"potassium": 304,
"phosphorus": 128,
"calcium": 54,
"iron": 1.8,
"water": 120
},
"ingredients": [
[
"丝瓜",
"180g"
],
[
"鸡蛋",
"1枚"
],
[
"蒜",
"3g"
],
[
"食用油",
"7g"
]
],
"steps": [
"丝瓜去皮切滚刀块。",
"鸡蛋打散，少油炒至刚凝固盛出。",
"下丝瓜炒软，回锅拌匀，少盐调味。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "丝瓜可用冬瓜替换",
"notes": "少盐；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 15,
"name": "玉米面粥",
"region": "东北",
"season": "春",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 164,
"protein": 4.4,
"fat": 0.8,
"carb": 34.8,
"sodium": 1,
"potassium": 153,
"phosphorus": 92,
"calcium": 9,
"iron": 0.7,
"water": 360
},
"ingredients": [
[
"玉米",
"50g"
],
[
"大米",
"30g"
]
],
"steps": [
"玉米和大米淘洗。",
"加水煮开后转小火。",
"熬25分钟至软稠。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "大米可用小米替换",
"notes": "适量食用，不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 16,
"name": "地三鲜（少油版）",
"region": "东北",
"season": "秋",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 247,
"protein": 6.0,
"fat": 8.7,
"carb": 36.2,
"sodium": 218,
"potassium": 790,
"phosphorus": 112,
"calcium": 54,
"iron": 2.3,
"water": 120
},
"ingredients": [
[
"土豆",
"150g"
],
[
"茄子",
"150g"
],
[
"青椒",
"40g"
],
[
"食用油",
"8g"
]
],
"steps": [
"土豆切块浸泡，茄子切块。",
"土豆焯水后沥干。",
"少油煸炒茄子土豆和青椒，少盐调味。"
],
"time": "25分钟",
"difficulty": "中等",
"substitutes": "土豆可用冬瓜替换",
"notes": "土豆含钾较高，高钾血症不宜；浸泡焯水可降低部分钾。",
"source": "示例数据，待审核"
},
{
"id": 17,
"name": "白菜木耳炒肉",
"region": "东北",
"season": "冬",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 189,
"protein": 15.6,
"fat": 10.0,
"carb": 9.1,
"sodium": 416,
"potassium": 456,
"phosphorus": 177,
"calcium": 114,
"iron": 4.6,
"water": 140
},
"ingredients": [
[
"大白菜",
"200g"
],
[
"木耳",
"30g"
],
[
"瘦肉",
"60g"
],
[
"食用油",
"6g"
]
],
"steps": [
"白菜切片，木耳泡发，瘦肉切丝。",
"热油炒肉丝至变色。",
"下白菜和木耳炒熟，少盐调味。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "木耳可用香菇替换",
"notes": "瘦肉先焯水可减少部分磷；少盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 18,
"name": "东北乱炖（少盐）",
"region": "东北",
"season": "冬",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 148,
"protein": 6.0,
"fat": 0.6,
"carb": 29.7,
"sodium": 215,
"potassium": 697,
"phosphorus": 119,
"calcium": 58,
"iron": 2.2,
"water": 160
},
"ingredients": [
[
"土豆",
"100g"
],
[
"茄子",
"100g"
],
[
"豆角",
"80g"
],
[
"青椒",
"30g"
]
],
"steps": [
"豆角焯水，土豆茄子切块。",
"少油煸香，加少量水炖煮。",
"焖熟后少盐调味。"
],
"time": "30分钟",
"difficulty": "中等",
"substitutes": "豆角可用荷兰豆替换",
"notes": "土豆含钾较高，血钾偏高时不建议食用。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 19,
"name": "油菜炒鸡蛋",
"region": "东北",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"ironRich"
],
"tags": [
"低磷",
"含铁"
],
"nutrition": {
"energy": 164,
"protein": 8.6,
"fat": 11.9,
"carb": 5.7,
"sodium": 377,
"potassium": 349,
"phosphorus": 103,
"calcium": 190,
"iron": 2.8,
"water": 110
},
"ingredients": [
[
"油菜",
"150g"
],
[
"鸡蛋",
"1枚"
],
[
"蒜",
"3g"
],
[
"食用油",
"7g"
]
],
"steps": [
"油菜洗净切段。",
"鸡蛋打散炒至凝固盛出。",
"下油菜炒软后回锅拌匀，少盐。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "油菜可用上海青替换",
"notes": "蛋白质总量按分期控制；少盐。",
"source": "示例数据，待审核"
},
{
"id": 20,
"name": "萝卜丝炖粉条",
"region": "东北",
"season": "冬",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 174,
"protein": 1.8,
"fat": 0.2,
"carb": 41.3,
"sodium": 297,
"potassium": 274,
"phosphorus": 47,
"calcium": 62,
"iron": 1.3,
"water": 260
},
"ingredients": [
[
"白萝卜",
"150g"
],
[
"粉丝",
"40g"
],
[
"小葱",
"5g"
]
],
"steps": [
"白萝卜切丝，粉丝泡软。",
"萝卜丝加水煮至透明。",
"下粉丝再煮3分钟，少盐调味。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "粉丝可用大米替换",
"notes": "粉丝属主食类，控制份量；汤水计入水量。",
"source": "示例数据，待审核"
},
{
"id": 21,
"name": "冬瓜瘦肉汤",
"region": "东北",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 115,
"protein": 13.0,
"fat": 4.1,
"carb": 6.4,
"sodium": 239,
"potassium": 306,
"phosphorus": 136,
"calcium": 42,
"iron": 2.2,
"water": 300
},
"ingredients": [
[
"冬瓜",
"200g"
],
[
"瘦肉",
"60g"
],
[
"姜",
"3g"
]
],
"steps": [
"冬瓜切块，瘦肉切片焯水。",
"水开下姜片和冬瓜煮5分钟。",
"下瘦肉再煮5分钟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "瘦肉可用鸡胸肉替换",
"notes": "汤不喝底；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 22,
"name": "香煎鳕鱼",
"region": "东北",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"highK",
"lowNa",
"goodProtein",
"lowPurine"
],
"tags": [
"慎用：高钾",
"低钠",
"优质蛋白",
"低嘌呤"
],
"nutrition": {
"energy": 153,
"protein": 24.5,
"fat": 5.6,
"carb": 1.1,
"sodium": 157,
"potassium": 400,
"phosphorus": 280,
"calcium": 25,
"iron": 0.8,
"water": 70
},
"ingredients": [
[
"鳕鱼",
"120g"
],
[
"姜",
"5g"
],
[
"食用油",
"5g"
]
],
"steps": [
"鳕鱼用姜片略腌。",
"平底锅少油煎至两面金黄。",
"不再加盐，可滴少量柠檬汁。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "鳕鱼可用鲈鱼替换",
"notes": "磷中等，按医嘱限量；不加盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 23,
"name": "凉拌莴笋",
"region": "东北",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 40,
"protein": 2.3,
"fat": 0.2,
"carb": 7.2,
"sodium": 85,
"potassium": 439,
"phosphorus": 84,
"calcium": 47,
"iron": 1.9,
"water": 110
},
"ingredients": [
[
"莴笋",
"200g"
],
[
"蒜",
"5g"
],
[
"醋",
"5g"
]
],
"steps": [
"莴笋去皮切丝。",
"沸水焯1分钟后过凉。",
"加蒜末和醋拌匀。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "莴笋可用黄瓜替换",
"notes": "焯水可减少部分钾；不加盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 24,
"name": "香菇油菜",
"region": "东北",
"season": "秋",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 96,
"protein": 3.0,
"fat": 6.6,
"carb": 6.1,
"sodium": 311,
"potassium": 272,
"phosphorus": 61,
"calcium": 163,
"iron": 1.9,
"water": 130
},
"ingredients": [
[
"香菇",
"50g"
],
[
"油菜",
"150g"
],
[
"食用油",
"6g"
]
],
"steps": [
"香菇切片，油菜洗净。",
"热油炒香菇出香。",
"下油菜炒熟，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "香菇可用平菇替换",
"notes": "香菇泡发后可减少部分钾；少盐。",
"source": "示例数据，待审核"
},
{
"id": 25,
"name": "猪肉炖粉条",
"region": "东北",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 304,
"protein": 18.1,
"fat": 5.2,
"carb": 46.3,
"sodium": 340,
"potassium": 383,
"phosphorus": 187,
"calcium": 60,
"iron": 3.6,
"water": 200
},
"ingredients": [
[
"瘦肉",
"80g"
],
[
"粉丝",
"50g"
],
[
"大白菜",
"100g"
]
],
"steps": [
"瘦肉切片焯水，粉丝泡软。",
"瘦肉加水炖10分钟。",
"下白菜和粉丝炖至软，少盐。"
],
"time": "25分钟",
"difficulty": "中等",
"substitutes": "瘦肉可用鸡胸肉替换",
"notes": "汤不喝底；注意钾磷摄入，遵医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 26,
"name": "燕麦南瓜粥",
"region": "东北",
"season": "秋",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 184,
"protein": 4.6,
"fat": 2.8,
"carb": 35.2,
"sodium": 1,
"potassium": 258,
"phosphorus": 156,
"calcium": 41,
"iron": 1.9,
"water": 340
},
"ingredients": [
[
"燕麦",
"40g"
],
[
"南瓜",
"80g"
],
[
"清水",
"400ml"
]
],
"steps": [
"南瓜去皮切小块。",
"燕麦与南瓜加水同煮。",
"小火熬20分钟至软稠。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "燕麦可用小米替换",
"notes": "不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 27,
"name": "凉拌黄瓜粉皮",
"region": "西北",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 296,
"protein": 1.8,
"fat": 0.4,
"carb": 71.5,
"sodium": 17,
"potassium": 126,
"phosphorus": 43,
"calcium": 33,
"iron": 1.5,
"water": 120
},
"ingredients": [
[
"黄瓜",
"100g"
],
[
"粉丝",
"80g"
],
[
"蒜",
"5g"
],
[
"醋",
"5g"
]
],
"steps": [
"粉丝泡软过凉，黄瓜切丝。",
"加蒜末和醋拌匀。",
"不加盐或少盐。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "粉丝可用大米替换",
"notes": "粉丝属主食类，控制份量。",
"source": "示例数据，待审核"
},
{
"id": 28,
"name": "孜然牛肉（少油）",
"region": "西北",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 176,
"protein": 17.1,
"fat": 8.5,
"carb": 7.7,
"sodium": 270,
"potassium": 262,
"phosphorus": 169,
"calcium": 23,
"iron": 2.8,
"water": 90
},
"ingredients": [
[
"牛肉",
"80g"
],
[
"洋葱",
"50g"
],
[
"青椒",
"30g"
],
[
"食用油",
"5g"
]
],
"steps": [
"牛肉切丝，洋葱青椒切丝。",
"热油快炒牛肉至变色。",
"下洋葱青椒炒匀，少盐和孜然调味。"
],
"time": "12分钟",
"difficulty": "中等",
"substitutes": "牛肉可用鸡胸肉替换",
"notes": "牛肉磷含量中等，按医嘱限量；少盐。",
"source": "示例数据，待审核"
},
{
"id": 29,
"name": "手撕圆白菜",
"region": "西北",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 104,
"protein": 3.2,
"fat": 5.4,
"carb": 10.6,
"sodium": 321,
"potassium": 407,
"phosphorus": 66,
"calcium": 64,
"iron": 1.1,
"water": 120
},
"ingredients": [
[
"圆白菜",
"200g"
],
[
"蒜",
"5g"
],
[
"食用油",
"5g"
]
],
"steps": [
"圆白菜手撕成块。",
"热油爆香蒜片。",
"大火快炒至断生，少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "圆白菜可用大白菜替换",
"notes": "少盐，不勾芡。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 30,
"name": "胡萝卜炖牛肉",
"region": "西北",
"season": "冬",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 155,
"protein": 17.6,
"fat": 3.6,
"carb": 13.1,
"sodium": 339,
"potassium": 380,
"phosphorus": 185,
"calcium": 46,
"iron": 3.4,
"water": 220
},
"ingredients": [
[
"牛肉",
"80g"
],
[
"胡萝卜",
"100g"
],
[
"洋葱",
"30g"
]
],
"steps": [
"牛肉焯水，胡萝卜切块。",
"牛肉加水炖30分钟。",
"下胡萝卜洋葱炖软，少盐。"
],
"time": "45分钟",
"difficulty": "中等",
"substitutes": "牛肉可用瘦肉替换",
"notes": "汤不喝底；牛肉磷中等，按医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 31,
"name": "烤土豆（适量）",
"region": "西北",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 127,
"protein": 4.0,
"fat": 0.3,
"carb": 27.0,
"sodium": 9,
"potassium": 528,
"phosphorus": 70,
"calcium": 16,
"iron": 1.3,
"water": 110
},
"ingredients": [
[
"土豆",
"150g"
],
[
"小葱",
"5g"
]
],
"steps": [
"土豆带皮烤熟。",
"去皮切块，撒小葱。",
"不加盐或少盐。"
],
"time": "35分钟",
"difficulty": "简单",
"substitutes": "土豆可用南瓜替换",
"notes": "土豆含钾较高，高钾血症不宜；可切块浸泡焯水降低部分钾。",
"source": "示例数据，待审核"
},
{
"id": 32,
"name": "芹菜烧豆腐",
"region": "西北",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 120,
"protein": 11.1,
"fat": 3.9,
"carb": 10.0,
"sodium": 446,
"potassium": 424,
"phosphorus": 179,
"calcium": 258,
"iron": 4.3,
"water": 150
},
"ingredients": [
[
"芹菜",
"150g"
],
[
"豆腐",
"100g"
],
[
"蒜",
"3g"
]
],
"steps": [
"芹菜切段，豆腐切块。",
"豆腐焯水去部分磷。",
"少油下芹菜和豆腐烧熟，少盐。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "芹菜可用莴笋替换",
"notes": "豆腐磷中等，按医嘱限量。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 33,
"name": "玉米蛋花汤",
"region": "西北",
"season": "秋",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 143,
"protein": 8.9,
"fat": 5.1,
"carb": 15.3,
"sodium": 267,
"potassium": 224,
"phosphorus": 136,
"calcium": 36,
"iron": 1.6,
"water": 320
},
"ingredients": [
[
"玉米",
"60g"
],
[
"鸡蛋",
"1枚"
],
[
"小葱",
"3g"
]
],
"steps": [
"玉米加水煮开。",
"淋入蛋液搅成蛋花。",
"少盐调味，撒葱花。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "玉米可用南瓜替换",
"notes": "汤不喝底；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 34,
"name": "白萝卜鸭肉汤",
"region": "西北",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 99,
"protein": 13.4,
"fat": 1.4,
"carb": 8.2,
"sodium": 342,
"potassium": 369,
"phosphorus": 109,
"calcium": 64,
"iron": 2.6,
"water": 340
},
"ingredients": [
[
"鸭肉",
"80g"
],
[
"白萝卜",
"150g"
],
[
"姜",
"3g"
]
],
"steps": [
"鸭肉焯水去浮沫。",
"加水和姜片炖30分钟。",
"下白萝卜炖软，少盐。"
],
"time": "45分钟",
"difficulty": "中等",
"substitutes": "鸭肉可用瘦肉替换",
"notes": "汤不喝底；注意钾摄入。",
"source": "示例数据，待审核"
},
{
"id": 35,
"name": "凉拌海带丝",
"region": "西北",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 19,
"protein": 1.0,
"fat": 0.1,
"carb": 3.5,
"sodium": 69,
"potassium": 255,
"phosphorus": 30,
"calcium": 81,
"iron": 1.7,
"water": 130
},
"ingredients": [
[
"海带",
"80g"
],
[
"蒜",
"5g"
],
[
"醋",
"5g"
]
],
"steps": [
"海带泡发切丝。",
"焯水2分钟后过凉。",
"加蒜末和醋拌匀。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "海带可用木耳替换",
"notes": "海带含钾较高，血钾偏高时不宜；焯水可减少部分钾。",
"source": "示例数据，待审核"
},
{
"id": 36,
"name": "洋葱炒牛肉",
"region": "西北",
"season": "秋",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 181,
"protein": 16.9,
"fat": 9.5,
"carb": 7.0,
"sodium": 269,
"potassium": 234,
"phosphorus": 167,
"calcium": 21,
"iron": 2.6,
"water": 90
},
"ingredients": [
[
"牛肉",
"80g"
],
[
"洋葱",
"60g"
],
[
"食用油",
"6g"
]
],
"steps": [
"牛肉切片，洋葱切丝。",
"热油快炒牛肉至变色。",
"下洋葱炒软，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "牛肉可用瘦肉替换",
"notes": "牛肉磷中等，按医嘱限量；少盐。",
"source": "示例数据，待审核"
},
{
"id": 37,
"name": "紫菜蛋花汤",
"region": "西北",
"season": "冬",
"meal": "早餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 81,
"protein": 7.3,
"fat": 4.4,
"carb": 2.9,
"sodium": 287,
"potassium": 135,
"phosphorus": 76,
"calcium": 38,
"iron": 2.7,
"water": 320
},
"ingredients": [
[
"紫菜",
"3g"
],
[
"鸡蛋",
"1枚"
],
[
"小葱",
"3g"
]
],
"steps": [
"紫菜撕小块泡开。",
"水开淋入蛋液成蛋花。",
"下紫菜，少盐，撒葱花。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "紫菜可用冬瓜替换",
"notes": "紫菜含钾较高，血钾偏高时不宜；汤不喝底。",
"source": "示例数据，待审核"
},
{
"id": 38,
"name": "牛肉丸子冬瓜汤",
"region": "西北",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 105,
"protein": 13.0,
"fat": 2.9,
"carb": 6.7,
"sodium": 254,
"potassium": 232,
"phosphorus": 131,
"calcium": 44,
"iron": 2.1,
"water": 300
},
"ingredients": [
[
"牛肉",
"60g"
],
[
"冬瓜",
"200g"
],
[
"姜",
"3g"
]
],
"steps": [
"牛肉剁碎挤成小丸子。",
"冬瓜切块加水煮开。",
"下丸子煮8分钟，少盐。"
],
"time": "20分钟",
"difficulty": "中等",
"substitutes": "牛肉可用瘦肉替换",
"notes": "汤不喝底；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 39,
"name": "小米粥",
"region": "华北",
"season": "春",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 182,
"protein": 4.5,
"fat": 1.6,
"carb": 37.5,
"sodium": 2,
"potassium": 142,
"phosphorus": 114,
"calcium": 20,
"iron": 2.5,
"water": 380
},
"ingredients": [
[
"小米",
"50g"
],
[
"清水",
"500ml"
]
],
"steps": [
"小米淘洗后加水。",
"煮开转小火。",
"熬25分钟至软稠。"
],
"time": "30分钟",
"difficulty": "简单",
"substitutes": "小米可用大米替换",
"notes": "不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 40,
"name": "醋溜白菜",
"region": "华北",
"season": "秋",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP"
],
"tags": [
"低钾",
"低磷"
],
"nutrition": {
"energy": 90,
"protein": 3.2,
"fat": 5.2,
"carb": 7.5,
"sodium": 383,
"potassium": 269,
"phosphorus": 60,
"calcium": 101,
"iron": 1.3,
"water": 140
},
"ingredients": [
[
"大白菜",
"200g"
],
[
"蒜",
"3g"
],
[
"醋",
"5g"
],
[
"食用油",
"5g"
]
],
"steps": [
"白菜切片。",
"热油爆香蒜片。",
"下白菜大火快炒，加醋少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "大白菜可用圆白菜替换",
"notes": "少盐；不勾芡。",
"source": "示例数据，待审核"
},
{
"id": 41,
"name": "京酱鸡胸肉丝",
"region": "华北",
"season": "冬",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein"
],
"tags": [
"低磷",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 134,
"protein": 20.5,
"fat": 4.2,
"carb": 3.4,
"sodium": 40,
"potassium": 358,
"phosphorus": 158,
"calcium": 29,
"iron": 1.0,
"water": 90
},
"ingredients": [
[
"鸡胸肉",
"80g"
],
[
"黄瓜",
"80g"
],
[
"小葱",
"10g"
]
],
"steps": [
"鸡胸肉切丝焯水。",
"黄瓜切丝铺盘。",
"少油炒鸡丝，用少量甜面酱炒匀，铺在黄瓜上。"
],
"time": "15分钟",
"difficulty": "中等",
"substitutes": "鸡胸肉可用瘦肉替换",
"notes": "甜面酱含钠，少量使用。",
"source": "示例数据，待审核"
},
{
"id": 42,
"name": "韭菜炒鸡蛋",
"region": "华北",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 172,
"protein": 9.4,
"fat": 11.9,
"carb": 6.9,
"sodium": 275,
"potassium": 373,
"phosphorus": 119,
"calcium": 78,
"iron": 2.9,
"water": 90
},
"ingredients": [
[
"韭菜",
"120g"
],
[
"鸡蛋",
"1枚"
],
[
"食用油",
"7g"
]
],
"steps": [
"韭菜切段，鸡蛋打散。",
"热油炒蛋至凝固盛出。",
"下韭菜快炒，回锅拌匀，少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "韭菜可用小葱替换",
"notes": "韭菜含钾中等，血钾偏高时控制份量。",
"source": "示例数据，待审核"
},
{
"id": 43,
"name": "西葫芦鸡蛋饼",
"region": "华北",
"season": "夏",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 213,
"protein": 12.4,
"fat": 5.2,
"carb": 29.2,
"sodium": 74,
"potassium": 272,
"phosphorus": 141,
"calcium": 60,
"iron": 2.5,
"water": 100
},
"ingredients": [
[
"西葫芦",
"150g"
],
[
"鸡蛋",
"1枚"
],
[
"面粉",
"30g"
]
],
"steps": [
"西葫芦擦丝，加鸡蛋和面粉拌匀。",
"平底锅少油摊成小饼。",
"两面煎至金黄。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "面粉可用玉米粉替换",
"notes": "少盐；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 44,
"name": "白萝卜排骨汤",
"region": "华北",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 303,
"protein": 13.5,
"fat": 24.2,
"carb": 7.8,
"sodium": 339,
"potassium": 443,
"phosphorus": 137,
"calcium": 60,
"iron": 1.9,
"water": 360
},
"ingredients": [
[
"排骨",
"80g"
],
[
"白萝卜",
"150g"
],
[
"姜",
"3g"
]
],
"steps": [
"排骨焯水去浮沫。",
"加水炖30分钟。",
"下白萝卜炖软，少盐。"
],
"time": "45分钟",
"difficulty": "中等",
"substitutes": "排骨可用瘦肉替换",
"notes": "汤不喝底，减少钠和嘌呤摄入。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 45,
"name": "凉拌秋葵",
"region": "华北",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 64,
"protein": 3.4,
"fat": 0.2,
"carb": 12.3,
"sodium": 241,
"potassium": 325,
"phosphorus": 102,
"calcium": 70,
"iron": 1.2,
"water": 110
},
"ingredients": [
[
"秋葵",
"150g"
],
[
"蒜",
"5g"
],
[
"生抽",
"3g"
]
],
"steps": [
"秋葵焯水2分钟过凉。",
"切去蒂部，摆盘。",
"蒜末和少量生抽调汁淋上。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "秋葵可用芦笋替换",
"notes": "生抽少量，避免过咸。",
"source": "示例数据，待审核"
},
{
"id": 46,
"name": "莲藕炖鸡腿",
"region": "华北",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"highP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"慎用：高磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 237,
"protein": 22.5,
"fat": 7.5,
"carb": 20.0,
"sodium": 328,
"potassium": 521,
"phosphorus": 341,
"calcium": 54,
"iron": 3.1,
"water": 240
},
"ingredients": [
[
"鸡腿",
"100g"
],
[
"莲藕",
"120g"
],
[
"姜",
"3g"
]
],
"steps": [
"鸡腿焯水，莲藕切块。",
"加水炖25分钟。",
"下莲藕炖软，少盐。"
],
"time": "40分钟",
"difficulty": "中等",
"substitutes": "鸡腿可用鸡胸肉替换",
"notes": "莲藕含钾较高，血钾偏高时不宜；汤不喝底。钾含量偏高，血钾偏高者建议限量或遵医嘱。磷含量偏高，血磷偏高者建议限量。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 47,
"name": "燕麦粥",
"region": "华北",
"season": "春",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 185,
"protein": 4.5,
"fat": 3.0,
"carb": 34.8,
"sodium": 1,
"potassium": 160,
"phosphorus": 154,
"calcium": 32,
"iron": 1.8,
"water": 360
},
"ingredients": [
[
"燕麦",
"45g"
],
[
"清水",
"450ml"
]
],
"steps": [
"燕麦加水煮开。",
"转小火熬15分钟。",
"至软稠即可。"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "燕麦可用小米替换",
"notes": "不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 48,
"name": "蒜蓉生菜",
"region": "华北",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 85,
"protein": 2.9,
"fat": 5.6,
"carb": 5.7,
"sodium": 265,
"potassium": 442,
"phosphorus": 61,
"calcium": 69,
"iron": 1.9,
"water": 130
},
"ingredients": [
[
"生菜",
"200g"
],
[
"蒜",
"6g"
],
[
"食用油",
"5g"
]
],
"steps": [
"生菜洗净沥水。",
"热油爆香蒜末。",
"下生菜快炒，少盐。"
],
"time": "5分钟",
"difficulty": "简单",
"substitutes": "生菜可用上海青替换",
"notes": "大火快炒保持口感；少盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 49,
"name": "青椒炒鸡胸肉",
"region": "华北",
"season": "冬",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein"
],
"tags": [
"低磷",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 184,
"protein": 20.5,
"fat": 9.2,
"carb": 4.8,
"sodium": 238,
"potassium": 380,
"phosphorus": 152,
"calcium": 14,
"iron": 1.1,
"water": 90
},
"ingredients": [
[
"鸡胸肉",
"80g"
],
[
"青椒",
"80g"
],
[
"食用油",
"5g"
]
],
"steps": [
"鸡胸肉切片焯水，青椒切块。",
"热油炒青椒。",
"下鸡片炒匀，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "鸡胸肉可用瘦肉替换",
"notes": "鸡胸肉焯水可减少部分磷。",
"source": "示例数据，待审核"
},
{
"id": 50,
"name": "胡萝卜小米粥",
"region": "华北",
"season": "秋",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 184,
"protein": 4.5,
"fat": 1.5,
"carb": 38.2,
"sodium": 37,
"potassium": 223,
"phosphorus": 118,
"calcium": 34,
"iron": 2.8,
"water": 370
},
"ingredients": [
[
"小米",
"45g"
],
[
"胡萝卜",
"50g"
],
[
"清水",
"480ml"
]
],
"steps": [
"胡萝卜切小丁。",
"小米和胡萝卜加水煮开。",
"小火熬20分钟至软稠。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "胡萝卜可用南瓜替换",
"notes": "不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 51,
"name": "清炒芦笋",
"region": "华东",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 84,
"protein": 4.0,
"fat": 5.2,
"carb": 5.3,
"sodium": 210,
"potassium": 329,
"phosphorus": 80,
"calcium": 15,
"iron": 2.1,
"water": 120
},
"ingredients": [
[
"芦笋",
"150g"
],
[
"蒜",
"3g"
],
[
"食用油",
"5g"
]
],
"steps": [
"芦笋去老根切段。",
"焯水1分钟捞出。",
"热油快炒，少盐调味。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "芦笋可用秋葵替换",
"notes": "少盐；不勾芡。",
"source": "示例数据，待审核"
},
{
"id": 52,
"name": "虾仁蒸蛋",
"region": "华东",
"season": "春",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 102,
"protein": 13.2,
"fat": 4.9,
"carb": 1.4,
"sodium": 325,
"potassium": 196,
"phosphorus": 160,
"calcium": 70,
"iron": 2.0,
"water": 110
},
"ingredients": [
[
"虾仁",
"50g"
],
[
"鸡蛋",
"1枚"
],
[
"温水",
"100ml"
]
],
"steps": [
"鸡蛋打散加温水搅匀。",
"上锅蒸8分钟至半凝固。",
"铺虾仁再蒸3分钟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "虾仁可用瘦肉末替换",
"notes": "虾仁磷中等，按医嘱限量；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 53,
"name": "凉拌佛手瓜",
"region": "华东",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 54,
"protein": 2.7,
"fat": 0.2,
"carb": 10.3,
"sodium": 25,
"potassium": 164,
"phosphorus": 41,
"calcium": 35,
"iron": 0.3,
"water": 120
},
"ingredients": [
[
"佛手瓜",
"200g"
],
[
"蒜",
"4g"
],
[
"醋",
"5g"
]
],
"steps": [
"佛手瓜去皮切丝。",
"焯水1分钟过凉。",
"加蒜末和醋拌匀。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "佛手瓜可用黄瓜替换",
"notes": "不加盐或少盐。",
"source": "示例数据，待审核"
},
{
"id": 54,
"name": "冬瓜香菇汤",
"region": "华东",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 42,
"protein": 1.7,
"fat": 0.5,
"carb": 7.6,
"sodium": 205,
"potassium": 131,
"phosphorus": 44,
"calcium": 40,
"iron": 0.6,
"water": 340
},
"ingredients": [
[
"冬瓜",
"200g"
],
[
"香菇",
"40g"
],
[
"姜",
"3g"
]
],
"steps": [
"冬瓜切块，香菇切片。",
"水开下姜片和香菇煮5分钟。",
"下冬瓜煮熟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "香菇可用平菇替换",
"notes": "汤不喝底；水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 55,
"name": "银耳百合羹",
"region": "华东",
"season": "秋",
"meal": "加餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 58,
"protein": 1.5,
"fat": 0.2,
"carb": 12.6,
"sodium": 9,
"potassium": 210,
"phosphorus": 46,
"calcium": 5,
"iron": 0.6,
"water": 260
},
"ingredients": [
[
"银耳",
"10g"
],
[
"百合",
"15g"
],
[
"清水",
"400ml"
]
],
"steps": [
"银耳泡发撕小朵。",
"银耳加水煮30分钟。",
"下百合再煮10分钟，不加糖。"
],
"time": "45分钟",
"difficulty": "简单",
"substitutes": "百合可用山药替换",
"notes": "不加糖；羹计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 56,
"name": "清蒸带鱼",
"region": "华东",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"lowNa",
"goodProtein",
"lowPurine"
],
"tags": [
"低钠",
"优质蛋白",
"低嘌呤"
],
"nutrition": {
"energy": 157,
"protein": 21.4,
"fat": 5.9,
"carb": 4.6,
"sodium": 181,
"potassium": 358,
"phosphorus": 232,
"calcium": 35,
"iron": 1.6,
"water": 80
},
"ingredients": [
[
"带鱼",
"120g"
],
[
"姜",
"5g"
],
[
"小葱",
"5g"
]
],
"steps": [
"带鱼处理干净，铺姜片。",
"水开大火蒸10分钟。",
"撒葱花，淋少量生抽。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "带鱼可用鳕鱼替换",
"notes": "磷中等，按医嘱限量；不加盐，生抽少量。",
"source": "示例数据，待审核"
},
{
"id": 57,
"name": "上海青炒木耳",
"region": "华东",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 84,
"protein": 2.7,
"fat": 5.6,
"carb": 5.6,
"sodium": 335,
"potassium": 326,
"phosphorus": 48,
"calcium": 203,
"iron": 3.5,
"water": 130
},
"ingredients": [
[
"上海青",
"180g"
],
[
"木耳",
"25g"
],
[
"食用油",
"5g"
]
],
"steps": [
"上海青洗净，木耳泡发。",
"热油炒木耳。",
"下上海青炒熟，少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "上海青可用油菜替换",
"notes": "木耳泡发后焯水可减少部分钾；少盐。",
"source": "示例数据，待审核"
},
{
"id": 58,
"name": "番茄冬瓜汤",
"region": "华东",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 51,
"protein": 1.7,
"fat": 0.6,
"carb": 9.5,
"sodium": 209,
"potassium": 302,
"phosphorus": 46,
"calcium": 49,
"iron": 0.8,
"water": 340
},
"ingredients": [
[
"西红柿",
"100g"
],
[
"冬瓜",
"200g"
],
[
"姜",
"3g"
]
],
"steps": [
"西红柿切块，冬瓜切片。",
"水开下西红柿煮3分钟。",
"下冬瓜煮熟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "西红柿可用丝瓜替换",
"notes": "汤不喝底；水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 59,
"name": "芋头排骨汤",
"region": "华东",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 349,
"protein": 14.3,
"fat": 24.2,
"carb": 18.4,
"sodium": 279,
"potassium": 561,
"phosphorus": 153,
"calcium": 42,
"iron": 2.2,
"water": 340
},
"ingredients": [
[
"芋头",
"100g"
],
[
"排骨",
"80g"
],
[
"姜",
"3g"
]
],
"steps": [
"排骨焯水，芋头切块。",
"排骨加水炖30分钟。",
"下芋头炖软，少盐。"
],
"time": "45分钟",
"difficulty": "中等",
"substitutes": "芋头可用白萝卜替换",
"notes": "芋头含钾较高，血钾偏高时不宜；汤不喝底。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 60,
"name": "凉拌木耳",
"region": "华东",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 19,
"protein": 0.9,
"fat": 0.1,
"carb": 3.7,
"sodium": 9,
"potassium": 30,
"phosphorus": 15,
"calcium": 15,
"iron": 2.3,
"water": 120
},
"ingredients": [
[
"木耳",
"40g"
],
[
"蒜",
"4g"
],
[
"醋",
"5g"
]
],
"steps": [
"木耳泡发撕小朵。",
"焯水2分钟过凉。",
"加蒜末和醋拌匀。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "木耳可用香菇替换",
"notes": "不加盐或少盐。",
"source": "示例数据，待审核"
},
{
"id": 61,
"name": "花菜炒鸡丁",
"region": "华东",
"season": "秋",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 196,
"protein": 22.2,
"fat": 9.2,
"carb": 6.0,
"sodium": 274,
"potassium": 506,
"phosphorus": 192,
"calcium": 30,
"iron": 1.8,
"water": 110
},
"ingredients": [
[
"鸡胸肉",
"80g"
],
[
"花菜",
"120g"
],
[
"食用油",
"5g"
]
],
"steps": [
"鸡胸肉切丁焯水，花菜掰小朵。",
"花菜焯水1分钟。",
"热油炒匀，少盐调味。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "花菜可用西兰花替换",
"notes": "焯水可减少部分钾和磷。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 62,
"name": "山药小米粥",
"region": "华东",
"season": "冬",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 199,
"protein": 5.2,
"fat": 1.5,
"carb": 41.2,
"sodium": 13,
"potassium": 256,
"phosphorus": 123,
"calcium": 28,
"iron": 2.5,
"water": 370
},
"ingredients": [
[
"小米",
"45g"
],
[
"山药",
"60g"
],
[
"清水",
"480ml"
]
],
"steps": [
"山药去皮切小块。",
"小米和山药加水煮开。",
"小火熬20分钟至软稠。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "山药可用南瓜替换",
"notes": "不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 63,
"name": "凉拌红萝卜丝",
"region": "华中",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 55,
"protein": 1.8,
"fat": 0.2,
"carb": 11.5,
"sodium": 102,
"potassium": 357,
"phosphorus": 51,
"calcium": 69,
"iron": 1.2,
"water": 110
},
"ingredients": [
[
"红萝卜",
"150g"
],
[
"蒜",
"4g"
],
[
"醋",
"5g"
]
],
"steps": [
"红萝卜切细丝。",
"加蒜末和醋拌匀。",
"不加盐或少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "红萝卜可用白萝卜替换",
"notes": "现拌现吃，口感更脆。",
"source": "示例数据，待审核"
},
{
"id": 64,
"name": "粉蒸排骨（少盐）",
"region": "华中",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 406,
"protein": 15.3,
"fat": 24.3,
"carb": 31.5,
"sodium": 246,
"potassium": 226,
"phosphorus": 143,
"calcium": 14,
"iron": 1.5,
"water": 120
},
"ingredients": [
[
"排骨",
"80g"
],
[
"大米",
"40g"
],
[
"小葱",
"5g"
]
],
"steps": [
"大米打成粗粉。",
"排骨裹米粉，少盐拌匀。",
"上锅蒸30分钟，撒葱花。"
],
"time": "40分钟",
"difficulty": "中等",
"substitutes": "排骨可用鸡胸肉替换",
"notes": "排骨磷中等，按医嘱限量；调味料少量。",
"source": "示例数据，待审核"
},
{
"id": 65,
"name": "清炒豆角",
"region": "华中",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 108,
"protein": 3.9,
"fat": 5.3,
"carb": 11.2,
"sodium": 206,
"potassium": 323,
"phosphorus": 87,
"calcium": 41,
"iron": 1.2,
"water": 120
},
"ingredients": [
[
"豆角",
"150g"
],
[
"蒜",
"4g"
],
[
"食用油",
"5g"
]
],
"steps": [
"豆角去筋切段。",
"沸水焯3分钟捞出。",
"热油快炒，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "豆角可用荷兰豆替换",
"notes": "豆角必须充分焯熟。",
"source": "示例数据，待审核"
},
{
"id": 66,
"name": "冬瓜平菇汤",
"region": "华中",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 46,
"protein": 2.0,
"fat": 0.6,
"carb": 8.3,
"sodium": 206,
"potassium": 278,
"phosphorus": 74,
"calcium": 42,
"iron": 1.0,
"water": 340
},
"ingredients": [
[
"冬瓜",
"200g"
],
[
"平菇",
"60g"
],
[
"姜",
"3g"
]
],
"steps": [
"冬瓜切片，平菇撕小朵。",
"水开下姜片和平菇煮5分钟。",
"下冬瓜煮熟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "平菇可用香菇替换",
"notes": "汤不喝底；水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 67,
"name": "莲藕拌莴笋",
"region": "华中",
"season": "秋",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 86,
"protein": 3.0,
"fat": 0.3,
"carb": 17.8,
"sodium": 89,
"potassium": 461,
"phosphorus": 98,
"calcium": 60,
"iron": 2.3,
"water": 120
},
"ingredients": [
[
"莲藕",
"80g"
],
[
"莴笋",
"120g"
],
[
"蒜",
"4g"
],
[
"醋",
"5g"
]
],
"steps": [
"莲藕和莴笋切片。",
"分别焯水后过凉。",
"加蒜末和醋拌匀。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "莲藕可用山药替换",
"notes": "莲藕焯水可减少部分钾。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 68,
"name": "鲈鱼豆腐汤",
"region": "华中",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"highP",
"lowNa",
"goodProtein",
"ironRich",
"lowPurine"
],
"tags": [
"慎用：高磷",
"低钠",
"优质蛋白",
"含铁",
"低嘌呤"
],
"nutrition": {
"energy": 170,
"protein": 26.0,
"fat": 6.3,
"carb": 2.2,
"sodium": 350,
"potassium": 299,
"phosphorus": 332,
"calcium": 166,
"iron": 3.2,
"water": 340
},
"ingredients": [
[
"鲈鱼",
"100g"
],
[
"豆腐",
"80g"
],
[
"姜",
"3g"
]
],
"steps": [
"鲈鱼煎至两面微黄。",
"加水煮开，下豆腐。",
"小火煮10分钟，少盐。"
],
"time": "20分钟",
"difficulty": "中等",
"substitutes": "鲈鱼可用鸡胸肉替换",
"notes": "汤不喝底；豆腐磷中等，按医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 69,
"name": "韭菜盒子（少油）",
"region": "华中",
"season": "春",
"meal": "早餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 288,
"protein": 16.8,
"fat": 5.6,
"carb": 42.8,
"sodium": 75,
"potassium": 419,
"phosphorus": 194,
"calcium": 86,
"iron": 4.3,
"water": 90
},
"ingredients": [
[
"韭菜",
"100g"
],
[
"鸡蛋",
"1枚"
],
[
"面粉",
"50g"
]
],
"steps": [
"韭菜切末，鸡蛋炒碎拌馅。",
"面粉加水和成团。",
"包入馅料，少油煎熟。"
],
"time": "30分钟",
"difficulty": "中等",
"substitutes": "韭菜可用小葱替换",
"notes": "韭菜含钾中等，血钾偏高时控制份量。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 70,
"name": "白萝卜炖牛腩",
"region": "华中",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 140,
"protein": 17.6,
"fat": 3.5,
"carb": 9.4,
"sodium": 360,
"potassium": 414,
"phosphorus": 185,
"calcium": 61,
"iron": 3.0,
"water": 280
},
"ingredients": [
[
"牛肉",
"80g"
],
[
"白萝卜",
"150g"
],
[
"姜",
"3g"
]
],
"steps": [
"牛腩焯水，白萝卜切块。",
"牛腩加水炖35分钟。",
"下白萝卜炖软，少盐。"
],
"time": "50分钟",
"difficulty": "中等",
"substitutes": "牛腩可用瘦肉替换",
"notes": "汤不喝底；牛肉磷中等，按医嘱限量。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 71,
"name": "清炒荷兰豆",
"region": "华中",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 99,
"protein": 3.9,
"fat": 5.5,
"carb": 8.5,
"sodium": 214,
"potassium": 186,
"phosphorus": 63,
"calcium": 77,
"iron": 1.4,
"water": 120
},
"ingredients": [
[
"荷兰豆",
"150g"
],
[
"蒜",
"4g"
],
[
"食用油",
"5g"
]
],
"steps": [
"荷兰豆去筋洗净。",
"沸水焯1分钟捞出。",
"热油快炒，少盐调味。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "荷兰豆可用豆角替换",
"notes": "少盐；不勾芡。",
"source": "示例数据，待审核"
},
{
"id": 72,
"name": "金针菇鸡丝汤",
"region": "华中",
"season": "秋",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowNa",
"goodProtein"
],
"tags": [
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 133,
"protein": 19.2,
"fat": 3.8,
"carb": 5.5,
"sodium": 235,
"potassium": 398,
"phosphorus": 197,
"calcium": 7,
"iron": 1.4,
"water": 340
},
"ingredients": [
[
"鸡胸肉",
"70g"
],
[
"金针菇",
"80g"
],
[
"姜",
"3g"
]
],
"steps": [
"鸡胸肉切丝焯水，金针菇去根。",
"水开下姜片和鸡丝煮5分钟。",
"下金针菇再煮3分钟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "鸡胸肉可用瘦肉替换",
"notes": "汤不喝底；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 73,
"name": "红薯小米粥",
"region": "华中",
"season": "冬",
"meal": "早餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 230,
"protein": 4.5,
"fat": 1.4,
"carb": 49.8,
"sodium": 24,
"potassium": 383,
"phosphorus": 123,
"calcium": 35,
"iron": 2.4,
"water": 350
},
"ingredients": [
[
"红薯",
"80g"
],
[
"小米",
"40g"
],
[
"清水",
"450ml"
]
],
"steps": [
"红薯去皮切小块。",
"小米和红薯加水煮开。",
"小火熬20分钟至软稠。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "红薯可用南瓜替换",
"notes": "红薯含钾较高，血钾偏高时不宜；粥水计入每日水量。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 74,
"name": "凉拌白萝卜丝",
"region": "华中",
"season": "春",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 42,
"protein": 1.6,
"fat": 0.2,
"carb": 8.6,
"sodium": 98,
"potassium": 269,
"phosphorus": 43,
"calcium": 55,
"iron": 0.9,
"water": 100
},
"ingredients": [
[
"白萝卜",
"150g"
],
[
"蒜",
"3g"
],
[
"醋",
"5g"
]
],
"steps": [
"白萝卜切细丝。",
"加蒜末和醋拌匀。",
"不加盐或少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "白萝卜可用黄瓜替换",
"notes": "现拌现吃口感更脆。",
"source": "示例数据，待审核"
},
{
"id": 75,
"name": "蒸南瓜",
"region": "西南",
"season": "秋",
"meal": "加餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 37,
"protein": 1.1,
"fat": 0.1,
"carb": 8.0,
"sodium": 1,
"potassium": 218,
"phosphorus": 36,
"calcium": 24,
"iron": 0.6,
"water": 110
},
"ingredients": [
[
"南瓜",
"150g"
]
],
"steps": [
"南瓜去皮切块。",
"上锅蒸15分钟。",
"不加糖直接食用。"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "南瓜可用山药替换",
"notes": "一次食用量适中。",
"source": "示例数据，待审核"
},
{
"id": 76,
"name": "酸辣圆白菜（少盐）",
"region": "西南",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 104,
"protein": 3.3,
"fat": 5.4,
"carb": 10.5,
"sodium": 325,
"potassium": 404,
"phosphorus": 65,
"calcium": 65,
"iron": 1.1,
"water": 120
},
"ingredients": [
[
"圆白菜",
"200g"
],
[
"蒜",
"4g"
],
[
"醋",
"5g"
],
[
"食用油",
"5g"
]
],
"steps": [
"圆白菜手撕成块。",
"热油爆香蒜片。",
"下圆白菜快炒，加醋少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "圆白菜可用大白菜替换",
"notes": "少盐，辣味根据耐受调整。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 77,
"name": "土豆泥（少盐）",
"region": "西南",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 145,
"protein": 4.9,
"fat": 1.4,
"carb": 28.2,
"sodium": 28,
"potassium": 553,
"phosphorus": 96,
"calcium": 43,
"iron": 1.3,
"water": 140
},
"ingredients": [
[
"土豆",
"150g"
],
[
"牛奶",
"30ml"
]
],
"steps": [
"土豆蒸熟去皮。",
"压成泥，加少量牛奶调匀。",
"不加盐或少盐。"
],
"time": "30分钟",
"difficulty": "简单",
"substitutes": "土豆可用南瓜替换",
"notes": "土豆含钾较高，高钾血症不宜；切块浸泡焯水可降低部分钾。",
"source": "示例数据，待审核"
},
{
"id": 78,
"name": "白灼秋葵",
"region": "西南",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 63,
"protein": 3.3,
"fat": 0.2,
"carb": 12.1,
"sodium": 241,
"potassium": 322,
"phosphorus": 101,
"calcium": 70,
"iron": 1.2,
"water": 120
},
"ingredients": [
[
"秋葵",
"150g"
],
[
"生抽",
"3g"
],
[
"蒜",
"4g"
]
],
"steps": [
"秋葵焯水2分钟过凉。",
"对半切开摆盘。",
"蒜末和少量生抽调汁淋上。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "秋葵可用芦笋替换",
"notes": "生抽少量，避免过咸。",
"source": "示例数据，待审核"
},
{
"id": 79,
"name": "鸡胸肉炒青椒",
"region": "西南",
"season": "秋",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein"
],
"tags": [
"低磷",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 184,
"protein": 20.5,
"fat": 9.2,
"carb": 4.8,
"sodium": 238,
"potassium": 380,
"phosphorus": 152,
"calcium": 14,
"iron": 1.1,
"water": 90
},
"ingredients": [
[
"鸡胸肉",
"80g"
],
[
"青椒",
"80g"
],
[
"食用油",
"5g"
]
],
"steps": [
"鸡胸肉切片焯水，青椒切块。",
"热油炒青椒。",
"下鸡片炒匀，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "鸡胸肉可用瘦肉替换",
"notes": "焯水可减少部分磷；少盐。",
"source": "示例数据，待审核"
},
{
"id": 80,
"name": "冬瓜海带汤",
"region": "西南",
"season": "夏",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 34,
"protein": 1.2,
"fat": 0.5,
"carb": 6.4,
"sodium": 236,
"potassium": 243,
"phosphorus": 35,
"calcium": 79,
"iron": 1.2,
"water": 340
},
"ingredients": [
[
"冬瓜",
"200g"
],
[
"海带",
"40g"
],
[
"姜",
"3g"
]
],
"steps": [
"海带泡发切段，冬瓜切片。",
"水开下海带煮5分钟。",
"下冬瓜煮熟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "海带可用平菇替换",
"notes": "海带含钾较高，血钾偏高时不宜；汤不喝底。",
"source": "示例数据，待审核"
},
{
"id": 81,
"name": "蒸芋头",
"region": "西南",
"season": "冬",
"meal": "加餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"highK",
"lowP",
"lowNa"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 124,
"protein": 3.3,
"fat": 0.3,
"carb": 27.1,
"sodium": 50,
"potassium": 567,
"phosphorus": 82,
"calcium": 54,
"iron": 1.5,
"water": 110
},
"ingredients": [
[
"芋头",
"150g"
]
],
"steps": [
"芋头去皮切块。",
"上锅蒸20分钟。",
"不加盐直接食用。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "芋头可用南瓜替换",
"notes": "芋头含钾较高，血钾偏高时不宜。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 82,
"name": "凉拌茄子",
"region": "西南",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 60,
"protein": 2.5,
"fat": 0.4,
"carb": 11.4,
"sodium": 16,
"potassium": 299,
"phosphorus": 52,
"calcium": 49,
"iron": 1.1,
"water": 120
},
"ingredients": [
[
"茄子",
"200g"
],
[
"蒜",
"5g"
],
[
"醋",
"5g"
]
],
"steps": [
"长茄子蒸熟撕条。",
"蒜末加醋调汁。",
"淋在茄子上拌匀。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "茄子可用西葫芦替换",
"notes": "不加盐或少盐。",
"source": "示例数据，待审核"
},
{
"id": 83,
"name": "香菇鸡汤",
"region": "西南",
"season": "冬",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowNa",
"goodProtein"
],
"tags": [
"低钾",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 131,
"protein": 17.1,
"fat": 5.9,
"carb": 2.4,
"sodium": 260,
"potassium": 194,
"phosphorus": 239,
"calcium": 6,
"iron": 1.3,
"water": 340
},
"ingredients": [
[
"鸡腿",
"80g"
],
[
"香菇",
"40g"
],
[
"姜",
"3g"
]
],
"steps": [
"鸡腿焯水，香菇切片。",
"加水炖20分钟。",
"下香菇再煮8分钟，少盐。"
],
"time": "30分钟",
"difficulty": "简单",
"substitutes": "鸡腿可用鸡胸肉替换",
"notes": "汤不喝底；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 84,
"name": "玉米蒸蛋",
"region": "西南",
"season": "春",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 130,
"protein": 8.5,
"fat": 5.0,
"carb": 12.8,
"sodium": 266,
"potassium": 196,
"phosphorus": 124,
"calcium": 33,
"iron": 1.5,
"water": 100
},
"ingredients": [
[
"玉米",
"50g"
],
[
"鸡蛋",
"1枚"
],
[
"温水",
"80ml"
]
],
"steps": [
"玉米粒和蛋液加温水打匀。",
"上锅蒸12分钟。",
"少盐调味。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "玉米可用南瓜替换",
"notes": "蛋白质按分期控制；少盐。",
"source": "示例数据，待审核"
},
{
"id": 85,
"name": "素炒花菜",
"region": "西南",
"season": "春",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 102,
"protein": 4.0,
"fat": 5.4,
"carb": 9.4,
"sodium": 258,
"potassium": 372,
"phosphorus": 89,
"calcium": 42,
"iron": 2.0,
"water": 120
},
"ingredients": [
[
"花菜",
"180g"
],
[
"蒜",
"4g"
],
[
"食用油",
"5g"
]
],
"steps": [
"花菜掰小朵焯水。",
"热油爆香蒜片。",
"下花菜快炒，少盐调味。"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "花菜可用西兰花替换",
"notes": "焯水可减少部分钾和磷。",
"source": "示例数据，待审核"
},
{
"id": 86,
"name": "清蒸草鱼",
"region": "西南",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"lowNa",
"goodProtein",
"lowPurine"
],
"tags": [
"低钠",
"优质蛋白",
"低嘌呤"
],
"nutrition": {
"energy": 140,
"protein": 20.1,
"fat": 6.3,
"carb": 0.8,
"sodium": 56,
"potassium": 396,
"phosphorus": 246,
"calcium": 37,
"iron": 1.1,
"water": 80
},
"ingredients": [
[
"草鱼",
"120g"
],
[
"姜",
"5g"
],
[
"小葱",
"5g"
]
],
"steps": [
"草鱼处理干净，铺姜片。",
"水开大火蒸10分钟。",
"撒葱花，淋少量生抽。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "草鱼可用鲈鱼替换",
"notes": "磷中等，按医嘱限量；不加盐，生抽少量。",
"source": "示例数据，待审核"
},
{
"id": 87,
"name": "白灼生菜",
"region": "华南",
"season": "夏",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 39,
"protein": 2.9,
"fat": 0.6,
"carb": 5.4,
"sodium": 237,
"potassium": 446,
"phosphorus": 65,
"calcium": 70,
"iron": 2.1,
"water": 130
},
"ingredients": [
[
"生菜",
"200g"
],
[
"生抽",
"3g"
],
[
"蒜",
"4g"
]
],
"steps": [
"生菜焯水20秒捞出。",
"蒜末和少量生抽调汁。",
"淋在生菜上。"
],
"time": "5分钟",
"difficulty": "简单",
"substitutes": "生菜可用上海青替换",
"notes": "生抽少量，避免过咸。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 88,
"name": "蒸蛋羹",
"region": "华南",
"season": "春",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 71,
"protein": 6.5,
"fat": 4.4,
"carb": 1.4,
"sodium": 266,
"potassium": 77,
"phosphorus": 65,
"calcium": 28,
"iron": 1.0,
"water": 130
},
"ingredients": [
[
"鸡蛋",
"1枚"
],
[
"温水",
"120ml"
]
],
"steps": [
"蛋液加温水打匀。",
"过筛后上锅蒸10分钟。",
"少盐调味。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "鸡蛋可用豆腐替换",
"notes": "蛋白质按分期控制；少盐。",
"source": "示例数据，待审核"
},
{
"id": 89,
"name": "清炒上海青",
"region": "华南",
"season": "冬",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 84,
"protein": 2.8,
"fat": 5.6,
"carb": 5.7,
"sodium": 348,
"potassium": 362,
"phosphorus": 51,
"calcium": 216,
"iron": 2.4,
"water": 130
},
"ingredients": [
[
"上海青",
"200g"
],
[
"蒜",
"4g"
],
[
"食用油",
"5g"
]
],
"steps": [
"上海青洗净。",
"热油爆香蒜片。",
"大火快炒，少盐调味。"
],
"time": "6分钟",
"difficulty": "简单",
"substitutes": "上海青可用油菜替换",
"notes": "大火快炒保持口感；少盐。",
"source": "示例数据，待审核"
},
{
"id": 90,
"name": "冬瓜炖鸭肉",
"region": "华南",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowK",
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 90,
"protein": 12.8,
"fat": 1.6,
"carb": 5.9,
"sodium": 252,
"potassium": 224,
"phosphorus": 92,
"calcium": 48,
"iron": 2.2,
"water": 320
},
"ingredients": [
[
"鸭肉",
"80g"
],
[
"冬瓜",
"200g"
],
[
"姜",
"3g"
]
],
"steps": [
"鸭肉焯水，冬瓜切块。",
"加水炖25分钟。",
"下冬瓜炖软，少盐。"
],
"time": "35分钟",
"difficulty": "中等",
"substitutes": "鸭肉可用瘦肉替换",
"notes": "汤不喝底；注意钾摄入。",
"source": "示例数据，待审核"
},
{
"id": 91,
"name": "草鱼蒸蛋",
"region": "华南",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析",
"腹膜透析",
"血液透析"
],
"flags": [
"lowNa",
"goodProtein",
"lowPurine"
],
"tags": [
"低钠",
"优质蛋白",
"低嘌呤"
],
"nutrition": {
"energy": 163,
"protein": 19.8,
"fat": 8.6,
"carb": 1.7,
"sodium": 303,
"potassium": 335,
"phosphorus": 228,
"calcium": 50,
"iron": 1.7,
"water": 100
},
"ingredients": [
[
"草鱼",
"80g"
],
[
"鸡蛋",
"1枚"
],
[
"姜",
"3g"
]
],
"steps": [
"草鱼切片焯水。",
"蛋液加温水打匀，铺鱼片。",
"上锅蒸12分钟，少盐。"
],
"time": "18分钟",
"difficulty": "中等",
"substitutes": "草鱼可用鳕鱼替换",
"notes": "磷中等，按医嘱限量；蛋白质按分期控制。",
"source": "示例数据，待审核"
},
{
"id": 93,
"name": "南瓜蒸排骨",
"region": "华南",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"flags": [
"lowP",
"lowNa",
"goodProtein"
],
"tags": [
"低磷",
"低钠",
"优质蛋白"
],
"nutrition": {
"energy": 296,
"protein": 13.0,
"fat": 24.1,
"carb": 6.7,
"sodium": 247,
"potassium": 357,
"phosphorus": 126,
"calcium": 25,
"iron": 1.6,
"water": 120
},
"ingredients": [
[
"排骨",
"80g"
],
[
"南瓜",
"120g"
],
[
"姜",
"3g"
]
],
"steps": [
"排骨焯水，南瓜切块。",
"排骨和南瓜摆盘，铺姜片。",
"上锅蒸30分钟，少盐。"
],
"time": "40分钟",
"difficulty": "中等",
"substitutes": "排骨可用鸡胸肉替换",
"notes": "排骨磷较高，按医嘱限量；南瓜含钾中等，注意总量。",
"source": "示例数据，待审核"
},
{
"id": 94,
"name": "丝瓜虾仁汤",
"region": "华南",
"season": "夏",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 81,
"protein": 9.1,
"fat": 0.9,
"carb": 9.1,
"sodium": 267,
"potassium": 346,
"phosphorus": 155,
"calcium": 68,
"iron": 1.8,
"water": 320
},
"ingredients": [
[
"丝瓜",
"180g"
],
[
"虾仁",
"50g"
],
[
"姜",
"3g"
]
],
"steps": [
"丝瓜切滚刀块，虾仁去虾线。",
"水开下姜片和虾仁煮2分钟。",
"下丝瓜煮熟，少盐。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "虾仁可用瘦肉替换",
"notes": "汤不喝底；虾仁磷中等，按医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 95,
"name": "清炒佛手瓜",
"region": "华南",
"season": "秋",
"meal": "午餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 98,
"protein": 2.6,
"fat": 5.2,
"carb": 10.1,
"sodium": 221,
"potassium": 164,
"phosphorus": 41,
"calcium": 34,
"iron": 0.2,
"water": 120
},
"ingredients": [
[
"佛手瓜",
"200g"
],
[
"蒜",
"4g"
],
[
"食用油",
"5g"
]
],
"steps": [
"佛手瓜去皮切片。",
"热油爆香蒜片。",
"下佛手瓜快炒，少盐。"
],
"time": "8分钟",
"difficulty": "简单",
"substitutes": "佛手瓜可用西葫芦替换",
"notes": "少盐；不勾芡。",
"source": "示例数据，待审核"
},
{
"id": 96,
"name": "百合蒸南瓜",
"region": "华南",
"season": "冬",
"meal": "加餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 55,
"protein": 1.3,
"fat": 0.1,
"carb": 12.2,
"sodium": 2,
"potassium": 226,
"phosphorus": 38,
"calcium": 21,
"iron": 0.6,
"water": 120
},
"ingredients": [
[
"南瓜",
"120g"
],
[
"百合",
"15g"
]
],
"steps": [
"南瓜去皮切块，百合洗净。",
"摆盘上锅蒸15分钟。",
"不加糖直接食用。"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "百合可用银耳替换",
"notes": "一次食用量适中。",
"source": "示例数据，待审核"
},
{
"id": 97,
"name": "番茄豆腐汤",
"region": "华南",
"season": "春",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 101,
"protein": 10.1,
"fat": 3.8,
"carb": 6.6,
"sodium": 212,
"potassium": 289,
"phosphorus": 136,
"calcium": 150,
"iron": 2.9,
"water": 320
},
"ingredients": [
[
"西红柿",
"100g"
],
[
"豆腐",
"100g"
],
[
"小葱",
"3g"
]
],
"steps": [
"西红柿切块，豆腐切块。",
"水开下西红柿煮3分钟。",
"下豆腐再煮5分钟，少盐。"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "豆腐可用冬瓜替换",
"notes": "汤不喝底；豆腐磷中等，按医嘱限量。",
"source": "示例数据，待审核"
},
{
"id": 98,
"name": "鸡腿肉炒芦笋",
"region": "华南",
"season": "秋",
"meal": "晚餐",
"stages": [
"all"
],
"flags": [
"highK",
"lowNa",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低钠",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 189,
"protein": 19.3,
"fat": 10.9,
"carb": 3.6,
"sodium": 266,
"potassium": 432,
"phosphorus": 278,
"calcium": 17,
"iron": 2.8,
"water": 100
},
"ingredients": [
[
"鸡腿肉",
"80g"
],
[
"芦笋",
"120g"
],
[
"食用油",
"5g"
]
],
"steps": [
"鸡腿肉切条焯水，芦笋切段。",
"热油炒芦笋。",
"下鸡肉炒匀，少盐调味。"
],
"time": "12分钟",
"difficulty": "简单",
"substitutes": "鸡腿肉可用鸡胸肉替换",
"notes": "焯水可减少部分磷；少盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "示例数据，待审核"
},
{
"id": 99,
"name": "大米粥",
"region": "通用",
"season": "冬",
"meal": "早餐",
"stages": [
"all"
],
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 174,
"protein": 4.0,
"fat": 0.3,
"carb": 39.0,
"sodium": 1,
"potassium": 56,
"phosphorus": 56,
"calcium": 6,
"iron": 0.4,
"water": 400
},
"ingredients": [
[
"大米",
"50g"
],
[
"清水",
"550ml"
]
],
"steps": [
"大米淘洗后加水。",
"煮开转小火。",
"熬30分钟至软稠。"
],
"time": "35分钟",
"difficulty": "简单",
"substitutes": "大米可用小米替换",
"notes": "不加糖；粥水计入每日水量。",
"source": "示例数据，待审核"
},
{
"id": 100,
"name": "蒸玉米",
"region": "通用",
"season": "秋",
"meal": "加餐",
"stages": [
"all"
],
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 177,
"protein": 6.0,
"fat": 1.8,
"carb": 34.2,
"sodium": 2,
"potassium": 357,
"phosphorus": 176,
"calcium": 15,
"iron": 1.5,
"water": 80
},
"ingredients": [
[
"玉米",
"1根约150g"
]
],
"steps": [
"玉米去壳洗净。",
"上锅蒸20分钟。",
"直接食用，不加盐。"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "玉米可用南瓜替换",
"notes": "玉米属于主食类，控制份量。",
"source": "示例数据，待审核"
},
{
"id": 101,
"name": "韭菜麦淀粉蒸饺",
"region": "东北",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"韭菜",
"100g"
],
[
"小麦淀粉",
"80g"
],
[
"猪五花肉",
"20g"
],
[
"面粉",
"15g"
],
[
"虾仁",
"10g"
]
],
"steps": [
"小麦淀粉加沸水揉成面团",
"韭菜切末，肉馅和虾仁剁碎混合",
"包成饺子形状",
"水开后大火蒸8分钟"
],
"time": "30分钟",
"difficulty": "中等",
"substitutes": "虾仁可用鸡胸肉替代",
"notes": "用小麦淀粉替代部分面粉可降低蛋白质摄入，适合CKD 3-5期优化",
"source": "指南附录3（东北地区，第27页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"lowNa",
"ironRich"
],
"tags": [
"低磷",
"低钠",
"含铁"
],
"nutrition": {
"energy": 442,
"protein": 7.9,
"fat": 7.9,
"carb": 84.8,
"sodium": 36,
"potassium": 349,
"phosphorus": 133,
"calcium": 64,
"iron": 3.0,
"water": 121.8
}
},
{
"id": 102,
"name": "香菇藕片炖鸡腿",
"region": "东北",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"莲藕",
"100g"
],
[
"香菇",
"50g"
],
[
"鸡腿",
"35g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"莲藕切片，香菇泡发切块，鸡腿飞水去腥",
"热锅下油炒香菇",
"加入鸡腿、莲藕，加水没过食材",
"小火炖20分钟，加盐调味"
],
"time": "35分钟",
"difficulty": "简单",
"substitutes": "鸡腿可用鸭肉替代",
"notes": "老年患者蛋白质按0.8g/kg体重控制；莲藕钾含量中等，高钾患者先飞水",
"source": "指南附录3（东北地区，第27页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 214,
"protein": 10.1,
"fat": 10.9,
"carb": 19.0,
"sodium": 464,
"potassium": 330,
"phosphorus": 179,
"calcium": 42,
"iron": 2.0,
"water": 151.2
}
},
{
"id": 103,
"name": "白菜猪肉粉条炖豆腐",
"region": "东北",
"season": "秋",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"大白菜",
"100g"
],
[
"豆腐",
"60g"
],
[
"粉条",
"25g"
],
[
"猪五花肉",
"20g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"大白菜切段飞水，粉条提前泡软",
"豆腐切块，猪肉切薄片",
"热锅下油炒肉片，加大白菜翻炒",
"加入豆腐、粉条和适量水，小火炖15分钟，少盐调味"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "猪肉可用鸡胸肉替代",
"notes": "CKD 3-5期控蛋白，豆腐适量；粉条低蛋白高能量，可增量替代主食",
"source": "指南附录3（东北地区，第28页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"含铁"
],
"nutrition": {
"energy": 294,
"protein": 8.8,
"fat": 17.4,
"carb": 25.6,
"sodium": 500,
"potassium": 242,
"phosphorus": 123,
"calcium": 136,
"iron": 2.7,
"water": 159.2
}
},
{
"id": 104,
"name": "酸菜白肉炖粉条（低盐版）",
"region": "东北",
"season": "冬",
"meal": "晚餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"酸菜",
"100g（飞水去盐）"
],
[
"猪五花肉",
"25g"
],
[
"粉条",
"50g"
],
[
"姜",
"5g"
],
[
"植物油",
"8g"
],
[
"盐",
"0.5g"
]
],
"steps": [
"酸菜充分漂洗飞水以减少钠含量",
"猪肉切薄片，粉条泡软",
"锅中下油炒姜片，加猪肉炒至变色",
"加入酸菜、粉条，加水炖煮15分钟，极少量盐调味"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "酸菜可用大白菜替代（更低钠）",
"notes": "透析患者严格限盐≤3g/天；水肿患者酸菜需充分漂洗；限制饮水量",
"source": "指南附录3（东北地区，第29页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "通用",
"condition": "合并水肿",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"含铁"
],
"nutrition": {
"energy": 355,
"protein": 3.5,
"fat": 17.2,
"carb": 46.6,
"sodium": 476,
"potassium": 169,
"phosphorus": 60,
"calcium": 58,
"iron": 2.0,
"water": 116.3
}
},
{
"id": 105,
"name": "清蒸山药大虾",
"region": "西北",
"season": "春",
"meal": "早餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"鲜山药",
"100g"
],
[
"虾",
"30g"
],
[
"淀粉",
"10g"
],
[
"植物油",
"5g"
],
[
"盐",
"1g"
]
],
"steps": [
"山药去皮切段蒸熟；2.虾去头去壳，裹薄淀粉",
"水开后蒸虾5分钟",
"摆盘，山药与虾搭配，少盐调味"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "虾可用鱼片替代",
"notes": "山药为食药物质，气虚者适宜；虾蛋白质优质，磷/蛋白质比值适中",
"source": "指南附录3（西北地区，第32页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "男",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowP"
],
"tags": [
"低磷"
],
"nutrition": {
"energy": 158,
"protein": 6.0,
"fat": 5.5,
"carb": 21.1,
"sodium": 448,
"potassium": 285,
"phosphorus": 93,
"calcium": 43,
"iron": 1.0,
"water": 110.4
}
},
{
"id": 106,
"name": "西红柿烩丝瓜",
"region": "西北",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"西红柿",
"100g"
],
[
"丝瓜",
"100g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"西红柿切块，丝瓜去皮切段",
"热锅下油，先炒西红柿出汁",
"加入丝瓜翻炒至熟",
"少盐调味"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "丝瓜可用西葫芦替代",
"notes": "两者均低钾低磷低钠，高血压患者严格控盐≤3g/天；此菜有助控压",
"source": "指南附录3（西北地区，第32页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "合并高血压",
"remark": "来自食养指南AI生成",
"flags": [
"lowP"
],
"tags": [
"低磷"
],
"nutrition": {
"energy": 120,
"protein": 2.2,
"fat": 8.4,
"carb": 8.9,
"sodium": 402,
"potassium": 300,
"phosphorus": 56,
"calcium": 24,
"iron": 0.8,
"water": 189.0
}
},
{
"id": 107,
"name": "莲子百合稀饭",
"region": "西北",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"黑米",
"30g"
],
[
"大枣",
"10g"
],
[
"莲子",
"5g"
],
[
"百合",
"5g"
],
[
"清水",
"500ml"
]
],
"steps": [
"莲子、百合提前泡发",
"黑米淘洗，大枣去核",
"所有材料加水大火煮开",
"转小火熬40分钟至软稠"
],
"time": "50分钟",
"difficulty": "简单",
"substitutes": "黑米可用大米替代",
"notes": "大枣、莲子、百合均为食药物质；老年患者滋阴润燥适宜；不加糖",
"source": "指南附录3（西北地区，第33页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "女",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 144,
"protein": 3.9,
"fat": 0.9,
"carb": 30.0,
"sodium": 3,
"potassium": 189,
"phosphorus": 142,
"calcium": 15,
"iron": 0.9,
"water": 514.2
}
},
{
"id": 108,
"name": "冬瓜羊肉丸子汤",
"region": "西北",
"season": "冬",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"冬瓜",
"200g"
],
[
"羊肉",
"50g"
],
[
"玉米淀粉",
"20g"
],
[
"植物油",
"5g"
],
[
"盐",
"1g"
]
],
"steps": [
"羊肉剁碎，加淀粉搅拌制成丸子",
"冬瓜切块",
"锅中加水煮沸，下丸子",
"加冬瓜煮熟，少盐调味"
],
"time": "25分钟",
"difficulty": "中等",
"substitutes": "羊肉可用牛肉替代",
"notes": "冬瓜低钾低磷，CKD 3-5期适宜；玉米淀粉增加能量减少蛋白质占比",
"source": "指南附录3（西北地区，第34页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "男",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"goodProtein"
],
"tags": [
"低钾",
"低磷",
"优质蛋白"
],
"nutrition": {
"energy": 214,
"protein": 10.3,
"fat": 8.9,
"carb": 23.1,
"sodium": 443,
"potassium": 266,
"phosphorus": 108,
"calcium": 48,
"iron": 1.7,
"water": 230.9
}
},
{
"id": 109,
"name": "荞麦红烧鸡腿",
"region": "西北",
"season": "春",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"荞麦面粉",
"60g"
],
[
"面粉",
"60g"
],
[
"鸡腿肉",
"50g"
],
[
"胡萝卜",
"50g"
],
[
"植物油",
"10g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"荞麦面粉与面粉混合揉面，擀成面条",
"鸡腿去骨切块，胡萝卜切块",
"热锅红烧鸡肉至上色，加胡萝卜炖熟",
"面条煮熟，配菜食用"
],
"time": "35分钟",
"difficulty": "中等",
"substitutes": "荞麦面可用普通面粉替代",
"notes": "透析患者蛋白质需达1.0-1.2g/kg体重；鸡腿优质蛋白，适合透析阶段钾含量偏高，血钾偏高者建议限量或遵医嘱。磷含量偏高，血磷偏高者建议限量。",
"source": "指南附录3（西北地区，第35页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"highP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"慎用：高磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 616,
"protein": 25.6,
"fat": 16.0,
"carb": 92.4,
"sodium": 666,
"potassium": 560,
"phosphorus": 428,
"calcium": 66,
"iron": 7.0,
"water": 96.0
}
},
{
"id": 110,
"name": "荠菜猪肉蒸饺（麦淀粉皮）",
"region": "华北",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"荠菜",
"150g"
],
[
"猪瘦肉",
"45g"
],
[
"小麦淀粉",
"40g"
],
[
"面粉",
"25g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"小麦淀粉和面粉混合，加沸水揉面",
"荠菜焯水切末，猪肉剁碎，加油盐调馅",
"面团擀皮包馅",
"蒸锅水开后蒸10分钟"
],
"time": "40分钟",
"difficulty": "中等",
"substitutes": "荠菜可用白菜替代",
"notes": "小麦淀粉替代部分面粉降低蛋白质；猪肉用量控制在45g以内钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华北地区，第38页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 419,
"protein": 17.5,
"fat": 11.8,
"carb": 60.7,
"sodium": 469,
"potassium": 608,
"phosphorus": 258,
"calcium": 455,
"iron": 10.5,
"water": 174.8
}
},
{
"id": 111,
"name": "薏米绿豆汤（低糖版）",
"region": "华北",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"薏苡仁",
"10g"
],
[
"绿豆",
"7g"
],
[
"清水",
"600ml"
]
],
"steps": [
"薏苡仁、绿豆提前泡1小时",
"加水600ml大火煮沸",
"转小火煮至绿豆熟烂",
"不加糖，直接食用"
],
"time": "45分钟",
"difficulty": "简单",
"substitutes": "绿豆可用赤小豆替代",
"notes": "糖尿病患者不加糖；薏苡仁利湿，夏季适宜；绿豆钾偏高，高钾患者少量",
"source": "指南附录3（华北地区，第38页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "女",
"condition": "合并糖尿病",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 60,
"protein": 2.8,
"fat": 0.4,
"carb": 11.4,
"sodium": 1,
"potassium": 79,
"phosphorus": 45,
"calcium": 10,
"iron": 0.8,
"water": 601.9
}
},
{
"id": 112,
"name": "水煮虾配炒山药木耳",
"region": "华北",
"season": "秋",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"虾",
"55g"
],
[
"鲜山药",
"50g"
],
[
"木耳（干）",
"5g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"虾清洗，水开后煮熟",
"木耳泡发，山药去皮切片",
"热锅下油，炒山药至微透明",
"加木耳翻炒，少盐调味"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "虾可用鱼片替代",
"notes": "虾磷蛋白比中等；山药为食药物质，气虚者适宜；木耳低钾低磷",
"source": "指南附录3（华北地区，第39页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "男",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"含铁"
],
"nutrition": {
"energy": 146,
"protein": 8.9,
"fat": 8.7,
"carb": 8.0,
"sodium": 470,
"potassium": 275,
"phosphorus": 136,
"calcium": 66,
"iron": 6.1,
"water": 89.0
}
},
{
"id": 113,
"name": "黄芪鲤鱼汤（低钾版）",
"region": "华北",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"鲤鱼",
"40g（飞水）"
],
[
"黄芪",
"3g"
],
[
"赤小豆",
"3g"
],
[
"姜",
"2g"
],
[
"清水",
"300ml"
],
[
"盐",
"0.5g"
]
],
"steps": [
"鲤鱼处理后飞水弃汤",
"黄芪、赤小豆洗净备用",
"加水煮沸，放入全部材料",
"小火煮30分钟，极少盐调味，饮汤为主"
],
"time": "40分钟",
"difficulty": "简单",
"substitutes": "鲤鱼可用草鱼替代",
"notes": "高钾血症患者：鱼必须飞水弃汤；黄芪补气利水，气虚水肿适宜；控汤量",
"source": "指南附录3（华北地区，第40页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "通用",
"condition": "合并高钾血症",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 55,
"protein": 7.7,
"fat": 1.7,
"carb": 2.3,
"sodium": 218,
"potassium": 125,
"phosphorus": 67,
"calcium": 23,
"iron": 0.7,
"water": 332.9
}
},
{
"id": 114,
"name": "鲶鱼炖豆腐",
"region": "华北",
"season": "春",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"北豆腐",
"100g"
],
[
"鲶鱼",
"80g"
],
[
"姜",
"5g"
],
[
"植物油",
"10g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"鲶鱼处理切块，豆腐切块",
"热锅下油，鱼块两面煎至微黄",
"加姜片和适量水",
"加入豆腐，小火炖15分钟，少盐调味"
],
"time": "30分钟",
"difficulty": "中等",
"substitutes": "鲶鱼可用草鱼替代",
"notes": "透析男性患者蛋白质需求1.0-1.2g/kg；豆腐提供优质植物蛋白和钙钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华北地区，第41页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "男",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 253,
"protein": 23.1,
"fat": 16.6,
"carb": 2.9,
"sodium": 637,
"potassium": 402,
"phosphorus": 269,
"calcium": 173,
"iron": 3.2,
"water": 149.9
}
},
{
"id": 115,
"name": "龙井虾仁",
"region": "华东",
"season": "春",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"虾仁",
"70g"
],
[
"蛋清",
"20g"
],
[
"龙井茶",
"3g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"龙井茶用80度水泡开备用",
"虾仁加蛋清、少许淀粉抓匀",
"热锅温油，虾仁滑炒至变色",
"淋入少量茶水，少盐调味出锅"
],
"time": "15分钟",
"difficulty": "中等",
"substitutes": "虾仁可用鱼片替代",
"notes": "虾仁优质蛋白低脂；华东特色菜，清淡少盐符合CKD饮食原则",
"source": "指南附录3（华东地区，第43页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 135,
"protein": 12.5,
"fat": 8.8,
"carb": 1.6,
"sodium": 492,
"potassium": 243,
"phosphorus": 142,
"calcium": 60,
"iron": 1.8,
"water": 76.3
}
},
{
"id": 116,
"name": "洋葱排骨配蒜蓉空心菜",
"region": "华东",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"洋葱",
"100g"
],
[
"猪排骨",
"50g"
],
[
"空心菜",
"100g"
],
[
"大蒜",
"10g"
],
[
"植物油",
"8g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"排骨飞水，洋葱切丝",
"热锅炒香洋葱，加排骨翻炒，加水焖熟",
"另锅蒜蓉炒空心菜至熟",
"少盐调味"
],
"time": "30分钟",
"difficulty": "简单",
"substitutes": "排骨可用鸡腿替代",
"notes": "老年女性注意钙摄入；洋葱低钾低磷；空心菜钾偏高，高钾患者先飞水",
"source": "指南附录3（华东地区，第43页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "女",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 318,
"protein": 11.3,
"fat": 23.5,
"carb": 15.4,
"sodium": 719,
"potassium": 529,
"phosphorus": 147,
"calcium": 127,
"iron": 3.7,
"water": 215.6
}
},
{
"id": 117,
"name": "百合芦笋炒虾仁",
"region": "华东",
"season": "秋",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"芦笋",
"150g"
],
[
"鲜百合",
"30g"
],
[
"虾仁",
"40g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"芦笋切段飞水，百合洗净",
"虾仁滑炒至变色盛出",
"热锅下油，炒芦笋和百合",
"加入虾仁翻匀，少盐调味"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "虾仁可用豆腐替代",
"notes": "百合为食药物质，润肺养阴；CKD 3-5期低蛋白，虾仁控量40g钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华东地区，第44页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 183,
"protein": 10.2,
"fat": 8.6,
"carb": 16.1,
"sodium": 452,
"potassium": 518,
"phosphorus": 170,
"calcium": 52,
"iron": 3.2,
"water": 189.9
}
},
{
"id": 118,
"name": "白菜粉丝煲（低蛋白低盐版）",
"region": "华东",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"大白菜",
"150g"
],
[
"猪瘦肉",
"60g"
],
[
"粉丝",
"50g"
],
[
"植物油",
"5g"
],
[
"盐",
"0.5g"
]
],
"steps": [
"大白菜飞水，粉丝提前泡软",
"猪肉切薄片飞水",
"砂锅加水煮沸，放入肉片",
"加大白菜、粉丝，小火煮15分钟，极少盐调味"
],
"time": "25分钟",
"difficulty": "简单",
"substitutes": "猪肉可用鸡胸肉替代",
"notes": "水肿患者严格限盐；粉丝低蛋白高能量适合CKD 3-5期；限制饮水量",
"source": "指南附录3（华东地区，第44页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "女",
"condition": "合并水肿",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 330,
"protein": 14.8,
"fat": 9.0,
"carb": 47.6,
"sodium": 369,
"potassium": 387,
"phosphorus": 163,
"calcium": 84,
"iron": 3.2,
"water": 192.6
}
},
{
"id": 119,
"name": "清蒸鳊鱼配茼蒿炒香干",
"region": "华东",
"season": "春",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"鳊鱼",
"110g"
],
[
"姜",
"5g"
],
[
"茼蒿",
"100g"
],
[
"豆腐干",
"60g"
],
[
"植物油",
"8g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"鳊鱼处理，铺姜片上锅蒸8-10分钟",
"热锅下油炒茼蒿，加豆腐干翻炒",
"少盐调味",
"鱼和蔬菜分盘摆放"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "鳊鱼可用鲈鱼替代",
"notes": "透析患者需高蛋白1.0-1.2g/kg；清蒸低脂，豆腐干提供额外蛋白质钾含量偏高，血钾偏高者建议限量或遵医嘱。磷含量偏高，血磷偏高者建议限量。",
"source": "指南附录3（华东地区，第46页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"highP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"慎用：高磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 318,
"protein": 31.1,
"fat": 17.4,
"carb": 9.1,
"sodium": 994,
"potassium": 636,
"phosphorus": 383,
"calcium": 288,
"iron": 6.3,
"water": 222.0
}
},
{
"id": 120,
"name": "胡萝卜鸡块配清炒油菜",
"region": "华中",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"胡萝卜",
"100g"
],
[
"鸡块",
"70g"
],
[
"油菜",
"150g"
],
[
"植物油",
"10g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"鸡块飞水，胡萝卜切块",
"热锅下油炒鸡块至微黄，加胡萝卜",
"加水焖炖15分钟",
"另锅炒油菜，少盐调味"
],
"time": "30分钟",
"difficulty": "简单",
"substitutes": "鸡块可用虾仁替代",
"notes": "胡萝卜含类胡萝卜素保护肾脏；油菜低钾低磷；华中口味可加少许辣椒钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华中地区，第48页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 275,
"protein": 17.2,
"fat": 17.2,
"carb": 12.9,
"sodium": 815,
"potassium": 627,
"phosphorus": 180,
"calcium": 200,
"iron": 3.8,
"water": 284.3
}
},
{
"id": 121,
"name": "西红柿草鱼块（低嘌呤版）",
"region": "华中",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"西红柿",
"100g"
],
[
"草鱼",
"50g"
],
[
"玉米淀粉",
"10g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"草鱼切块飞水弃汤（减少嘌呤）",
"西红柿切块",
"热锅炒西红柿出汁",
"加鱼块轻炒，裹淀粉勾芡，少盐"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "草鱼可用鳕鱼替代",
"notes": "高尿酸患者：鱼必须飞水弃汤；不喝鱼汤；控制嘌呤摄入；多饮水",
"source": "指南附录3（华中地区，第48页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "男",
"condition": "合并高尿酸",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"goodProtein",
"lowPurine"
],
"tags": [
"低磷",
"优质蛋白",
"低嘌呤"
],
"nutrition": {
"energy": 185,
"protein": 9.3,
"fat": 10.8,
"carb": 12.7,
"sodium": 422,
"potassium": 336,
"phosphorus": 127,
"calcium": 25,
"iron": 0.9,
"water": 135.2
}
},
{
"id": 122,
"name": "莴苣猪里脊肉片",
"region": "华中",
"season": "秋",
"meal": "晚餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"莴苣",
"130g"
],
[
"猪里脊肉",
"50g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
],
[
"淀粉",
"5g"
]
],
"steps": [
"莴苣去皮切片飞水弃汤",
"猪里脊切薄片，加少量淀粉抓匀",
"热锅滑炒肉片至变色盛出",
"原锅炒莴苣，加肉片翻匀，少盐"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "猪里脊可用鸡胸肉替代",
"notes": "CKD 3-5期女性蛋白质0.6g/kg；莴苣低蛋白低磷；飞水减少钾含量钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华中地区，第49页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "女",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 182,
"protein": 11.5,
"fat": 11.2,
"carb": 8.7,
"sodium": 474,
"potassium": 428,
"phosphorus": 146,
"calcium": 34,
"iron": 2.7,
"water": 159.6
}
},
{
"id": 123,
"name": "木耳鸡胸肉丝炒粉条",
"region": "华中",
"season": "冬",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"木耳（水发）",
"100g"
],
[
"鸡胸肉",
"100g"
],
[
"粉条",
"50g"
],
[
"植物油",
"8g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"木耳泡发切丝，粉条泡软，鸡胸肉切丝",
"热锅下油炒鸡肉至熟盛出",
"原锅炒木耳",
"加粉条和鸡肉翻炒，少盐调味"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "鸡胸肉可用豆腐替代",
"notes": "糖尿病透析患者：控制粉条总量；鸡胸肉优质蛋白；木耳低糖低磷",
"source": "指南附录3（华中地区，第51页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "通用",
"condition": "合并糖尿病",
"remark": "来自食养指南AI生成",
"flags": [
"goodProtein",
"ironRich"
],
"tags": [
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 420,
"protein": 26.5,
"fat": 13.3,
"carb": 48.5,
"sodium": 649,
"potassium": 387,
"phosphorus": 203,
"calcium": 42,
"iron": 6.6,
"water": 173.5
}
},
{
"id": 124,
"name": "葱葱鲫鱼配炝拌豌豆苗",
"region": "西南",
"season": "春",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"小葱",
"100g"
],
[
"鲫鱼",
"50g"
],
[
"豌豆苗",
"150g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"鲫鱼处理，用葱段铺垫蒸8分钟",
"豌豆苗飞水沥干",
"热锅油烧热浇在豌豆苗上，加盐拌匀",
"鲫鱼和豌豆苗分盘"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "鲫鱼可用草鱼替代",
"notes": "西南特色，少油少盐；鲫鱼蛋白质优质；豌豆苗钾含量偏高，高钾者飞水",
"source": "指南附录3（西南地区，第53页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 224,
"protein": 16.1,
"fat": 10.9,
"carb": 15.3,
"sodium": 446,
"potassium": 621,
"phosphorus": 223,
"calcium": 172,
"iron": 8.2,
"water": 262.5
}
},
{
"id": 125,
"name": "酸汤鱼片（低盐版）",
"region": "西南",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"西红柿",
"100g"
],
[
"红薯粉条",
"100g"
],
[
"乌鱼",
"35g"
],
[
"姜",
"2g"
],
[
"植物油",
"8g"
],
[
"盐",
"1g"
]
],
"steps": [
"乌鱼切片飞水",
"西红柿切块，姜切丝",
"锅中下油炒西红柿出汁加水",
"放入粉条、鱼片煮熟，少盐调味（不加其他调料）"
],
"time": "25分钟",
"difficulty": "中等",
"substitutes": "乌鱼可用草鱼替代",
"notes": "CKD 3-5期男性控蛋白0.6g/kg；鱼片飞水；红薯粉条低蛋白高能量",
"source": "指南附录3（西南地区，第55页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "男",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"ironRich"
],
"tags": [
"低磷",
"含铁"
],
"nutrition": {
"energy": 464,
"protein": 8.2,
"fat": 8.8,
"carb": 87.9,
"sodium": 425,
"potassium": 312,
"phosphorus": 121,
"calcium": 36,
"iron": 1.8,
"water": 139.4
}
},
{
"id": 126,
"name": "清炖牦牛腱子配青笋粉丝",
"region": "西南",
"season": "冬",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"牦牛腱子肉",
"100g"
],
[
"青笋",
"100g"
],
[
"粉丝",
"25g"
],
[
"植物油",
"5g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"牦牛腱子飞水切块",
"加水慢炖40分钟至熟",
"青笋切丝飞水，粉丝泡软",
"凉拌青笋粉丝，少盐少醋"
],
"time": "55分钟",
"difficulty": "简单",
"substitutes": "牦牛肉可用普通牛肉替代",
"notes": "透析患者高蛋白需求；牛腱子肉优质蛋白；西南特色食材",
"source": "指南附录3（西南地区，第56页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"goodProtein",
"ironRich"
],
"tags": [
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 273,
"protein": 21.5,
"fat": 9.3,
"carb": 25.7,
"sodium": 715,
"potassium": 398,
"phosphorus": 224,
"calcium": 34,
"iron": 4.0,
"water": 171.8
}
},
{
"id": 127,
"name": "葱花豆腐配蒜蓉炒油麦菜",
"region": "华南",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"南豆腐",
"120g"
],
[
"小葱",
"15g"
],
[
"油麦菜",
"200g"
],
[
"大蒜",
"10g"
],
[
"植物油",
"8g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"豆腐切块，小葱切末撒上",
"淋少许热油",
"大蒜切末，热锅下油炒香",
"加油麦菜大火翻炒，少盐出锅"
],
"time": "10分钟",
"difficulty": "简单",
"substitutes": "豆腐可用内酯豆腐替代",
"notes": "华南清淡口味；豆腐优质植物蛋白；油麦菜低钾低钠钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华南地区，第58页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"lowP",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"低磷",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 194,
"protein": 10.9,
"fat": 11.9,
"carb": 10.8,
"sodium": 760,
"potassium": 606,
"phosphorus": 178,
"calcium": 291,
"iron": 4.5,
"water": 315.9
}
},
{
"id": 128,
"name": "紫苏蒸草鱼",
"region": "华南",
"season": "冬",
"meal": "晚餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"鲜紫苏",
"5g"
],
[
"草鱼",
"65g"
],
[
"植物油",
"5g"
],
[
"盐",
"1g"
],
[
"姜",
"3g"
]
],
"steps": [
"草鱼处理，表面划刀",
"姜片和紫苏铺底",
"水开后蒸8分钟",
"淋少许热油，极少盐"
],
"time": "15分钟",
"difficulty": "简单",
"substitutes": "草鱼可用鲈鱼替代",
"notes": "紫苏为食药物质，理气和胃；清蒸低脂；老年女性补充优质蛋白",
"source": "指南附录3（华南地区，第59页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "女",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"goodProtein"
],
"tags": [
"低钾",
"低磷",
"优质蛋白"
],
"nutrition": {
"energy": 123,
"protein": 11.0,
"fat": 8.5,
"carb": 0.6,
"sodium": 434,
"potassium": 233,
"phosphorus": 143,
"calcium": 27,
"iron": 0.8,
"water": 57.6
}
},
{
"id": 129,
"name": "赤小豆米饭配蒸香芋排骨",
"region": "华南",
"season": "夏",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"大米",
"60g"
],
[
"赤小豆",
"15g"
],
[
"猪小排",
"50g"
],
[
"芋头",
"50g"
],
[
"植物油",
"5g"
],
[
"盐",
"1g"
]
],
"steps": [
"赤小豆提前泡2小时，与大米同煮",
"排骨飞水，芋头去皮切块",
"排骨和芋头上锅蒸20分钟",
"少盐调味"
],
"time": "40分钟",
"difficulty": "简单",
"substitutes": "排骨可用鸡腿替代",
"notes": "赤小豆为食药物质，利水消肿；芋头可部分替代主食；CKD 3-5期控总蛋白钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "指南附录3（华南地区，第60页）",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "通用",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 512,
"protein": 16.4,
"fat": 20.5,
"carb": 65.3,
"sodium": 439,
"potassium": 494,
"phosphorus": 201,
"calcium": 40,
"iron": 2.8,
"water": 76.1
}
},
{
"id": 130,
"name": "扁豆山药粥（食养方）",
"region": "华南",
"season": "春",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"鲜山药",
"30g"
],
[
"大米",
"30g"
],
[
"白扁豆",
"15g"
],
[
"清水",
"400ml"
]
],
"steps": [
"白扁豆提前泡发",
"山药去皮切丁，大米淘洗",
"加水煮沸转小火",
"熬30分钟至软稠，不加盐不加糖"
],
"time": "35分钟",
"difficulty": "简单",
"substitutes": "白扁豆可用莲子替代",
"notes": "水肿患者：粥水计入每日水量；山药、白扁豆补脾利湿；控制总量",
"source": "指南附录4（食养方，第63页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "通用",
"condition": "合并水肿",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"lowP",
"lowNa"
],
"tags": [
"低钾",
"低磷",
"低钠"
],
"nutrition": {
"energy": 172,
"protein": 5.8,
"fat": 0.4,
"carb": 36.2,
"sodium": 6,
"potassium": 184,
"phosphorus": 87,
"calcium": 15,
"iron": 0.9,
"water": 431.1
}
},
{
"id": 131,
"name": "清蒸鲈鱼（低磷版）",
"region": "通用",
"season": "四季",
"meal": "午餐",
"stages": [
"CKD 3-5期非透析"
],
"ingredients": [
[
"鲈鱼",
"120g（飞水）"
],
[
"姜",
"5g"
],
[
"葱",
"5g"
],
[
"蒸鱼豉油",
"4g（稀释用）"
]
],
"steps": [
"鲈鱼处理后先飞水1分钟弃汤（减少磷）",
"铺姜葱，水开后大火蒸8分钟",
"去姜丝撒葱花",
"豉油用3倍水稀释后少量淋上"
],
"time": "18分钟",
"difficulty": "中等",
"substitutes": "鲈鱼可用草鱼替代（磷更低）",
"notes": "高磷患者：鱼必须飞水弃汤；豉油高钠需稀释少用；每日磷摄入≤800mg",
"source": "自编",
"ageGroup": "青中年（18-64岁）",
"genderNote": "通用",
"condition": "合并高磷血症",
"remark": "来自食养指南AI生成",
"flags": [
"lowK",
"goodProtein",
"ironRich"
],
"tags": [
"低钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 133,
"protein": 22.7,
"fat": 4.1,
"carb": 1.2,
"sodium": 404,
"potassium": 208,
"phosphorus": 214,
"calcium": 74,
"iron": 1.9,
"water": 105.3
}
},
{
"id": 132,
"name": "蒸红薯",
"region": "通用",
"season": "四季",
"meal": "加餐",
"stages": [
"all"
],
"ingredients": [
[
"红薯",
"100g"
]
],
"steps": [
"红薯洗净",
"整个上锅蒸20分钟至熟",
"不加糖不加盐直接食用"
],
"time": "20分钟",
"difficulty": "简单",
"substitutes": "红薯可用山药替代",
"notes": "糖尿病患者：红薯升糖指数中等，控制在100g以内；高钾患者慎用；红薯可替代部分主食",
"source": "自编",
"ageGroup": "老年（65岁以上）",
"genderNote": "女",
"condition": "合并糖尿病",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 105,
"protein": 1.1,
"fat": 0.2,
"carb": 24.7,
"sodium": 28,
"potassium": 337,
"phosphorus": 39,
"calcium": 23,
"iron": 0.5,
"water": 73.0
}
},
{
"id": 133,
"name": "黑木耳草鱼片（补铁版）",
"region": "通用",
"season": "四季",
"meal": "午餐",
"stages": [
"腹膜透析",
"血液透析"
],
"ingredients": [
[
"草鱼",
"100g"
],
[
"木耳（干）",
"10g"
],
[
"玉兰片",
"50g"
],
[
"植物油",
"10g"
],
[
"盐",
"1.5g"
]
],
"steps": [
"木耳泡发，草鱼切片加少许淀粉",
"玉兰片飞水",
"热锅下油炒木耳玉兰片",
"加鱼片快炒至熟，少盐"
],
"time": "20分钟",
"difficulty": "中等",
"substitutes": "草鱼可用猪里脊替代（每周1-2次红肉）",
"notes": "贫血患者适当增加进食次数补充血红素铁；透析男性蛋白质1.0-1.2g/kg；木耳低磷钾含量偏高，血钾偏高者建议限量或遵医嘱。",
"source": "自编",
"ageGroup": "青中年（18-64岁）",
"genderNote": "男",
"condition": "合并贫血",
"remark": "来自食养指南AI生成",
"flags": [
"highK",
"goodProtein",
"ironRich"
],
"tags": [
"慎用：高钾",
"优质蛋白",
"含铁"
],
"nutrition": {
"energy": 235,
"protein": 18.4,
"fat": 15.4,
"carb": 5.6,
"sodium": 650,
"potassium": 413,
"phosphorus": 242,
"calcium": 59,
"iron": 10.8,
"water": 125.5
}
},
{
"id": 134,
"name": "桂圆红枣粥（食养方）",
"region": "通用",
"season": "冬",
"meal": "午餐",
"stages": [
"CKD 1-2期"
],
"ingredients": [
[
"大米",
"50g"
],
[
"龙眼肉",
"12g"
],
[
"大枣",
"12g"
],
[
"莲子肉",
"12g"
],
[
"清水",
"500ml"
]
],
"steps": [
"龙眼肉、大枣去核、莲子洗净备用",
"大米淘洗",
"所有材料加水大火煮沸",
"转小火熬30分钟，不加盐不加糖"
],
"time": "40分钟",
"difficulty": "简单",
"substitutes": "龙眼肉可用枸杞替代",
"notes": "高血压患者不加盐糖；龙眼、大枣、莲子为食药物质，养血补虚；粥水计入水量",
"source": "指南附录4（食养方，第63页）",
"ageGroup": "老年（65岁以上）",
"genderNote": "通用",
"condition": "合并高血压",
"remark": "来自食养指南AI生成",
"flags": [
"lowP",
"lowNa"
],
"tags": [
"低磷",
"低钠"
],
"nutrition": {
"energy": 270,
"protein": 6.7,
"fat": 0.6,
"carb": 59.5,
"sodium": 7,
"potassium": 382,
"phosphorus": 139,
"calcium": 30,
"iron": 1.6,
"water": 518.0
}
}
];
