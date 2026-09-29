import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 6,
          backgroundColor: "#0a0a0a",
          color: "#fafafa",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        {DATA.initials}
      </div>
    ),
    size
  );
}
