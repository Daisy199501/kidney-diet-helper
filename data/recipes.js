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
"notes": "少盐；蛋白质总量按分期和医嘱控制。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "土豆含钾较高，血钾偏高时不建议食用。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "汤易含钠和嘌呤，少量喝，肉和山药适量吃。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "瘦肉先焯水可减少部分磷；少盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "土豆含钾较高，血钾偏高时不建议食用。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "磷中等，按医嘱限量；不加盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "焯水可减少部分钾；不加盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "少盐，不勾芡。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "豆腐磷中等，按医嘱限量。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "汤不喝底，减少钠和嘌呤摄入。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "莲藕含钾较高，血钾偏高时不宜；汤不喝底。钾含量偏高，血钾偏高者建议限量或遵医嘱。磷含量偏高，血磷偏高者建议限量。",
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
"notes": "大火快炒保持口感；少盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "芋头含钾较高，血钾偏高时不宜；汤不喝底。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "焯水可减少部分钾和磷。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "莲藕焯水可减少部分钾。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "韭菜含钾中等，血钾偏高时控制份量。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "汤不喝底；牛肉磷中等，按医嘱限量。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "红薯含钾较高，血钾偏高时不宜；粥水计入每日水量。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "少盐，辣味根据耐受调整。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"energy": 125,
"protein": 3.9,
"fat": 0.3,
"carb": 26.7,
"sodium": 9,
"potassium": 520,
"phosphorus": 69,
"calcium": 12,
"iron": 1.2,
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
"notes": "芋头含钾较高，血钾偏高时不宜。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"notes": "生抽少量，避免过咸。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
"id": 92,
"name": "凉拌木耳",
"region": "华南",
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
"notes": "焯水可减少部分磷；少盐。钾含量偏高，血钾偏高者建议限量或遵医嘱。",
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
}
];
