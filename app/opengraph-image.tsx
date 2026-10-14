import { ImageResponse } from "next/og";

export const alt = "Leonardo Dariva — Editor de vídeo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#03040d", color: "#f5f7ff", fontFamily: "Arial, sans-serif", backgroundImage: "radial-gradient(#5968b8 1px, transparent 1px), linear-gradient(125deg, #02030a, #101457 48%, #03040d)", backgroundSize: "22px 22px, auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, textTransform: "uppercase", letterSpacing: 4 }}><span>Leonardo Dariva</span><span style={{ color: "#377bff" }}>Editor de vídeo</span></div>
      <div style={{ display: "flex", fontSize: 86, lineHeight: 0.92, letterSpacing: -5, maxWidth: 930 }}>Histórias que ganham movimento.</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 24 }}><span>Edição · Motion · Storytelling</span><span style={{ fontSize: 52 }}>LD<span style={{ color: "#377bff" }}>.</span></span></div>
    </div>,
    size,
  );
}
