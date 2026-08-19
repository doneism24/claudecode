import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Wordmark } from "../brand/components";
import { PRETENDARD, DIM, PAPER, VOID, TAGLINE } from "../brand/tokens";

export const Scene2Identity: React.FC = () => {
  const frame = useCurrentFrame();

  const wordmarkOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const wordmarkY = interpolate(frame, [0, 15], [16, 0], {
    extrapolateRight: "clamp",
  });

  const taglineOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const headlineOpacity = interpolate(frame, [32, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [32, 55], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: VOID }}>
      <div
        style={{
          position: "absolute",
          top: 620,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            opacity: wordmarkOpacity,
            transform: `translateY(${wordmarkY}px)`,
          }}
        >
          <Wordmark size={126} />
        </div>
        <div
          style={{
            fontFamily: PRETENDARD,
            fontWeight: 600,
            fontSize: 27,
            letterSpacing: 3,
            color: DIM,
            opacity: taglineOpacity,
          }}
        >
          {TAGLINE}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 920,
          left: 90,
          right: 90,
          textAlign: "center",
          fontFamily: PRETENDARD,
          fontWeight: 900,
          fontSize: 64,
          lineHeight: 1.3,
          color: PAPER,
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
        }}
      >
        하이브리드 트레이닝이
        <br />
        상도동에 시작됩니다
      </div>
    </AbsoluteFill>
  );
};
