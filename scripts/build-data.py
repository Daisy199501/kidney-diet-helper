# -*- coding: utf-8 -*-
"""
按《成人慢性肾脏病食养指南（2024年版）》校验并重建菜谱数据。
- 食材参考值：指南附录1 表1.1（来源 guide-table1.1）；其余为中国食物成分表常见口径估算（cfct-estimate）。
- 营养目标口径：指南附录5 表5.2。
- 每道菜谱的营养值按食材用量 × 每100克含量 + 调味估算重新计算。
"""
import json, re, math, io, csv

BASE = "C:/tmp/web/"
RECIPES_PATH = BASE + "recipes.json"
OUT_DIR = BASE + "data/"

# name: [energy, protein, fat, carb, sodium, potassium, phosphorus, calcium, iron, water, source]
# 能量按 4*蛋白+4*碳水+9*脂肪 计算
def kcal(p, f, c):
    return round(4*p + 9*f + 4*c)

FOOD = {
    "鸡蛋":      dict(protein=13.0, fat=8.8, carb=2.8, sodium=131.4, potassium=154, phosphorus=130, calcium=56, iron=2.0, water=75, source="guide-table1.1"),
    "鸡肉":      dict(protein=20.3, fat=9.4, carb=0.9, sodium=62.8, potassium=249, phosphorus=166, calcium=9,  iron=1.4, water=74, source="guide-table1.1"),
    "鸡胸肉":    dict(protein=24.6, fat=5.0, carb=0.6, sodium=44.8, potassium=333, phosphorus=170, calcium=3, iron=0.6, water=74, source="guide-table1.1"),
    "鸡腿":      dict(protein=20.2, fat=7.2, carb=0.0, sodium=73.6, potassium=221, phosphorus=271, calcium=6, iron=1.4, water=72, source="guide-table1.1"),
    "瘦肉":      dict(protein=20.3, fat=6.2, carb=1.5, sodium=57.5, potassium=305, phosphorus=189, calcium=6, iron=3.0, water=71, source="guide-table1.1"),
    "排骨":      dict(protein=15.1, fat=30.0, carb=0.0, sodium=56.8, potassium=218, phosphorus=121, calcium=6, iron=1.4, water=54, source="guide-table1.1"),
    "牛肉":      dict(protein=20.3, fat=4.2, carb=2.0, sodium=83.1, potassium=182, phosphorus=181, calcium=8, iron=2.8, water=73, source="guide-table1.1"),
    "羊肉":      dict(protein=18.5, fat=7.0, carb=1.0, sodium=89.9, potassium=300, phosphorus=161, calcium=12, iron=2.3, water=73, source="guide-table1.1"),
    "鸭肉":      dict(protein=15.0, fat=1.5, carb=0.5, sodium=60.2, potassium=126, phosphorus=86, calcium=12, iron=2.2, water=78, source="guide-table1.1"),
    "草鱼":      dict(protein=16.6, fat=5.2, carb=0.0, sodium=46.0, potassium=312, phosphorus=203, calcium=27, iron=0.8, water=78, source="guide-table1.1"),
    "带鱼":      dict(protein=17.7, fat=4.9, carb=3.1, sodium=150.1, potassium=280, phosphorus=191, calcium=25, iron=1.2, water=73, source="guide-table1.1"),
    "鳕鱼":      dict(protein=20.4, fat=0.5, carb=0.5, sodium=130.3, potassium=321, phosphorus=232, calcium=20, iron=0.6, water=77, source="guide-table1.1"),
    "鲈鱼":      dict(protein=18.6, fat=3.4, carb=0.0, sodium=144.0, potassium=205, phosphorus=242, calcium=55, iron=1.2, water=78, source="cfct-estimate"),
    "虾仁":      dict(protein=13.4, fat=1.0, carb=0.0, sodium=119.0, potassium=238, phosphorus=189, calcium=83, iron=2.0, water=84, source="guide-table1.1"),
    "豆腐":      dict(protein=9.2,  fat=3.6, carb=2.4, sodium=7.3,  potassium=106, phosphorus=112, calcium=138, iron=2.5, water=84, source="guide-table1.1"),
    "豆腐干":    dict(protein=15.0, fat=3.6, carb=5.6, sodium=329.0, potassium=137, phosphorus=173, calcium=308, iron=4.9, water=74, source="guide-table1.1"),
    "牛奶":      dict(protein=3.3,  fat=3.6, carb=4.9, sodium=63.7,  potassium=108, phosphorus=90,  calcium=104, iron=0.3, water=87, source="guide-table1.1"),
    "大米":      dict(protein=7.9,  fat=0.6, carb=77.9, sodium=1.8,  potassium=112, phosphorus=112, calcium=13, iron=0.8, water=13, source="guide-table1.1"),
    "小米":      dict(protein=9.0,  fat=3.1, carb=75.1, sodium=4.3,  potassium=284, phosphorus=229, calcium=41, iron=5.1, water=12, source="guide-table1.1"),
    "燕麦":      dict(protein=10.1, fat=6.7, carb=77.4, sodium=2.1,  potassium=356, phosphorus=342, calcium=70,  iron=4.0, water=9,  source="guide-table1.1"),
    "面粉":      dict(protein=15.7, fat=1.5, carb=73.6, sodium=3.1,  potassium=190, phosphorus=167, calcium=31, iron=3.5, water=12, source="guide-table1.1"),
    "粉丝":      dict(protein=0.8,  fat=0.2, carb=83.7, sodium=9.3,  potassium=18,  phosphorus=16,  calcium=10, iron=1.1, water=15, source="guide-table1.1"),
    "土豆":      dict(protein=2.6,  fat=0.2, carb=17.8, sodium=5.9,  potassium=347, phosphorus=46,  calcium=8,  iron=0.8, water=79, source="guide-table1.1"),
    "茄子":      dict(protein=1.1,  fat=0.2, carb=4.9,  sodium=5.4,  potassium=142, phosphorus=23,  calcium=24, iron=0.5, water=93, source="guide-table1.1"),
    "西葫芦":    dict(protein=0.8,  fat=0.2, carb=3.8,  sodium=5.0,  potassium=92,  phosphorus=17,  calcium=15, iron=0.3, water=95, source="guide-table1.1"),
    "西红柿":    dict(protein=0.9,  fat=0.2, carb=4.0,  sodium=5.0,  potassium=179, phosphorus=23,  calcium=10, iron=0.4, water=95, source="cfct-estimate"),
    "丝瓜":      dict(protein=1.3,  fat=0.2, carb=4.9,  sodium=3.7,  potassium=121, phosphorus=33,  calcium=14, iron=0.4, water=94, source="guide-table1.1"),
    "豆角":      dict(protein=2.5,  fat=0.2, carb=6.7,  sodium=3.4,  potassium=207, phosphorus=55,  calcium=27, iron=0.8, water=90, source="guide-table1.1"),
    "西兰花":    dict(protein=3.5,  fat=0.6, carb=3.7,  sodium=46.7, potassium=179, phosphorus=61,  calcium=50, iron=1.0, water=91, source="guide-table1.1"),
    "油菜":      dict(protein=1.3,  fat=0.3, carb=2.3,  sodium=73.7, potassium=175, phosphorus=23,  calcium=108, iron=1.2, water=95, source="guide-table1.1"),
    "上海青":    dict(protein=1.3,  fat=0.3, carb=2.3,  sodium=73.7, potassium=175, phosphorus=23,  calcium=108, iron=1.2, water=95, source="guide-table1.1"),
    "大白菜":    dict(protein=1.5,  fat=0.1, carb=3.2,  sodium=89.0, potassium=130, phosphorus=28,  calcium=50,  iron=0.6, water=95, source="cfct-estimate"),
    "圆白菜":    dict(protein=1.5,  fat=0.2, carb=4.6,  sodium=60.0, potassium=196, phosphorus=30,  calcium=32,  iron=0.5, water=93, source="cfct-estimate"),
    "生菜":      dict(protein=1.3,  fat=0.3, carb=2.0,  sodium=32.0, potassium=212, phosphorus=27,  calcium=34,  iron=0.9, water=95, source="cfct-estimate"),
    "芹菜":      dict(protein=1.2,  fat=0.2, carb=4.5,  sodium=159.0, potassium=206, phosphorus=42, calcium=80,  iron=1.2, water=94, source="cfct-estimate"),
    "莴笋":      dict(protein=1.0,  fat=0.1, carb=2.8,  sodium=40.0, potassium=212, phosphorus=39,  calcium=23,  iron=0.9, water=95, source="cfct-estimate"),
    "芦笋":      dict(protein=2.6,  fat=0.1, carb=3.0,  sodium=6.0,  potassium=213, phosphorus=51,  calcium=10,  iron=1.4, water=93, source="cfct-estimate"),
    "秋葵":      dict(protein=2.0,  fat=0.1, carb=7.1,  sodium=45.0, potassium=200, phosphorus=60,  calcium=45,  iron=0.6, water=90, source="cfct-estimate"),
    "佛手瓜":    dict(protein=1.2,  fat=0.1, carb=4.5,  sodium=10.0, potassium=76,  phosphorus=18,  calcium=17,  iron=0.1, water=93, source="cfct-estimate"),
    "红萝卜":    dict(protein=1.0,  fat=0.1, carb=6.8,  sodium=65.0, potassium=230, phosphorus=31,  calcium=45,  iron=0.7, water=92, source="cfct-estimate"),
    "胡萝卜":    dict(protein=1.0,  fat=0.2, carb=8.8,  sodium=71.0, potassium=190, phosphorus=29,  calcium=32,  iron=1.0, water=90, source="cfct-estimate"),
    "白萝卜":    dict(protein=0.9,  fat=0.1, carb=5.0,  sodium=62.0, potassium=173, phosphorus=26,  calcium=36,  iron=0.5, water=94, source="cfct-estimate"),
    "南瓜":      dict(protein=0.7,  fat=0.1, carb=5.3,  sodium=0.8,  potassium=145, phosphorus=24,  calcium=16,  iron=0.4, water=93, source="cfct-estimate"),
    "红薯":      dict(protein=1.1,  fat=0.2, carb=24.7, sodium=28.0, potassium=337, phosphorus=39,  calcium=23,  iron=0.5, water=73, source="cfct-estimate"),
    "芋头":      dict(protein=2.2,  fat=0.2, carb=18.1, sodium=33.0, potassium=378, phosphorus=55,  calcium=36,  iron=1.0, water=79, source="cfct-estimate"),
    "莲藕":      dict(protein=1.9,  fat=0.2, carb=16.4, sodium=45.0, potassium=243, phosphorus=58,  calcium=39,  iron=1.4, water=80, source="cfct-estimate"),
    "山药":      dict(protein=1.9,  fat=0.2, carb=12.4, sodium=18.6, potassium=213, phosphorus=34,  calcium=16,  iron=0.3, water=84, source="guide-table1.1"),
    "苦瓜":      dict(protein=1.0,  fat=0.1, carb=4.9,  sodium=2.5,  potassium=256, phosphorus=36,  calcium=14,  iron=0.7, water=93, source="cfct-estimate"),
    "黄瓜":      dict(protein=0.8,  fat=0.2, carb=2.9,  sodium=4.9,  potassium=97,  phosphorus=24,  calcium=24,  iron=0.5, water=95, source="cfct-estimate"),
    "冬瓜":      dict(protein=0.4,  fat=0.2, carb=2.6,  sodium=1.8,  potassium=57,  phosphorus=11,  calcium=19,  iron=0.2, water=96, source="cfct-estimate"),
    "玉米":      dict(protein=4.0,  fat=1.2, carb=22.8, sodium=1.1,  potassium=238, phosphorus=117, calcium=10,  iron=1.0, water=71, source="cfct-estimate"),
    "洋葱":      dict(protein=1.1,  fat=0.2, carb=9.0,  sodium=4.4,  potassium=147, phosphorus=37,  calcium=24,  iron=0.6, water=89, source="cfct-estimate"),
    "青椒":      dict(protein=1.0,  fat=0.2, carb=5.4,  sodium=3.3,  potassium=142, phosphorus=20,  calcium=14,  iron=0.8, water=93, source="cfct-estimate"),
    "蒜":        dict(protein=4.5,  fat=0.2, carb=27.6, sodium=19.6, potassium=302, phosphorus=117, calcium=10,  iron=1.2, water=66, source="cfct-estimate"),
    "姜":        dict(protein=1.3,  fat=0.6, carb=10.3, sodium=14.9, potassium=295, phosphorus=25,  calcium=27,  iron=1.4, water=87, source="cfct-estimate"),
    "小葱":      dict(protein=1.6,  fat=0.4, carb=6.5,  sodium=4.8,  potassium=143, phosphorus=26,  calcium=72,  iron=1.3, water=91, source="cfct-estimate"),
    "香菜":      dict(protein=1.8,  fat=0.4, carb=6.2,  sodium=48.5, potassium=250, phosphorus=49,  calcium=101, iron=2.9, water=90, source="cfct-estimate"),
    "韭菜":      dict(protein=2.4,  fat=0.4, carb=4.6,  sodium=8.1,  potassium=247, phosphorus=45,  calcium=42,  iron=1.6, water=92, source="cfct-estimate"),
    "花菜":      dict(protein=2.1,  fat=0.2, carb=4.6,  sodium=31.6, potassium=200, phosphorus=47,  calcium=23,  iron=1.1, water=92, source="cfct-estimate"),
    "荷兰豆":    dict(protein=2.5,  fat=0.3, carb=4.9,  sodium=8.8,  potassium=116, phosphorus=39,  calcium=51,  iron=0.9, water=91, source="cfct-estimate"),
    "金针菇":    dict(protein=2.4,  fat=0.4, carb=6.0,  sodium=4.3,  potassium=195, phosphorus=97,  calcium=5,   iron=1.2, water=90, source="cfct-estimate"),
    "平菇":      dict(protein=1.9,  fat=0.3, carb=4.6,  sodium=3.8,  potassium=258, phosphorus=86,  calcium=5,   iron=1.0, water=92, source="cfct-estimate"),
    "香菇":      dict(protein=2.2,  fat=0.3, carb=5.2,  sodium=1.4,  potassium=20,  phosphorus=53,  calcium=2,   iron=0.3, water=92, source="guide-table1.1"),
    "木耳":      dict(protein=1.5,  fat=0.2, carb=6.0,  sodium=10.0, potassium=45,  phosphorus=25,  calcium=34,  iron=5.5, water=92, source="cfct-estimate"),
    "海带":      dict(protein=0.8,  fat=0.1, carb=2.3,  sodium=80.0, potassium=300, phosphorus=30,  calcium=100, iron=2.0, water=92, source="cfct-estimate"),
    "紫菜":      dict(protein=26.7, fat=1.1, carb=44.1, sodium=710.0, potassium=1796, phosphorus=350, calcium=264, iron=54.0, water=12, source="cfct-estimate"),
    "银耳":      dict(protein=10.0, fat=1.4, carb=67.3, sodium=82.0, potassium=1588, phosphorus=369, calcium=36,  iron=4.1, water=14, source="cfct-estimate"),
    "百合":      dict(protein=3.2,  fat=0.1, carb=38.8, sodium=8.0,  potassium=344, phosphorus=61,  calcium=11,  iron=1.0, water=56, source="cfct-estimate"),
    "枸杞":      dict(protein=13.9, fat=1.5, carb=64.1, sodium=250.0, potassium=434, phosphorus=110, calcium=60,  iron=5.4, water=16, source="cfct-estimate"),
    "菠菜":      dict(protein=2.6,  fat=0.3, carb=4.5,  sodium=85.0, potassium=311, phosphorus=47,  calcium=66,  iron=2.9, water=91, source="cfct-estimate"),
    "荞麦":      dict(protein=9.3,  fat=2.3, carb=73.0, sodium=4.7,  potassium=401, phosphorus=297, calcium=47,  iron=6.2, water=13, source="cfct-estimate"),
    # 2026-08-13 新增（用户整理菜谱引入）
    "盐":        dict(protein=0.0,  fat=0.0, carb=0.0,  sodium=39300.0, potassium=0, phosphorus=0, calcium=0, iron=0.0, water=0, source="seasoning"),
    "玉米淀粉":  dict(protein=1.2,  fat=0.1, carb=86.9, sodium=6.3,  potassium=8,   phosphorus=25,  calcium=18, iron=0.6, water=12, source="guide-table1.1"),
    "小麦淀粉":  dict(protein=0.3,  fat=0.1, carb=86.5, sodium=5.0,  potassium=8,   phosphorus=25,  calcium=10, iron=0.5, water=12, source="cfct-estimate"),
    "木耳干":    dict(protein=12.1, fat=1.5, carb=35.7, sodium=48.5, potassium=757, phosphorus=292, calcium=247, iron=97.0, water=15, source="guide-table1.1"),
    "南豆腐":    dict(protein=6.2,  fat=2.5, carb=2.4,  sodium=6.4,  potassium=120, phosphorus=84,  calcium=116, iron=1.5, water=88, source="cfct-estimate"),
    "五花肉":    dict(protein=7.7,  fat=35.3, carb=0.0, sodium=57.5, potassium=218, phosphorus=121, calcium=6,  iron=1.4, water=50, source="cfct-estimate"),
    "酸菜":      dict(protein=1.1,  fat=0.2, carb=4.2,  sodium=650.0, potassium=130, phosphorus=30,  calcium=50, iron=1.0, water=92, source="cfct-estimate"),
    "荠菜":      dict(protein=2.9,  fat=0.4, carb=4.7,  sodium=31.6, potassium=280, phosphorus=81,  calcium=294, iron=5.4, water=90, source="cfct-estimate"),
    "薏苡仁":    dict(protein=12.8, fat=3.3, carb=71.1, sodium=3.6,  potassium=238, phosphorus=217, calcium=42, iron=3.6, water=11, source="cfct-estimate"),
    "绿豆":      dict(protein=21.6, fat=0.8, carb=62.0, sodium=3.2,  potassium=787, phosphorus=337, calcium=81, iron=6.5, water=12, source="guide-table1.1"),
    "大枣":      dict(protein=1.1,  fat=0.3, carb=30.5, sodium=6.2,  potassium=524, phosphorus=51,  calcium=64, iron=2.3, water=67, source="cfct-estimate"),
    "黑米":      dict(protein=9.4,  fat=2.5, carb=72.2, sodium=7.1,  potassium=256, phosphorus=356, calcium=12, iron=1.6, water=14, source="cfct-estimate"),
    "莲子":      dict(protein=17.2, fat=2.0, carb=67.2, sodium=5.1,  potassium=846, phosphorus=550, calcium=97, iron=3.6, water=10, source="cfct-estimate"),
    "龙眼肉":    dict(protein=5.0,  fat=0.2, carb=73.5, sodium=36.0, potassium=1348, phosphorus=87, calcium=39, iron=3.9, water=19, source="cfct-estimate"),
    "黄芪":      dict(protein=0.0,  fat=0.0, carb=0.0,  sodium=0.0,  potassium=0,   phosphorus=0,    calcium=0, iron=0.0, water=0, source="seasoning"),
    "赤小豆":    dict(protein=20.2, fat=0.6, carb=63.4, sodium=2.2,  potassium=860, phosphorus=305, calcium=74, iron=7.4, water=12, source="cfct-estimate"),
    "鲤鱼":      dict(protein=17.6, fat=4.1, carb=0.5,  sodium=53.7, potassium=334, phosphorus=204, calcium=50, iron=1.0, water=77, source="cfct-estimate"),
    "鲶鱼":      dict(protein=17.3, fat=3.7, carb=0.0,  sodium=49.6, potassium=351, phosphorus=195, calcium=42, iron=0.8, water=77, source="cfct-estimate"),
    "蛋清":      dict(protein=11.3, fat=0.1, carb=1.0,  sodium=79.3, potassium=132, phosphorus=18,  calcium=8,  iron=0.1, water=87, source="guide-table1.1"),
    "龙井茶":    dict(protein=27.0, fat=2.0, carb=46.0, sodium=0.0,  potassium=1660, phosphorus=190, calcium=0, iron=14.0, water=5, source="cfct-estimate"),
    "空心菜":    dict(protein=2.2,  fat=0.3, carb=3.6,  sodium=94.3, potassium=243, phosphorus=38,  calcium=99, iron=2.3, water=93, source="cfct-estimate"),
    "鳊鱼":      dict(protein=18.3, fat=6.3, carb=1.2,  sodium=41.0, potassium=290, phosphorus=220, calcium=26, iron=0.7, water=73, source="cfct-estimate"),
    "茼蒿":      dict(protein=1.9,  fat=0.3, carb=3.9,  sodium=161.3, potassium=220, phosphorus=36, calcium=73, iron=2.5, water=93, source="cfct-estimate"),
    "豌豆苗":    dict(protein=4.0,  fat=0.8, carb=4.6,  sodium=18.5, potassium=222, phosphorus=67,  calcium=40, iron=4.2, water=89, source="cfct-estimate"),
    "鲫鱼":      dict(protein=17.1, fat=2.7, carb=3.8,  sodium=41.2, potassium=290, phosphorus=193, calcium=79, iron=1.3, water=76, source="cfct-estimate"),
    "乌鱼":      dict(protein=18.5, fat=1.2, carb=0.0,  sodium=48.8, potassium=313, phosphorus=232, calcium=43, iron=0.8, water=79, source="guide-table1.1"),
    "油麦菜":    dict(protein=1.4,  fat=0.4, carb=2.1,  sodium=80.0, potassium=205, phosphorus=31,  calcium=70, iron=1.2, water=95, source="cfct-estimate"),
    "紫苏":      dict(protein=3.8,  fat=1.3, carb=6.4,  sodium=210.0, potassium=435, phosphorus=200, calcium=182, iron=5.7, water=85, source="cfct-estimate"),
    "白扁豆":    dict(protein=19.3, fat=1.4, carb=60.5, sodium=0.8,  potassium=578, phosphorus=290, calcium=45, iron=3.9, water=13, source="cfct-estimate"),
    "玉兰片":    dict(protein=1.2,  fat=0.1, carb=4.1,  sodium=20.0, potassium=50,  phosphorus=20,  calcium=15, iron=0.5, water=92, source="cfct-estimate"),
    "食用油":    dict(protein=0.0,  fat=100.0, carb=0.0, sodium=0.0,  potassium=0,   phosphorus=0,    calcium=0,   iron=0.0, water=0,  source="seasoning"),
    "香油":      dict(protein=0.0,  fat=100.0, carb=0.0, sodium=0.0,  potassium=0,   phosphorus=0,    calcium=0,   iron=0.0, water=0,  source="seasoning"),
    "醋":        dict(protein=2.1,  fat=0.3, carb=4.9,  sodium=80.0,  potassium=0,   phosphorus=0,    calcium=17,  iron=1.3, water=90, source="seasoning"),
    "生抽":      dict(protein=5.6,  fat=0.1, carb=10.1, sodium=5757.0, potassium=337, phosphorus=204, calcium=66,  iron=8.6, water=70, source="guide-table1.1"),
    "蒸鱼豉油":  dict(protein=5.6,  fat=0.1, carb=10.1, sodium=5757.0, potassium=337, phosphorus=204, calcium=66,  iron=8.6, water=70, source="guide-table1.1"),
    "清水":      dict(protein=0.0,  fat=0.0, carb=0.0,  sodium=0.0,   potassium=0,   phosphorus=0,    calcium=0,   iron=0.0, water=100, source="seasoning"),
    "温水":      dict(protein=0.0,  fat=0.0, carb=0.0,  sodium=0.0,   potassium=0,   phosphorus=0,    calcium=0,   iron=0.0, water=100, source="seasoning"),
}

