# -*- coding: utf-8 -*-
"""生成 PWA 图标：圆角绿底 + 白碗米饭造型。"""
import os
from PIL import Image, ImageDraw

ROOT = "C:/Users/18210/Documents/肾病患者小工具/"
OUT = ROOT + "assets/"
os.makedirs(OUT, exist_ok=True)

GREEN = (46, 125, 91, 255)
GREEN_DARK = (31, 95, 70, 255)
RICE = (233, 244, 238, 255)
RICE_LINE = (197, 226, 210, 255)
WHITE = (255, 255, 255, 255)
WOOD = (244, 232, 210, 255)

def draw_icon(size):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    r = int(size * 0.22)
    d.rounded_rectangle([0, 0, size, size], radius=r, fill=GREEN)
    u = size / 512.0
    # 碗
    bowl_center = (256 * u, 338 * u)
    bowl_rx, bowl_ry = 168 * u, 104 * u
    d.ellipse([bowl_center[0] - bowl_rx, bowl_center[1] - bowl_ry,
               bowl_center[0] + bowl_rx, bowl_center[1] + bowl_ry], fill=WHITE)
    # 米饭
    rice_center = (256 * u, 300 * u)
    rice_rx, rice_ry = 118 * u, 48 * u
    d.ellipse([rice_center[0] - rice_rx, rice_center[1] - rice_ry,
               rice_center[0] + rice_rx, rice_center[1] + rice_ry], fill=RICE)
    # 筷子
    d.line([150 * u, 130 * u, 225 * u, 250 * u], fill=WOOD, width=int(16 * u))
    d.line([240 * u, 125 * u, 315 * u, 245 * u], fill=WOOD, width=int(16 * u))
    return img

icon_192 = draw_icon(192)
icon_512 = draw_icon(512)
icon_192.save(OUT + "icon-192.png")
icon_512.save(OUT + "icon-512.png")
icon_512.resize((180, 180), Image.LANCZOS).save(OUT + "apple-touch-icon.png")

svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<rect width="512" height="512" rx="112" fill="#2e7d5b"/>
<ellipse cx="256" cy="338" rx="168" ry="104" fill="#ffffff"/>
<ellipse cx="256" cy="300" rx="118" ry="48" fill="#e9f4ee"/>
<line x1="150" y1="130" x2="225" y2="250" stroke="#f4e8d2" stroke-width="22" stroke-linecap="round"/>
<line x1="240" y1="125" x2="315" y2="245" stroke="#f4e8d2" stroke-width="22" stroke-linecap="round"/>
</svg>'''
with open(OUT + "favicon.svg", "w", encoding="utf-8") as f:
    f.write(svg)

manifest = {
    "name": "肾友食养助手",
    "short_name": "肾友食养",
    "description": "基于《成人慢性肾脏病食养指南（2024年版）》的肾病饮食参考工具",
    "start_url": "./",
    "scope": "./",
    "display": "standalone",
    "background_color": "#f5f7f4",
    "theme_color": "#2e7d5b",
    "lang": "zh-CN",
    "icons": [
        {"src": "assets/icon-192.png", "sizes": "192x192", "type": "image/png"},
        {"src": "assets/icon-512.png", "sizes": "512x512", "type": "image/png"}
    ]
}
import json
with open(ROOT + "manifest.webmanifest", "w", encoding="utf-8") as f:
    json.dump(manifest, f, ensure_ascii=False, indent=2)

print("icons and manifest written")
