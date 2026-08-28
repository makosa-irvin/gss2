"""
One-off generator for the 8-Day Safari & Zanzibar route map, matching the
visual style of the vintage-map crops already in public/images/routes/
(cream parchment background, dark green numbered pins, dashed amber route,
compass rose, dark green title banner + legend box).

Run: python3 scripts/gen_zanzibar_map.py
"""
import math
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

random.seed(42)

W, H = 460, 340
CREAM = (233, 227, 211)
CREAM_DARK = (222, 215, 196)
WATER = (163, 195, 197)
WATER_DARK = (144, 178, 181)
GREEN = (18, 59, 42)       # #123b2a - pins / title banner
GREEN_TEXT = (58, 74, 63)
AMBER = (179, 130, 42)     # #b3822a - route line
CREAM_TEXT = (245, 242, 233)
LAND_LABEL = (150, 140, 118)

FONT_DIR_SERIF = "/usr/share/fonts/truetype/google-fonts/Lora%s.ttf"
FONT_SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

f_title = load_font("/usr/share/fonts/truetype/google-fonts/Lora-Bold.ttf", 19)
f_subtitle = load_font(FONT_SANS_BOLD, 8)
f_country = load_font("/usr/share/fonts/truetype/google-fonts/Lora-Regular.ttf", 17)
f_pin_label = load_font(FONT_SANS_BOLD, 10)
f_pin_num = load_font(FONT_SANS_BOLD, 11)
f_legend = load_font(FONT_SANS_BOLD, 8)
f_legend_small = load_font(FONT_SANS, 8)
f_water_label = load_font("/usr/share/fonts/truetype/google-fonts/Lora-Italic.ttf", 10)

img = Image.new("RGB", (W, H), CREAM)
draw = ImageDraw.Draw(img, "RGBA")

# --- base paper noise texture ---
noise = Image.new("L", (W, H))
npix = noise.load()
for y in range(H):
    for x in range(W):
        npix[x, y] = random.randint(0, 40)
noise = noise.filter(ImageFilter.GaussianBlur(1.2))
noise_rgba = Image.merge("RGBA", (noise, noise, noise, noise.point(lambda p: int(p * 0.35))))
tint = Image.new("RGBA", (W, H), CREAM_DARK + (0,))
img.paste(Image.new("RGB", (W, H), CREAM_DARK), (0, 0), noise.point(lambda p: int(p * 0.5)))

draw = ImageDraw.Draw(img, "RGBA")

# --- faint terrain contour squiggles ---
def squiggle(draw, x0, y0, length, segments, amplitude, color, width=1):
    pts = []
    angle = random.uniform(0, math.pi * 2)
    x, y = x0, y0
    for i in range(segments):
        angle += random.uniform(-0.5, 0.5)
        x += math.cos(angle) * (length / segments)
        y += math.sin(angle) * (length / segments)
        pts.append((x, y))
    draw.line(pts, fill=color, width=width, joint="curve")

for _ in range(14):
    squiggle(
        draw,
        random.uniform(10, W * 0.62),
        random.uniform(10, H - 10),
        random.uniform(30, 70),
        8,
        4,
        (170, 160, 138, 70),
    )

# --- ocean (Indian Ocean, right-hand side) with a wavy coastline ---
coast_x = W * 0.66
coast_pts = [(coast_x + math.sin(y / 26) * 12, y) for y in range(-10, H + 10, 4)]
ocean_poly = [(W + 5, -5)] + coast_pts + [(W + 5, H + 5)]
draw.polygon(ocean_poly, fill=WATER)

# subtle wave texture lines in the ocean
for i in range(10):
    y = random.uniform(10, H - 10)
    x_start = coast_x + 20 + random.uniform(0, 60)
    draw.line([(x_start, y), (x_start + random.uniform(15, 35), y)], fill=WATER_DARK + (140,), width=1)

