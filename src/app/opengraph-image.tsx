import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = `${DATA.name} — Software Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STACK = ["TypeScript", "Next.js", "PostgreSQL", "Supabase", "n8n"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, #262626 0%, #0a0a0a 55%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            border: "2px solid #404040",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {DATA.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            {DATA.name}
          </div>
          <div style={{ fontSize: 40, color: "#a3a3a3", marginTop: 20 }}>
            {`Software Developer · ${DATA.location}`}
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 48,
              fontSize: 26,
              color: "#d4d4d4",
            }}
          >
            {STACK.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "1px solid #404040",
                  backgroundColor: "#171717",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
