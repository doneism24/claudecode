import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { ANTON, PRETENDARD, MUTED, PAPER, VOID } from "../brand/tokens";

const SEGMENT_FRAMES = 40;

const LABELS = ["BOXING", "HYROX", "RECOVERY"];
const SUBLABELS = ["복싱", "하이록스", "리커버리"];

// Placeholder panels stand in for real training footage — swap the fill
// for a <Video src={staticFile(...)}/> per segment once clips exist.
export const Scene3Mood: React.FC = () => {
  const frame = useCurrentFrame();
  const index = Math.min(
    LABELS.length - 1,
    Math.floor(frame / SEGMENT_FRAMES),
  );
  const localFrame = frame - index * SEGMENT_FRAMES;

  const opacity = interpolate(
    localFrame,
    [0, 4, SEGMENT_FRAMES - 4, SEGMENT_FRAMES],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: VOID }}>
      <AbsoluteFill
        style={{
          opacity,
          backgroundImage:
            "repeating-linear-gradient(115deg, #191919 0px, #191919 2px, #0B0B0B 2px, #0B0B0B 11px)",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            fontFamily: ANTON,
            fontSize: 124,
            letterSpacing: 2,
            color: PAPER,
          }}
        >
          {LABELS[index]}
        </div>
        <div
          style={{
            fontFamily: PRETENDARD,
            fontWeight: 600,
            fontSize: 31,
            letterSpacing: 4,
            color: MUTED,
          }}
        >
          {SUBLABELS[index]}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
