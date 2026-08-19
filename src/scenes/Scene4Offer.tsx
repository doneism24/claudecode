import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ANTON, PRETENDARD, MUTED, PAPER, SIGNAL, VOID } from "../brand/tokens";

export const Scene4Offer: React.FC = () => {
  const frame = useCurrentFrame();

  const numberOpacity = interpolate(frame, [8, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const count = Math.round(
    interpolate(frame, [10, 45], [0, 34], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );

  const labelOpacity = interpolate(frame, [12, 24], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const captionOpacity = interpolate(frame, [55, 72], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: VOID,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          fontFamily: PRETENDARD,
          fontWeight: 700,
          fontSize: 34,
          letterSpacing: 2,
          color: MUTED,
          opacity: labelOpacity,
        }}
      >
        정가 대비 최대
      </div>
      <div
        style={{
          fontFamily: ANTON,
          fontSize: 292,
          lineHeight: 1,
          color: SIGNAL,
          opacity: numberOpacity,
        }}
      >
        {count}%
      </div>
      <div
        style={{
          fontFamily: PRETENDARD,
          fontWeight: 700,
          fontSize: 34,
          letterSpacing: 2,
          color: PAPER,
          opacity: labelOpacity,
        }}
      >
        낮은 금액입니다
      </div>
      <div
        style={{
          marginTop: 40,
          fontFamily: PRETENDARD,
          fontWeight: 600,
          fontSize: 29,
          color: MUTED,
          opacity: captionOpacity,
        }}
      >
        오픈 이후에는 적용되지 않습니다
      </div>
    </AbsoluteFill>
  );
};
