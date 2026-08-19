import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Chip } from "../brand/components";
import { ANTON, PRETENDARD, MUTED, PAPER, SIGNAL, VOID } from "../brand/tokens";

export const Scene6Recap: React.FC = () => {
  const frame = useCurrentFrame();

  const numberOpacity = interpolate(frame, [0, 16], [0, 1], {
    extrapolateRight: "clamp",
  });
  const numberY = interpolate(frame, [0, 16], [18, 0], {
    extrapolateRight: "clamp",
  });

  const chipOpacity = interpolate(frame, [20, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineOpacity = interpolate(frame, [40, 56], [0, 1], {
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
        gap: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 20,
          opacity: numberOpacity,
          transform: `translateY(${numberY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: PRETENDARD,
            fontWeight: 800,
            fontSize: 50,
            color: PAPER,
          }}
        >
          최대
        </div>
        <div
          style={{
            fontFamily: ANTON,
            fontSize: 192,
            color: SIGNAL,
            lineHeight: 1,
          }}
        >
          34%
        </div>
      </div>
      <div style={{ opacity: chipOpacity }}>
        <Chip fontSize={31}>락커 무료</Chip>
      </div>
      <div
        style={{
          marginTop: 20,
          fontFamily: PRETENDARD,
          fontWeight: 600,
          fontSize: 29,
          color: MUTED,
          opacity: lineOpacity,
          textAlign: "center",
        }}
      >
        정가 대비 최대 34%, 락커까지 포함됩니다
      </div>
    </AbsoluteFill>
  );
};