ALIAS = {
    "鲜虾仁": "虾仁",
    "鸡腿肉": "鸡腿",
    "北豆腐": "豆腐",
    "葱":     "小葱",
    "鲜山药": "山药",
    "鲜百合": "百合",
    "鲜紫苏": "紫苏",
    "柿子椒": "青椒",
    "猪五花肉": "五花肉",
    "粉条":   "粉丝",
    "植物油": "食用油",
    "荞麦面粉": "荞麦",
    "猪里脊肉": "瘦肉",
    "莴苣":   "莴笋",
    "青笋":   "莴笋",
    "大蒜":   "蒜",
    "猪小排": "排骨",
    "木耳（干）": "木耳干",
    "木耳（水发）": "木耳",
    "淀粉":   "玉米淀粉",
    "牦牛腱子肉": "牛肉",
    "猪排骨": "排骨",
    "猪瘦肉": "瘦肉",
    "红薯粉条": "粉丝",
    "莲子肉": "莲子",
    "虾":     "虾仁",
    "鸡块":   "鸡肉",
}

def norm_name(n):
    return ALIAS.get(n, n)

def parse_amount(name, amount):
    """返回 (克数, 是否液体水)"""
    if name in ("清水", "温水"):
        m = re.search(r"(\d+)", amount)
        return (float(m.group(1)) if m else 0.0), True
    m = re.search(r"约?(\d+(?:\.\d+)?)g", amount)
    if m:
        return float(m.group(1)), False
    m = re.search(r"(\d+)枚", amount)
    if m:
        return float(m.group(1)) * 50.0, False
    m = re.search(r"(\d+)个", amount)
    if m:
        return float(m.group(1)) * 100.0, False
    # 兜底：数字默认按克（如“盐1”“鲤鱼40g（飞水）”）
    m = re.search(r"(\d+(?:\.\d+)?)", amount)
    if m:
        return float(m.group(1)), False
    return 0.0, False

