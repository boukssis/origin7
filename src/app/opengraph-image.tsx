import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Origin7 — BIM & Digital Construction Consultancy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/brand/origin7-logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#f9f8fc", backgroundImage: "linear-gradient(to right, rgba(102,42,132,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(102,42,132,0.09) 1px, transparent 1px)", backgroundSize: "56px 56px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={432} height={73} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#b81868", textTransform: "uppercase" }}>Award-winning digital construction consultancy</div>
          <div style={{ fontSize: 92, fontWeight: 700, color: "#151322", lineHeight: 1, marginTop: 20, letterSpacing: -3 }}>BUILDING A SMARTER FUTURE.</div>
          <div style={{ fontSize: 28, color: "#5d5a6e", marginTop: 28 }}>BIM · ISO 19650 · Information management · Northern Ireland & Ireland</div>
        </div>
      </div>
    ),
    size,
  );
}
