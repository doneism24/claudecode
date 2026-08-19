import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { ANTON, PRETENDARD, MUTED, PAPER, VOID } from "../brand/tokens";

const SEGMENT_FRAMES = 40;

const SEGMENTS = [
  { src: staticFile("images/boxing.webp"), label: "BOXING", sub: "복싱" },
  { src: staticFile("images/hyrox.webp"), label: "HYROX", sub: "하이록스" },
  { src: staticFile("images/recovery.webp"), label: "RECOVERY", sub: "리커버리" },
];

// Brand photo treatment: brightness(1.1) * (1 - 0.66 overlay) = 0.374 retained
// luminance, under the 0.40 ceiling. A bottom scrim adds contrast for the label.
export const Scene3Mood: React.FC = () => {
  const frame = useCurrentFrame();
  const index = Math.min(
    SEGMENTS.length - 1,
    Math.floor(frame / SEGMENT_FRAMES),
  );
  const localFrame = frame - index * SEGMENT_FRAMES;
  const segment = SEGMENTS[index];

  const opacity = interpolate(
    localFrame,
    [0, 4, SEGMENT_FRAMES - 4, SEGMENT_FRAMES],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill style={{ background: VOID }}>
      <AbsoluteFill style={{ opacity }}>
        <Img
          src={segment.src}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1.1)",
          }}
        />
        <AbsoluteFill style={{ background: "rgba(11,11,11,0.66)" }} />
        <AbsoluteFill
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(11,11,11,0) 0%, rgba(11,11,11,0) 55%, rgba(11,11,11,0.88) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 300,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
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
            {segment.label}
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
            {segment.sub}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