def seasoning_sodium(name, steps, has_soy, has_salt):
    if has_salt:
        return 0  # 食材清单中已明确写盐（如“盐1g”），按含量计算，不再估算
    text = "".join(steps)
    if "不加盐" in text:
        return 0
    if "少盐" in text:
        return 200
    return 0

def level_k(v):
    return "低" if v < 150 else ("高" if v > 250 else "中")
def level_p(v):
    return "低" if v < 100 else ("高" if v > 200 else "中")
def level_na(v):
    return "低" if v < 120 else ("高" if v > 400 else "中")

def compute_recipe(r):
    totals = dict(energy=0.0, protein=0.0, fat=0.0, carb=0.0, sodium=0.0,
                  potassium=0.0, phosphorus=0.0, calcium=0.0, iron=0.0, water=0.0)
    has_soy = False
    has_salt = False
    main_ing = []
    for raw_name, amount in r["ingredients"]:
        name = norm_name(raw_name)
        if name not in FOOD:
            raise KeyError("缺少食材: %s (菜谱 %s)" % (raw_name, r["name"]))
        grams, is_water = parse_amount(raw_name, amount)
        if grams <= 0:
            continue
        f = FOOD[name]
        if is_water:
            totals["water"] += grams
            continue
        # 指南附录1：烹调前先飞水可减少部分钾、磷；酸菜漂洗去盐
        feishui = "飞水" in amount
        quyan = "去盐" in amount
        for key in ("protein", "fat", "carb", "sodium", "potassium", "phosphorus", "calcium", "iron"):
            factor = 1.0
            if feishui and key in ("potassium", "phosphorus"):
                factor = 0.7
            if quyan and key == "sodium":
                factor = 0.4
            totals[key] += f[key] * grams / 100.0 * factor
        totals["water"] += f["water"] * grams / 100.0
        if f["source"] != "seasoning" and f["water"] > 30:
            main_ing.append(name)
        if name in ("生抽", "蒸鱼豉油"):
            has_soy = True
        if name == "盐":
            has_salt = True
    totals["sodium"] += seasoning_sodium(r["name"], r["steps"], has_soy, has_salt)
    totals["energy"] = round(4*totals["protein"] + 9*totals["fat"] + 4*totals["carb"])
    out = {k: round(v, 1) if k in ("protein", "fat", "carb", "iron") else round(v) for k, v in totals.items()}
    out["energy"] = totals["energy"]
    if r.get("nutrition") and r["nutrition"].get("water") is not None:
        out["water"] = r["nutrition"]["water"]  # 水量保留原口径（含食材含水与烹饪加水估算）
    else:
        out["water"] = round(totals["water"], 1)
    return out

