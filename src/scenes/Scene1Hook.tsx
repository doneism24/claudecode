import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Wordmark } from "../brand/components";
import { SIGNAL, VOID } from "../brand/tokens";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const wordmarkScale = spring({ frame, fps, config: { damping: 14, mass: 0.6 } });
  const wordmarkOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const sweepX = interpolate(frame, [22, 42], [-1400, 1400], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sweepOpacity = interpolate(
    frame,
    [22, 26, 38, 42],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: VOID, alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          transform: `scale(${wordmarkScale})`,
          opacity: wordmarkOpacity,
        }}
      >
        <Wordmark size={114} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: 260,
          height: 22,
          background: SIGNAL,
          transform: `translate(${sweepX}px, -50%) skewX(-18deg)`,
          opacity: sweepOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
