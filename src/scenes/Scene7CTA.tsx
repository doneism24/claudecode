import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Chip, Wordmark } from "../brand/components";
import {
  PRETENDARD,
  MUTED,
  PAPER,
  RULE,
  VOID,
  MARGIN,
  HANDLE,
  OPEN_DATE,
  ADDRESS,
  TAGLINE,
} from "../brand/tokens";

export const Scene7CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const wordmarkOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const wordmarkY = interpolate(frame, [0, 15], [16, 0], {
    extrapolateRight: "clamp",
  });

  const chipOpacity = interpolate(frame, [16, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineOpacity = interpolate(frame, [30, 44], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const footerOpacity = interpolate(frame, [40, 56], [0, 1], {
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
        gap: 26,
      }}
    >
      <div
        style={{
          opacity: wordmarkOpacity,
          transform: `translateY(${wordmarkY}px)`,
        }}
      >
        <Wordmark size={114} />
      </div>

      <div
        style={{
          fontFamily: PRETENDARD,
          fontWeight: 600,
          fontSize: 29,
          letterSpacing: 2,
          color: MUTED,
          opacity: chipOpacity,
        }}
      >
        {HANDLE}
      </div>

      <div style={{ opacity: chipOpacity, marginTop: 6 }}>
        <Chip fontSize={31}>프로필 링크에서 신청 가능합니다</Chip>
      </div>

      <div
        style={{
          marginTop: 24,
          fontFamily: PRETENDARD,
          fontWeight: 800,
          fontSize: 34,
          color: PAPER,
          opacity: lineOpacity,
          textAlign: "center",
        }}
      >
        {OPEN_DATE}, 상도동에서 시작합니다
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 90,
          left: MARGIN,
          right: MARGIN,
          borderTop: `1px solid ${RULE}`,
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: PRETENDARD,
          fontWeight: 500,
          fontSize: 22,
          letterSpacing: 1,
          color: MUTED,
          opacity: footerOpacity,
        }}
      >
        <span>{ADDRESS}</span>
        <span>{TAGLINE}</span>
      </div>
    </AbsoluteFill>
  );
};