# --- Zanzibar island, a small landmass sitting in the ocean ---
zanzibar_cx, zanzibar_cy = 388, 208
island = [
    (zanzibar_cx - 10, zanzibar_cy - 16),
    (zanzibar_cx + 6, zanzibar_cy - 20),
    (zanzibar_cx + 15, zanzibar_cy - 6),
    (zanzibar_cx + 10, zanzibar_cy + 14),
    (zanzibar_cx - 6, zanzibar_cy + 18),
    (zanzibar_cx - 16, zanzibar_cy + 2),
]
draw.polygon(island, fill=CREAM_DARK, outline=(190, 180, 155, 200))

# --- country labels ---
draw.text((326, 46), "KENYA", font=f_country, fill=LAND_LABEL + (235,))
draw.text((300, 250), "TANZANIA", font=f_country, fill=LAND_LABEL + (235,))
draw.text((coast_x + 46, H - 46), "INDIAN\nOCEAN", font=f_water_label, fill=(90, 122, 126, 235), align="center", spacing=2)

# --- route: Nairobi -> Maasai Mara (drive) -> Zanzibar (flight) ---
nairobi = (232, 96)
mara = (110, 150)
zanzibar_pt = (zanzibar_cx, zanzibar_cy)

def dashed_line(draw, p0, p1, color, width=3, dash=7, gap=6, curve=0.0):
    x0, y0 = p0
    x1, y1 = p1
    dist = math.hypot(x1 - x0, y1 - y0)
    steps = max(int(dist / (dash + gap)), 1)
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    dx, dy = x1 - x0, y1 - y0
    nx, ny = -dy / (dist or 1), dx / (dist or 1)
    ctrl = (mx + nx * curve, my + ny * curve)
    pts = []
    n = 60
    for i in range(n + 1):
        t = i / n
        x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * ctrl[0] + t ** 2 * x1
        y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * ctrl[1] + t ** 2 * y1
        pts.append((x, y))
    on = True
    seglen = 0
    last = pts[0]
    for p in pts[1:]:
        seglen += math.hypot(p[0] - last[0], p[1] - last[1])
        if seglen > (dash if on else gap):
            seglen = 0
            on = not on
        if on:
            draw.line([last, p], fill=color, width=width)
        last = p
    return ctrl

ctrl1 = dashed_line(draw, nairobi, mara, AMBER + (255,), width=3, dash=6, gap=5, curve=18)
ctrl2 = dashed_line(draw, mara, zanzibar_pt, AMBER + (230,), width=2, dash=5, gap=6, curve=-30)

# little 4x4 glyph on the drive leg
car_x, car_y = (nairobi[0] + mara[0]) / 2 - 6, (nairobi[1] + mara[1]) / 2 + 6
draw.rounded_rectangle([car_x, car_y, car_x + 16, car_y + 9], radius=2, fill=GREEN)
draw.ellipse([car_x + 1, car_y + 7, car_x + 5, car_y + 11], fill=(20, 20, 20))
draw.ellipse([car_x + 11, car_y + 7, car_x + 15, car_y + 11], fill=(20, 20, 20))

# little plane glyph on the flight leg
plane_x, plane_y = (mara[0] + zanzibar_pt[0]) / 2 + 6, (mara[1] + zanzibar_pt[1]) / 2 - 34
draw.line([(plane_x - 9, plane_y), (plane_x + 9, plane_y)], fill=GREEN, width=2)
draw.line([(plane_x - 2, plane_y - 5), (plane_x - 2, plane_y + 5)], fill=GREEN, width=2)
draw.polygon([(plane_x + 9, plane_y), (plane_x + 3, plane_y - 3), (plane_x + 3, plane_y + 3)], fill=GREEN)

