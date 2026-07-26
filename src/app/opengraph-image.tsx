import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050816",
          backgroundImage:
            "radial-gradient(circle at 50% 15%, rgba(0,229,255,0.18), transparent 55%), radial-gradient(circle at 85% 85%, rgba(0,255,136,0.12), transparent 50%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 6,
            color: "#00e5ff",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: "#00ff88" }} />
          Open to opportunities
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#00e5ff", marginTop: 20 }}>
          {profile.roles.join("  //  ")}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#94a3b8", marginTop: 28, maxWidth: 900, textAlign: "center" }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