def derive_flags(n, old_flags, name):
    flags = []
    if n["potassium"] <= 280: flags.append("lowK")
    if n["potassium"] >= 400 or ("highK" in old_flags and n["potassium"] >= 350): flags.append("highK")
    if n["phosphorus"] <= 180: flags.append("lowP")
    if n["phosphorus"] >= 300: flags.append("highP")
    if n["sodium"] <= 350: flags.append("lowNa")
    if n["protein"] >= 9: flags.append("goodProtein")
    if n["iron"] >= 1.8: flags.append("ironRich")
    if "嘌呤" in name: flags.append("lowPurine")
    return flags

def tags_from_flags(flags):
    m = {
        "lowK": "低钾", "highK": "慎用：高钾",
        "lowP": "低磷", "highP": "慎用：高磷",
        "lowNa": "低钠", "goodProtein": "优质蛋白",
        "ironRich": "含铁", "lowPurine": "低嘌呤",
    }
    return [m[f] for f in flags if f in m]

recipes = json.load(open(RECIPES_PATH, encoding="utf-8"))
rows = []
missing = set()
for r in recipes:
    try:
        new_n = compute_recipe(r)
    except KeyError as e:
        missing.add(str(e))
        continue
    old_n = r["nutrition"]
    old_flags = list(r.get("flags", []))
    new_flags = derive_flags(new_n, old_flags, r["name"])
    if "lowPurine" in old_flags:
        new_flags.append("lowPurine")
    new_flags = list(dict.fromkeys(new_flags))
    r["nutrition"] = new_n
    r["flags"] = new_flags
    r["tags"] = tags_from_flags(new_flags)
    if "highK" in new_flags and "高钾" not in r["notes"]:
        r["notes"] += "钾含量偏高，血钾偏高者建议限量或遵医嘱。"
    if "highP" in new_flags and "磷" not in r["notes"]:
        r["notes"] += "磷含量偏高，血磷偏高者建议限量。"
    changed = {
        "id": r["id"], "name": r["name"], "region": r["region"], "meal": r["meal"],
        "energy": "%s→%s" % (old_n.get("energy", "—"), new_n["energy"]),
        "protein": "%s→%s" % (old_n.get("protein", "—"), new_n["protein"]),
        "sodium": "%s→%s" % (old_n.get("sodium", "—"), new_n["sodium"]),
        "potassium": "%s→%s" % (old_n.get("potassium", "—"), new_n["potassium"]),
        "phosphorus": "%s→%s" % (old_n.get("phosphorus", "—"), new_n["phosphorus"]),
        "flags": "/".join(old_flags) + " → " + "/".join(new_flags),
    }
    rows.append(changed)

