// 食材库：每100克可食部参考值（来源见 source；guide-table1.1=指南附录1表1.1，cfct-estimate=中国食物成分表常见口径估算）
const INGREDIENT_DB = [
 {
  "name": "鸡蛋",
  "per100g": {
   "energy": 142,
   "protein": 13.0,
   "fat": 8.8,
   "carb": 2.8,
   "sodium": 131.4,
   "potassium": 154,
   "phosphorus": 130,
   "calcium": 56,
   "iron": 2.0,
   "water": 75
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "中"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "鸡肉",
  "per100g": {
   "energy": 169,
   "protein": 20.3,
   "fat": 9.4,
   "carb": 0.9,
   "sodium": 62.8,
   "potassium": 249,
   "phosphorus": 166,
   "calcium": 9,
   "iron": 1.4,
   "water": 74
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "鸡胸肉",
  "per100g": {
   "energy": 146,
   "protein": 24.6,
   "fat": 5.0,
   "carb": 0.6,
   "sodium": 44.8,
   "potassium": 333,
   "phosphorus": 170,
   "calcium": 3,
   "iron": 0.6,
   "water": 74
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "鸡腿",
  "per100g": {
   "energy": 146,
   "protein": 20.2,
   "fat": 7.2,
   "carb": 0.0,
   "sodium": 73.6,
   "potassium": 221,
   "phosphorus": 271,
   "calcium": 6,
   "iron": 1.4,
   "water": 72
  },
  "level": {
   "k": "中",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "瘦肉",
  "per100g": {
   "energy": 143,
   "protein": 20.3,
   "fat": 6.2,
   "carb": 1.5,
   "sodium": 57.5,
   "potassium": 305,
   "phosphorus": 189,
   "calcium": 6,
   "iron": 3.0,
   "water": 71
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "排骨",
  "per100g": {
   "energy": 330,
   "protein": 15.1,
   "fat": 30.0,
   "carb": 0.0,
   "sodium": 56.8,
   "potassium": 218,
   "phosphorus": 121,
   "calcium": 6,
   "iron": 1.4,
   "water": 54
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "牛肉",
  "per100g": {
   "energy": 127,
   "protein": 20.3,
   "fat": 4.2,
   "carb": 2.0,
   "sodium": 83.1,
   "potassium": 182,
   "phosphorus": 181,
   "calcium": 8,
   "iron": 2.8,
   "water": 73
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "羊肉",
  "per100g": {
   "energy": 141,
   "protein": 18.5,
   "fat": 7.0,
   "carb": 1.0,
   "sodium": 89.9,
   "potassium": 300,
   "phosphorus": 161,
   "calcium": 12,
   "iron": 2.3,
   "water": 73
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "鸭肉",
  "per100g": {
   "energy": 76,
   "protein": 15.0,
   "fat": 1.5,
   "carb": 0.5,
   "sodium": 60.2,
   "potassium": 126,
   "phosphorus": 86,
   "calcium": 12,
   "iron": 2.2,
   "water": 78
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "草鱼",
  "per100g": {
   "energy": 113,
   "protein": 16.6,
   "fat": 5.2,
   "carb": 0.0,
   "sodium": 46.0,
   "potassium": 312,
   "phosphorus": 203,
   "calcium": 27,
   "iron": 0.8,
   "water": 78
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "带鱼",
  "per100g": {
   "energy": 127,
   "protein": 17.7,
   "fat": 4.9,
   "carb": 3.1,
   "sodium": 150.1,
   "potassium": 280,
   "phosphorus": 191,
   "calcium": 25,
   "iron": 1.2,
   "water": 73
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "中"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "鳕鱼",
  "per100g": {
   "energy": 88,
   "protein": 20.4,
   "fat": 0.5,
   "carb": 0.5,
   "sodium": 130.3,
   "potassium": 321,
   "phosphorus": 232,
   "calcium": 20,
   "iron": 0.6,
   "water": 77
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "中"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "鲈鱼",
  "per100g": {
   "energy": 105,
   "protein": 18.6,
   "fat": 3.4,
   "carb": 0.0,
   "sodium": 144.0,
   "potassium": 205,
   "phosphorus": 242,
   "calcium": 55,
   "iron": 1.2,
   "water": 78
  },
  "level": {
   "k": "中",
   "p": "高",
   "na": "中"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "虾仁",
  "per100g": {
   "energy": 63,
   "protein": 13.4,
   "fat": 1.0,
   "carb": 0.0,
   "sodium": 119.0,
   "potassium": 238,
   "phosphorus": 189,
   "calcium": 83,
   "iron": 2.0,
   "water": 84
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "豆腐",
  "per100g": {
   "energy": 79,
   "protein": 9.2,
   "fat": 3.6,
   "carb": 2.4,
   "sodium": 7.3,
   "potassium": 106,
   "phosphorus": 112,
   "calcium": 138,
   "iron": 2.5,
   "water": 84
  },
  "level": {
   "k": "低",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "豆腐干",
  "per100g": {
   "energy": 115,
   "protein": 15.0,
   "fat": 3.6,
   "carb": 5.6,
   "sodium": 329.0,
   "potassium": 137,
   "phosphorus": 173,
   "calcium": 308,
   "iron": 4.9,
   "water": 74
  },
  "level": {
   "k": "低",
   "p": "中",
   "na": "中"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "牛奶",
  "per100g": {
   "energy": 65,
   "protein": 3.3,
   "fat": 3.6,
   "carb": 4.9,
   "sodium": 63.7,
   "potassium": 108,
   "phosphorus": 90,
   "calcium": 104,
   "iron": 0.3,
   "water": 87
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "大米",
  "per100g": {
   "energy": 349,
   "protein": 7.9,
   "fat": 0.6,
   "carb": 77.9,
   "sodium": 1.8,
   "potassium": 112,
   "phosphorus": 112,
   "calcium": 13,
   "iron": 0.8,
   "water": 13
  },
  "level": {
   "k": "低",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "小米",
  "per100g": {
   "energy": 364,
   "protein": 9.0,
   "fat": 3.1,
   "carb": 75.1,
   "sodium": 4.3,
   "potassium": 284,
   "phosphorus": 229,
   "calcium": 41,
   "iron": 5.1,
   "water": 12
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "燕麦",
  "per100g": {
   "energy": 410,
   "protein": 10.1,
   "fat": 6.7,
   "carb": 77.4,
   "sodium": 2.1,
   "potassium": 356,
   "phosphorus": 342,
   "calcium": 70,
   "iron": 4.0,
   "water": 9
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "面粉",
  "per100g": {
   "energy": 371,
   "protein": 15.7,
   "fat": 1.5,
   "carb": 73.6,
   "sodium": 3.1,
   "potassium": 190,
   "phosphorus": 167,
   "calcium": 31,
   "iron": 3.5,
   "water": 12
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "粉丝",
  "per100g": {
   "energy": 340,
   "protein": 0.8,
   "fat": 0.2,
   "carb": 83.7,
   "sodium": 9.3,
   "potassium": 18,
   "phosphorus": 16,
   "calcium": 10,
   "iron": 1.1,
   "water": 15
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "土豆",
  "per100g": {
   "energy": 83,
   "protein": 2.6,
   "fat": 0.2,
   "carb": 17.8,
   "sodium": 5.9,
   "potassium": 347,
   "phosphorus": 46,
   "calcium": 8,
   "iron": 0.8,
   "water": 79
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "茄子",
  "per100g": {
   "energy": 26,
   "protein": 1.1,
   "fat": 0.2,
   "carb": 4.9,
   "sodium": 5.4,
   "potassium": 142,
   "phosphorus": 23,
   "calcium": 24,
   "iron": 0.5,
   "water": 93
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "西葫芦",
  "per100g": {
   "energy": 20,
   "protein": 0.8,
   "fat": 0.2,
   "carb": 3.8,
   "sodium": 5.0,
   "potassium": 92,
   "phosphorus": 17,
   "calcium": 15,
   "iron": 0.3,
   "water": 95
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "西红柿",
  "per100g": {
   "energy": 21,
   "protein": 0.9,
   "fat": 0.2,
   "carb": 4.0,
   "sodium": 5.0,
   "potassium": 179,
   "phosphorus": 23,
   "calcium": 10,
   "iron": 0.4,
   "water": 95
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "丝瓜",
  "per100g": {
   "energy": 27,
   "protein": 1.3,
   "fat": 0.2,
   "carb": 4.9,
   "sodium": 3.7,
   "potassium": 121,
   "phosphorus": 33,
   "calcium": 14,
   "iron": 0.4,
   "water": 94
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "豆角",
  "per100g": {
   "energy": 39,
   "protein": 2.5,
   "fat": 0.2,
   "carb": 6.7,
   "sodium": 3.4,
   "potassium": 207,
   "phosphorus": 55,
   "calcium": 27,
   "iron": 0.8,
   "water": 90
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "西兰花",
  "per100g": {
   "energy": 34,
   "protein": 3.5,
   "fat": 0.6,
   "carb": 3.7,
   "sodium": 46.7,
   "potassium": 179,
   "phosphorus": 61,
   "calcium": 50,
   "iron": 1.0,
   "water": 91
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "油菜",
  "per100g": {
   "energy": 17,
   "protein": 1.3,
   "fat": 0.3,
   "carb": 2.3,
   "sodium": 73.7,
   "potassium": 175,
   "phosphorus": 23,
   "calcium": 108,
   "iron": 1.2,
   "water": 95
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "上海青",
  "per100g": {
   "energy": 17,
   "protein": 1.3,
   "fat": 0.3,
   "carb": 2.3,
   "sodium": 73.7,
   "potassium": 175,
   "phosphorus": 23,
   "calcium": 108,
   "iron": 1.2,
   "water": 95
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "大白菜",
  "per100g": {
   "energy": 20,
   "protein": 1.5,
   "fat": 0.1,
   "carb": 3.2,
   "sodium": 89.0,
   "potassium": 130,
   "phosphorus": 28,
   "calcium": 50,
   "iron": 0.6,
   "water": 95
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "圆白菜",
  "per100g": {
   "energy": 26,
   "protein": 1.5,
   "fat": 0.2,
   "carb": 4.6,
   "sodium": 60.0,
   "potassium": 196,
   "phosphorus": 30,
   "calcium": 32,
   "iron": 0.5,
   "water": 93
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "生菜",
  "per100g": {
   "energy": 16,
   "protein": 1.3,
   "fat": 0.3,
   "carb": 2.0,
   "sodium": 32.0,
   "potassium": 212,
   "phosphorus": 27,
   "calcium": 34,
   "iron": 0.9,
   "water": 95
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "芹菜",
  "per100g": {
   "energy": 25,
   "protein": 1.2,
   "fat": 0.2,
   "carb": 4.5,
   "sodium": 159.0,
   "potassium": 206,
   "phosphorus": 42,
   "calcium": 80,
   "iron": 1.2,
   "water": 94
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "中"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "莴笋",
  "per100g": {
   "energy": 16,
   "protein": 1.0,
   "fat": 0.1,
   "carb": 2.8,
   "sodium": 40.0,
   "potassium": 212,
   "phosphorus": 39,
   "calcium": 23,
   "iron": 0.9,
   "water": 95
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "芦笋",
  "per100g": {
   "energy": 23,
   "protein": 2.6,
   "fat": 0.1,
   "carb": 3.0,
   "sodium": 6.0,
   "potassium": 213,
   "phosphorus": 51,
   "calcium": 10,
   "iron": 1.4,
   "water": 93
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "秋葵",
  "per100g": {
   "energy": 37,
   "protein": 2.0,
   "fat": 0.1,
   "carb": 7.1,
   "sodium": 45.0,
   "potassium": 200,
   "phosphorus": 60,
   "calcium": 45,
   "iron": 0.6,
   "water": 90
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "佛手瓜",
  "per100g": {
   "energy": 24,
   "protein": 1.2,
   "fat": 0.1,
   "carb": 4.5,
   "sodium": 10.0,
   "potassium": 76,
   "phosphorus": 18,
   "calcium": 17,
   "iron": 0.1,
   "water": 93
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "红萝卜",
  "per100g": {
   "energy": 32,
   "protein": 1.0,
   "fat": 0.1,
   "carb": 6.8,
   "sodium": 65.0,
   "potassium": 230,
   "phosphorus": 31,
   "calcium": 45,
   "iron": 0.7,
   "water": 92
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "胡萝卜",
  "per100g": {
   "energy": 41,
   "protein": 1.0,
   "fat": 0.2,
   "carb": 8.8,
   "sodium": 71.0,
   "potassium": 190,
   "phosphorus": 29,
   "calcium": 32,
   "iron": 1.0,
   "water": 90
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "白萝卜",
  "per100g": {
   "energy": 24,
   "protein": 0.9,
   "fat": 0.1,
   "carb": 5.0,
   "sodium": 62.0,
   "potassium": 173,
   "phosphorus": 26,
   "calcium": 36,
   "iron": 0.5,
   "water": 94
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "南瓜",
  "per100g": {
   "energy": 25,
   "protein": 0.7,
   "fat": 0.1,
   "carb": 5.3,
   "sodium": 0.8,
   "potassium": 145,
   "phosphorus": 24,
   "calcium": 16,
   "iron": 0.4,
   "water": 93
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "红薯",
  "per100g": {
   "energy": 105,
   "protein": 1.1,
   "fat": 0.2,
   "carb": 24.7,
   "sodium": 28.0,
   "potassium": 337,
   "phosphorus": 39,
   "calcium": 23,
   "iron": 0.5,
   "water": 73
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "芋头",
  "per100g": {
   "energy": 83,
   "protein": 2.2,
   "fat": 0.2,
   "carb": 18.1,
   "sodium": 33.0,
   "potassium": 378,
   "phosphorus": 55,
   "calcium": 36,
   "iron": 1.0,
   "water": 79
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "莲藕",
  "per100g": {
   "energy": 75,
   "protein": 1.9,
   "fat": 0.2,
   "carb": 16.4,
   "sodium": 45.0,
   "potassium": 243,
   "phosphorus": 58,
   "calcium": 39,
   "iron": 1.4,
   "water": 80
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "山药",
  "per100g": {
   "energy": 59,
   "protein": 1.9,
   "fat": 0.2,
   "carb": 12.4,
   "sodium": 18.6,
   "potassium": 213,
   "phosphorus": 34,
   "calcium": 16,
   "iron": 0.3,
   "water": 84
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "苦瓜",
  "per100g": {
   "energy": 24,
   "protein": 1.0,
   "fat": 0.1,
   "carb": 4.9,
   "sodium": 2.5,
   "potassium": 256,
   "phosphorus": 36,
   "calcium": 14,
   "iron": 0.7,
   "water": 93
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "黄瓜",
  "per100g": {
   "energy": 17,
   "protein": 0.8,
   "fat": 0.2,
   "carb": 2.9,
   "sodium": 4.9,
   "potassium": 97,
   "phosphorus": 24,
   "calcium": 24,
   "iron": 0.5,
   "water": 95
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "冬瓜",
  "per100g": {
   "energy": 14,
   "protein": 0.4,
   "fat": 0.2,
   "carb": 2.6,
   "sodium": 1.8,
   "potassium": 57,
   "phosphorus": 11,
   "calcium": 19,
   "iron": 0.2,
   "water": 96
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "玉米",
  "per100g": {
   "energy": 118,
   "protein": 4.0,
   "fat": 1.2,
   "carb": 22.8,
   "sodium": 1.1,
   "potassium": 238,
   "phosphorus": 117,
   "calcium": 10,
   "iron": 1.0,
   "water": 71
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "洋葱",
  "per100g": {
   "energy": 42,
   "protein": 1.1,
   "fat": 0.2,
   "carb": 9.0,
   "sodium": 4.4,
   "potassium": 147,
   "phosphorus": 37,
   "calcium": 24,
   "iron": 0.6,
   "water": 89
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "青椒",
  "per100g": {
   "energy": 27,
   "protein": 1.0,
   "fat": 0.2,
   "carb": 5.4,
   "sodium": 3.3,
   "potassium": 142,
   "phosphorus": 20,
   "calcium": 14,
   "iron": 0.8,
   "water": 93
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "蒜",
  "per100g": {
   "energy": 130,
   "protein": 4.5,
   "fat": 0.2,
   "carb": 27.6,
   "sodium": 19.6,
   "potassium": 302,
   "phosphorus": 117,
   "calcium": 10,
   "iron": 1.2,
   "water": 66
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "姜",
  "per100g": {
   "energy": 52,
   "protein": 1.3,
   "fat": 0.6,
   "carb": 10.3,
   "sodium": 14.9,
   "potassium": 295,
   "phosphorus": 25,
   "calcium": 27,
   "iron": 1.4,
   "water": 87
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "小葱",
  "per100g": {
   "energy": 36,
   "protein": 1.6,
   "fat": 0.4,
   "carb": 6.5,
   "sodium": 4.8,
   "potassium": 143,
   "phosphorus": 26,
   "calcium": 72,
   "iron": 1.3,
   "water": 91
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "香菜",
  "per100g": {
   "energy": 36,
   "protein": 1.8,
   "fat": 0.4,
   "carb": 6.2,
   "sodium": 48.5,
   "potassium": 250,
   "phosphorus": 49,
   "calcium": 101,
   "iron": 2.9,
   "water": 90
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "韭菜",
  "per100g": {
   "energy": 32,
   "protein": 2.4,
   "fat": 0.4,
   "carb": 4.6,
   "sodium": 8.1,
   "potassium": 247,
   "phosphorus": 45,
   "calcium": 42,
   "iron": 1.6,
   "water": 92
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "花菜",
  "per100g": {
   "energy": 29,
   "protein": 2.1,
   "fat": 0.2,
   "carb": 4.6,
   "sodium": 31.6,
   "potassium": 200,
   "phosphorus": 47,
   "calcium": 23,
   "iron": 1.1,
   "water": 92
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "荷兰豆",
  "per100g": {
   "energy": 32,
   "protein": 2.5,
   "fat": 0.3,
   "carb": 4.9,
   "sodium": 8.8,
   "potassium": 116,
   "phosphorus": 39,
   "calcium": 51,
   "iron": 0.9,
   "water": 91
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "金针菇",
  "per100g": {
   "energy": 37,
   "protein": 2.4,
   "fat": 0.4,
   "carb": 6.0,
   "sodium": 4.3,
   "potassium": 195,
   "phosphorus": 97,
   "calcium": 5,
   "iron": 1.2,
   "water": 90
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "平菇",
  "per100g": {
   "energy": 29,
   "protein": 1.9,
   "fat": 0.3,
   "carb": 4.6,
   "sodium": 3.8,
   "potassium": 258,
   "phosphorus": 86,
   "calcium": 5,
   "iron": 1.0,
   "water": 92
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "香菇",
  "per100g": {
   "energy": 32,
   "protein": 2.2,
   "fat": 0.3,
   "carb": 5.2,
   "sodium": 1.4,
   "potassium": 20,
   "phosphorus": 53,
   "calcium": 2,
   "iron": 0.3,
   "water": 92
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "木耳",
  "per100g": {
   "energy": 32,
   "protein": 1.5,
   "fat": 0.2,
   "carb": 6.0,
   "sodium": 10.0,
   "potassium": 45,
   "phosphorus": 25,
   "calcium": 34,
   "iron": 5.5,
   "water": 92
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "海带",
  "per100g": {
   "energy": 13,
   "protein": 0.8,
   "fat": 0.1,
   "carb": 2.3,
   "sodium": 80.0,
   "potassium": 300,
   "phosphorus": 30,
   "calcium": 100,
   "iron": 2.0,
   "water": 92
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "紫菜",
  "per100g": {
   "energy": 293,
   "protein": 26.7,
   "fat": 1.1,
   "carb": 44.1,
   "sodium": 710.0,
   "potassium": 1796,
   "phosphorus": 350,
   "calcium": 264,
   "iron": 54.0,
   "water": 12
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "高"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "银耳",
  "per100g": {
   "energy": 322,
   "protein": 10.0,
   "fat": 1.4,
   "carb": 67.3,
   "sodium": 82.0,
   "potassium": 1588,
   "phosphorus": 369,
   "calcium": 36,
   "iron": 4.1,
   "water": 14
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "百合",
  "per100g": {
   "energy": 169,
   "protein": 3.2,
   "fat": 0.1,
   "carb": 38.8,
   "sodium": 8.0,
   "potassium": 344,
   "phosphorus": 61,
   "calcium": 11,
   "iron": 1.0,
   "water": 56
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "枸杞",
  "per100g": {
   "energy": 326,
   "protein": 13.9,
   "fat": 1.5,
   "carb": 64.1,
   "sodium": 250.0,
   "potassium": 434,
   "phosphorus": 110,
   "calcium": 60,
   "iron": 5.4,
   "water": 16
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "中"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "菠菜",
  "per100g": {
   "energy": 31,
   "protein": 2.6,
   "fat": 0.3,
   "carb": 4.5,
   "sodium": 85.0,
   "potassium": 311,
   "phosphorus": 47,
   "calcium": 66,
   "iron": 2.9,
   "water": 91
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "荞麦",
  "per100g": {
   "energy": 350,
   "protein": 9.3,
   "fat": 2.3,
   "carb": 73.0,
   "sodium": 4.7,
   "potassium": 401,
   "phosphorus": 297,
   "calcium": 47,
   "iron": 6.2,
   "water": 13
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "盐",
  "per100g": {
   "energy": 0,
   "protein": 0.0,
   "fat": 0.0,
   "carb": 0.0,
   "sodium": 39300.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 0,
   "iron": 0.0,
   "water": 0
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "高"
  },
  "source": "seasoning"
 },
 {
  "name": "玉米淀粉",
  "per100g": {
   "energy": 353,
   "protein": 1.2,
   "fat": 0.1,
   "carb": 86.9,
   "sodium": 6.3,
   "potassium": 8,
   "phosphorus": 25,
   "calcium": 18,
   "iron": 0.6,
   "water": 12
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "小麦淀粉",
  "per100g": {
   "energy": 348,
   "protein": 0.3,
   "fat": 0.1,
   "carb": 86.5,
   "sodium": 5.0,
   "potassium": 8,
   "phosphorus": 25,
   "calcium": 10,
   "iron": 0.5,
   "water": 12
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "木耳干",
  "per100g": {
   "energy": 205,
   "protein": 12.1,
   "fat": 1.5,
   "carb": 35.7,
   "sodium": 48.5,
   "potassium": 757,
   "phosphorus": 292,
   "calcium": 247,
   "iron": 97.0,
   "water": 15
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "南豆腐",
  "per100g": {
   "energy": 57,
   "protein": 6.2,
   "fat": 2.5,
   "carb": 2.4,
   "sodium": 6.4,
   "potassium": 120,
   "phosphorus": 84,
   "calcium": 116,
   "iron": 1.5,
   "water": 88
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "五花肉",
  "per100g": {
   "energy": 348,
   "protein": 7.7,
   "fat": 35.3,
   "carb": 0.0,
   "sodium": 57.5,
   "potassium": 218,
   "phosphorus": 121,
   "calcium": 6,
   "iron": 1.4,
   "water": 50
  },
  "level": {
   "k": "中",
   "p": "中",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "酸菜",
  "per100g": {
   "energy": 23,
   "protein": 1.1,
   "fat": 0.2,
   "carb": 4.2,
   "sodium": 650.0,
   "potassium": 130,
   "phosphorus": 30,
   "calcium": 50,
   "iron": 1.0,
   "water": 92
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "高"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "荠菜",
  "per100g": {
   "energy": 34,
   "protein": 2.9,
   "fat": 0.4,
   "carb": 4.7,
   "sodium": 31.6,
   "potassium": 280,
   "phosphorus": 81,
   "calcium": 294,
   "iron": 5.4,
   "water": 90
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "薏苡仁",
  "per100g": {
   "energy": 365,
   "protein": 12.8,
   "fat": 3.3,
   "carb": 71.1,
   "sodium": 3.6,
   "potassium": 238,
   "phosphorus": 217,
   "calcium": 42,
   "iron": 3.6,
   "water": 11
  },
  "level": {
   "k": "中",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "绿豆",
  "per100g": {
   "energy": 342,
   "protein": 21.6,
   "fat": 0.8,
   "carb": 62.0,
   "sodium": 3.2,
   "potassium": 787,
   "phosphorus": 337,
   "calcium": 81,
   "iron": 6.5,
   "water": 12
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "大枣",
  "per100g": {
   "energy": 129,
   "protein": 1.1,
   "fat": 0.3,
   "carb": 30.5,
   "sodium": 6.2,
   "potassium": 524,
   "phosphorus": 51,
   "calcium": 64,
   "iron": 2.3,
   "water": 67
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "黑米",
  "per100g": {
   "energy": 349,
   "protein": 9.4,
   "fat": 2.5,
   "carb": 72.2,
   "sodium": 7.1,
   "potassium": 256,
   "phosphorus": 356,
   "calcium": 12,
   "iron": 1.6,
   "water": 14
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "莲子",
  "per100g": {
   "energy": 356,
   "protein": 17.2,
   "fat": 2.0,
   "carb": 67.2,
   "sodium": 5.1,
   "potassium": 846,
   "phosphorus": 550,
   "calcium": 97,
   "iron": 3.6,
   "water": 10
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "龙眼肉",
  "per100g": {
   "energy": 316,
   "protein": 5.0,
   "fat": 0.2,
   "carb": 73.5,
   "sodium": 36.0,
   "potassium": 1348,
   "phosphorus": 87,
   "calcium": 39,
   "iron": 3.9,
   "water": 19
  },
  "level": {
   "k": "高",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "黄芪",
  "per100g": {
   "energy": 0,
   "protein": 0.0,
   "fat": 0.0,
   "carb": 0.0,
   "sodium": 0.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 0,
   "iron": 0.0,
   "water": 0
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "seasoning"
 },
 {
  "name": "赤小豆",
  "per100g": {
   "energy": 340,
   "protein": 20.2,
   "fat": 0.6,
   "carb": 63.4,
   "sodium": 2.2,
   "potassium": 860,
   "phosphorus": 305,
   "calcium": 74,
   "iron": 7.4,
   "water": 12
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "鲤鱼",
  "per100g": {
   "energy": 109,
   "protein": 17.6,
   "fat": 4.1,
   "carb": 0.5,
   "sodium": 53.7,
   "potassium": 334,
   "phosphorus": 204,
   "calcium": 50,
   "iron": 1.0,
   "water": 77
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "鲶鱼",
  "per100g": {
   "energy": 102,
   "protein": 17.3,
   "fat": 3.7,
   "carb": 0.0,
   "sodium": 49.6,
   "potassium": 351,
   "phosphorus": 195,
   "calcium": 42,
   "iron": 0.8,
   "water": 77
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "蛋清",
  "per100g": {
   "energy": 50,
   "protein": 11.3,
   "fat": 0.1,
   "carb": 1.0,
   "sodium": 79.3,
   "potassium": 132,
   "phosphorus": 18,
   "calcium": 8,
   "iron": 0.1,
   "water": 87
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "龙井茶",
  "per100g": {
   "energy": 310,
   "protein": 27.0,
   "fat": 2.0,
   "carb": 46.0,
   "sodium": 0.0,
   "potassium": 1660,
   "phosphorus": 190,
   "calcium": 0,
   "iron": 14.0,
   "water": 5
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "空心菜",
  "per100g": {
   "energy": 26,
   "protein": 2.2,
   "fat": 0.3,
   "carb": 3.6,
   "sodium": 94.3,
   "potassium": 243,
   "phosphorus": 38,
   "calcium": 99,
   "iron": 2.3,
   "water": 93
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "鳊鱼",
  "per100g": {
   "energy": 135,
   "protein": 18.3,
   "fat": 6.3,
   "carb": 1.2,
   "sodium": 41.0,
   "potassium": 290,
   "phosphorus": 220,
   "calcium": 26,
   "iron": 0.7,
   "water": 73
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "茼蒿",
  "per100g": {
   "energy": 26,
   "protein": 1.9,
   "fat": 0.3,
   "carb": 3.9,
   "sodium": 161.3,
   "potassium": 220,
   "phosphorus": 36,
   "calcium": 73,
   "iron": 2.5,
   "water": 93
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "中"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "豌豆苗",
  "per100g": {
   "energy": 42,
   "protein": 4.0,
   "fat": 0.8,
   "carb": 4.6,
   "sodium": 18.5,
   "potassium": 222,
   "phosphorus": 67,
   "calcium": 40,
   "iron": 4.2,
   "water": 89
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "鲫鱼",
  "per100g": {
   "energy": 108,
   "protein": 17.1,
   "fat": 2.7,
   "carb": 3.8,
   "sodium": 41.2,
   "potassium": 290,
   "phosphorus": 193,
   "calcium": 79,
   "iron": 1.3,
   "water": 76
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "乌鱼",
  "per100g": {
   "energy": 85,
   "protein": 18.5,
   "fat": 1.2,
   "carb": 0.0,
   "sodium": 48.8,
   "potassium": 313,
   "phosphorus": 232,
   "calcium": 43,
   "iron": 0.8,
   "water": 79
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "油麦菜",
  "per100g": {
   "energy": 18,
   "protein": 1.4,
   "fat": 0.4,
   "carb": 2.1,
   "sodium": 80.0,
   "potassium": 205,
   "phosphorus": 31,
   "calcium": 70,
   "iron": 1.2,
   "water": 95
  },
  "level": {
   "k": "中",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "紫苏",
  "per100g": {
   "energy": 52,
   "protein": 3.8,
   "fat": 1.3,
   "carb": 6.4,
   "sodium": 210.0,
   "potassium": 435,
   "phosphorus": 200,
   "calcium": 182,
   "iron": 5.7,
   "water": 85
  },
  "level": {
   "k": "高",
   "p": "中",
   "na": "中"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "白扁豆",
  "per100g": {
   "energy": 332,
   "protein": 19.3,
   "fat": 1.4,
   "carb": 60.5,
   "sodium": 0.8,
   "potassium": 578,
   "phosphorus": 290,
   "calcium": 45,
   "iron": 3.9,
   "water": 13
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "玉兰片",
  "per100g": {
   "energy": 22,
   "protein": 1.2,
   "fat": 0.1,
   "carb": 4.1,
   "sodium": 20.0,
   "potassium": 50,
   "phosphorus": 20,
   "calcium": 15,
   "iron": 0.5,
   "water": 92
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "cfct-estimate"
 },
 {
  "name": "食用油",
  "per100g": {
   "energy": 900,
   "protein": 0.0,
   "fat": 100.0,
   "carb": 0.0,
   "sodium": 0.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 0,
   "iron": 0.0,
   "water": 0
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "seasoning"
 },
 {
  "name": "香油",
  "per100g": {
   "energy": 900,
   "protein": 0.0,
   "fat": 100.0,
   "carb": 0.0,
   "sodium": 0.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 0,
   "iron": 0.0,
   "water": 0
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "seasoning"
 },
 {
  "name": "醋",
  "per100g": {
   "energy": 31,
   "protein": 2.1,
   "fat": 0.3,
   "carb": 4.9,
   "sodium": 80.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 17,
   "iron": 1.3,
   "water": 90
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "seasoning"
 },
 {
  "name": "生抽",
  "per100g": {
   "energy": 64,
   "protein": 5.6,
   "fat": 0.1,
   "carb": 10.1,
   "sodium": 5757.0,
   "potassium": 337,
   "phosphorus": 204,
   "calcium": 66,
   "iron": 8.6,
   "water": 70
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "高"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "蒸鱼豉油",
  "per100g": {
   "energy": 64,
   "protein": 5.6,
   "fat": 0.1,
   "carb": 10.1,
   "sodium": 5757.0,
   "potassium": 337,
   "phosphorus": 204,
   "calcium": 66,
   "iron": 8.6,
   "water": 70
  },
  "level": {
   "k": "高",
   "p": "高",
   "na": "高"
  },
  "source": "guide-table1.1"
 },
 {
  "name": "清水",
  "per100g": {
   "energy": 0,
   "protein": 0.0,
   "fat": 0.0,
   "carb": 0.0,
   "sodium": 0.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 0,
   "iron": 0.0,
   "water": 100
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "seasoning"
 },
 {
  "name": "温水",
  "per100g": {
   "energy": 0,
   "protein": 0.0,
   "fat": 0.0,
   "carb": 0.0,
   "sodium": 0.0,
   "potassium": 0,
   "phosphorus": 0,
   "calcium": 0,
   "iron": 0.0,
   "water": 100
  },
  "level": {
   "k": "低",
   "p": "低",
   "na": "低"
  },
  "source": "seasoning"
 }
];
