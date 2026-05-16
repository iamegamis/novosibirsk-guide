import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Novosibirsk Guide — Исломжон";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Top gold line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />

        {/* Grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(201,168,76,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 15,
              letterSpacing: "0.35em",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            🇷🇺  Живу в Новосибирске
          </div>

          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#F0EDE8",
              lineHeight: 1.05,
              textAlign: "center",
              display: "flex",
            }}
          >
            Novosibirsk
            <span style={{ color: "#C9A84C" }}>Guide</span>
          </div>

          <div
            style={{
              fontSize: 22,
              color: "rgba(240,237,232,0.55)",
              textAlign: "center",
              maxWidth: 680,
              lineHeight: 1.5,
            }}
          >
            Помогаю иностранным студентам адаптироваться
            и поступить в российские университеты
          </div>
        </div>

        {/* Bottom label */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 14,
            letterSpacing: "0.25em",
            color: "#C9A84C",
            textTransform: "uppercase",
          }}
        >
          ИСЛОМЖОН · НОВОСИБИРСК
        </div>

        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