if missing:
    print("MISSING INGREDIENTS:")
    for m in sorted(missing):
        print("  ", m)
    raise SystemExit(1)

# 完整性校验
assert len(recipes) >= 100, "菜谱数量异常"
ids = [r["id"] for r in recipes]
assert len(set(ids)) == len(ids), "id 不唯一"
for r in recipes:
    n = r["nutrition"]
    for k in ("energy", "protein", "fat", "carb", "sodium", "potassium", "phosphorus", "calcium", "iron", "water"):
        assert k in n, "缺少营养字段 %s: %s" % (k, r["name"])
    fs = set(r["flags"])
    assert not ({"lowK", "highK"} <= fs), "低钾/高钾标签冲突: %s" % r["name"]
    assert not ({"lowP", "highP"} <= fs), "低磷/高磷标签冲突: %s" % r["name"]
    for fl in fs:
        assert fl in ("lowK", "highK", "lowP", "highP", "lowNa", "goodProtein", "ironRich", "lowPurine"), fl

from collections import Counter
region_counts = Counter(r["region"] for r in recipes)
meal_counts = Counter(r["meal"] for r in recipes)
season_counts = Counter(r["season"] for r in recipes)

import os
os.makedirs(OUT_DIR, exist_ok=True)
with open(OUT_DIR + "recipes.js", "w", encoding="utf-8") as f:
    f.write("// 菜谱库：100 道示例菜谱。营养值按《成人慢性肾脏病食养指南（2024年版）》附录1表1.1及中国食物成分表常见口径估算，仅供饮食参考，请遵医嘱。\n")
    f.write("const RECIPES = " + json.dumps(recipes, ensure_ascii=False, indent=0) + ";\n")

