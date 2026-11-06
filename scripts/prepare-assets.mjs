import sharp from "sharp";
import { mkdirSync } from "node:fs";

const src = process.argv[2];
const bio = process.argv[3];
mkdirSync("public/brand", { recursive: true });

const meta = await sharp(src).metadata();
console.log("logo", meta.width, meta.height, meta.channels, meta.hasAlpha);

const trimmed = await sharp(src).trim({ threshold: 12 }).png().toBuffer({ resolveWithObject: true });
console.log("trimmed", trimmed.info.width, trimmed.info.height);
await sharp(trimmed.data).toFile("public/brand/origin7-logo.png");

// Symbol is the square mark at the left; locate the first fully-empty column after it.
const { data, info } = await sharp(trimmed.data).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const isInk = (x, y) => {
  const i = (y * info.width + x) * 4;
  const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
  return a > 20 && !(r > 235 && g > 235 && b > 235);
};
let gap = -1;
for (let x = Math.floor(info.height * 0.6); x < info.width; x++) {
  let ink = false;
  for (let y = 0; y < info.height; y++) if (isInk(x, y)) { ink = true; break; }
  if (!ink) { gap = x; break; }
}
console.log("symbol gap at", gap);
const symbol = await sharp(trimmed.data).extract({ left: 0, top: 0, width: gap, height: info.height }).trim({ threshold: 12 }).toBuffer();
const pad = (size) =>
  sharp(symbol).resize(Math.round(size * 0.84), Math.round(size * 0.84), { fit: "contain", background: "#ffffff00" })
    .extend({ top: Math.round(size * 0.08), bottom: Math.round(size * 0.08), left: Math.round(size * 0.08), right: Math.round(size * 0.08), background: "#ffffff00" });
await sharp(symbol).toFile("public/brand/origin7-symbol.png");
await (await pad(512)).png().toFile("src/app/icon.png");
await sharp(await (await pad(180)).png().toBuffer()).flatten({ background: "#ffffff" }).resize(180, 180).png().toFile("src/app/apple-icon.png");

// White-on-dark variant: keep the magenta/violet artwork untouched, only remove the white background.
const keyed = Buffer.from(data);
for (let i = 0; i < keyed.length; i += 4) {
  const m = Math.min(keyed[i], keyed[i + 1], keyed[i + 2]);
  if (m > 235) keyed[i + 3] = 0;
}
await sharp(keyed, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toFile("public/brand/origin7-logo-transparent.png");

const b = await sharp(bio).metadata();
console.log("bio", b.width, b.height);
await sharp(bio).resize({ width: 1068, withoutEnlargement: true }).webp({ quality: 86 }).toFile("public/images/melanie-dawson.webp");
