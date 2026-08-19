import React from "react";
import { ANTON, PRETENDARD, PAPER, SIGNAL, VOID, MUTED } from "./tokens";

export const XMark: React.FC<{
  size: number;
  color?: string;
  accent?: string;
  bg?: string;
  thick?: number;
  cut?: number;
  style?: React.CSSProperties;
}> = ({
  size,
  color = PAPER,
  accent = SIGNAL,
  bg = VOID,
  thick = 0.26,
  cut = 0.1,
  style,
}) => {
  const strokeWidth = size * thick;
  const cutHeight = size * cut;
  const half = size / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={style}
    >
      <line
        x1={0}
        y1={0}
        x2={size}
        y2={size}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <line
        x1={size}
        y1={0}
        x2={0}
        y2={size}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="square"
      />
      <rect
        x={-strokeWidth}
        y={half - cutHeight / 2}
        width={size + strokeWidth * 2}
        height={cutHeight}
        fill={bg}
      />
      {accent ? (
        <rect
          x={-strokeWidth}
          y={half - cutHeight / 2}
          width={size * 0.3 + strokeWidth}
          height={cutHeight}
          fill={accent}
        />
      ) : null}
    </svg>
  );
};

export const Wordmark: React.FC<{
  size: number;
  color?: string;
  accent?: string;
  letterSpacing?: number;
}> = ({ size, color = PAPER, accent = SIGNAL, letterSpacing = 0 }) => (
  <div
    style={{
      fontFamily: ANTON,
      fontSize: size,
      lineHeight: 1,
      letterSpacing,
      display: "flex",
      whiteSpace: "nowrap",
    }}
  >
    <span style={{ color }}>BIGBRO</span>
    <span style={{ color: accent }}>X</span>
  </div>
);

export const Kicker: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      fontFamily: PRETENDARD,
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: 4,
      color: MUTED,
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

export const Chip: React.FC<{
  children: React.ReactNode;
  fg?: string;
  bg?: string;
  fontSize?: number;
}> = ({ children, fg = VOID, bg = SIGNAL, fontSize = 29 }) => (
  <div
    style={{
      display: "inline-block",
      fontFamily: PRETENDARD,
      fontWeight: 700,
      fontSize,
      letterSpacing: 1,
      color: fg,
      background: bg,
      padding: "10px 20px",
    }}
  >
    {children}
  </div>
);

export const HazardStripe: React.FC<{ height?: number }> = ({
  height = 14,
}) => (
  <div
    style={{
      width: "100%",
      height,
      backgroundImage: `repeating-linear-gradient(115deg, ${SIGNAL} 0px, ${SIGNAL} 18px, ${VOID} 18px, ${VOID} 46px)`,
    }}
  />
);