ing_db = []
for name, f in FOOD.items():
    ing_db.append({
        "name": name,
        "per100g": {
            "energy": kcal(f["protein"], f["fat"], f["carb"]),
            "protein": f["protein"], "fat": f["fat"], "carb": f["carb"],
            "sodium": f["sodium"], "potassium": f["potassium"], "phosphorus": f["phosphorus"],
            "calcium": f["calcium"], "iron": f["iron"], "water": f["water"],
        },
        "level": {"k": level_k(f["potassium"]), "p": level_p(f["phosphorus"]), "na": level_na(f["sodium"])},
        "source": f["source"],
    })
with open(OUT_DIR + "ingredients.js", "w", encoding="utf-8") as f:
    f.write("// 食材库：每100克可食部参考值（来源见 source；guide-table1.1=指南附录1表1.1，cfct-estimate=中国食物成分表常见口径估算）\n")
    f.write("const INGREDIENT_DB = " + json.dumps(ing_db, ensure_ascii=False, indent=1) + ";\n")

with open(BASE + "verification-report.csv", "w", encoding="utf-8-sig", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    w.writeheader()
    w.writerows(rows)

stats = {}
for r in recipes:
    for fl in r["flags"]:
        stats[fl] = stats.get(fl, 0) + 1
print("recipes rebuilt:", len(recipes))
print("flag distribution:", stats)
print("region counts:", dict(region_counts))
print("meal counts:", dict(meal_counts))
print("season counts:", dict(season_counts))