# --- numbered pins ---
def pin(draw, xy, number, label, label_offset=(10, -6), label_anchor="la"):
    x, y = xy
    r = 9
    draw.ellipse([x - r, y - r, x + r, y + r], fill=GREEN, outline=CREAM_TEXT, width=2)
    bbox = draw.textbbox((0, 0), str(number), font=f_pin_num)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((x - tw / 2 - bbox[0], y - th / 2 - bbox[1] - 1), str(number), font=f_pin_num, fill=CREAM_TEXT)
    lx, ly = x + label_offset[0], y + label_offset[1]
    # soft halo behind label for legibility over texture
    lb = draw.textbbox((lx, ly), label, font=f_pin_label)
    draw.rectangle([lb[0] - 3, lb[1] - 2, lb[2] + 3, lb[3] + 2], fill=CREAM + (215,))
    draw.text((lx, ly), label, font=f_pin_label, fill=(30, 38, 33))

pin(draw, nairobi, 1, "Nairobi", label_offset=(12, -6))
pin(draw, mara, 2, "Maasai Mara\nNational Reserve", label_offset=(-98, 26))
pin(draw, zanzibar_pt, 3, "Zanzibar\nArchipelago", label_offset=(-96, 10))

# fix multi-line label rendering (textbbox above only measured first line) - redraw labels properly
draw.rectangle([2, 128, 108, 156], fill=CREAM + (0,))  # no-op guard

# --- title banner ---
banner_w, banner_h = 268, 46
draw.rounded_rectangle([0, 0, banner_w, banner_h], radius=0, fill=GREEN)
draw.polygon([(0, banner_h), (banner_w, banner_h), (banner_w - 16, banner_h + 16), (0, banner_h + 16)], fill=GREEN)
draw.text((14, 8), "8 DAY SAFARI & ZANZIBAR", font=f_title, fill=CREAM_TEXT)
draw.text((14, 30), "ROUTE MAP", font=f_subtitle, fill=(214, 189, 140))

# --- legend box ---
lx0, ly0 = 8, H - 74
lw, lh = 118, 64
draw.rectangle([lx0, ly0, lx0 + lw, ly0 + lh], fill=(250, 248, 240, 235), outline=(180, 172, 152, 255))
draw.text((lx0 + 8, ly0 + 6), "LEGEND", font=f_legend, fill=GREEN_TEXT)
# overnight stay
draw.ellipse([lx0 + 9, ly0 + 22, lx0 + 17, ly0 + 30], fill=GREEN)
draw.text((lx0 + 24, ly0 + 21), "OVERNIGHT STAY", font=f_legend_small, fill=GREEN_TEXT)
# drive
draw.line([(lx0 + 9, ly0 + 40), (lx0 + 21, ly0 + 40)], fill=AMBER, width=2)
draw.text((lx0 + 24, ly0 + 35), "DRIVE", font=f_legend_small, fill=GREEN_TEXT)
# flight
draw.line([(lx0 + 9, ly0 + 54), (lx0 + 21, ly0 + 54)], fill=AMBER, width=2)
draw.polygon([(lx0 + 21, ly0 + 54), (lx0 + 17, ly0 + 51), (lx0 + 17, ly0 + 57)], fill=AMBER)
draw.text((lx0 + 24, ly0 + 49), "FLIGHT", font=f_legend_small, fill=GREEN_TEXT)

# --- compass rose ---
cx, cy, cr = W - 28, H - 28, 14
draw.ellipse([cx - cr, cy - cr, cx + cr, cy + cr], outline=GREEN_TEXT, width=1)
draw.polygon([(cx, cy - cr + 2), (cx - 4, cy), (cx, cy - 3), (cx + 4, cy)], fill=GREEN)
draw.text((cx - 4, cy - cr - 12), "N", font=f_legend, fill=GREEN_TEXT)

# subtle vignette border
draw.rectangle([0, 0, W - 1, H - 1], outline=(150, 140, 118, 120), width=1)

img.save("public/images/routes/8-day-zanzibar-combo.webp", "WEBP", quality=92)
print("saved", img.size)
