import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Kicker } from "../brand/components";
import { PRETENDARD, MUTED, PAPER, RULE2, VOID, MARGIN } from "../brand/tokens";

type Row = [period: string, price: string];
type Card = { title: string; rows: Row[] };

const CARDS: Card[] = [
  {
    title: "펀치플러스 · 복싱",
    rows: [
      ["3개월", "39만"],
      ["5개월", "59만"],
      ["10개월", "99만"],
    ],
  },
  {
    title: "하이록스",
    rows: [
      ["3개월", "59만"],
      ["5개월", "90만"],
      ["10개월", "169만"],
    ],
  },
  {
    title: "콤보 · 복싱+하이록스",
    rows: [
      ["3개월", "79만"],
      ["5개월", "119만"],
      ["10개월", "199만"],
    ],
  },
];

const GAP = 24;
const CONTENT_WIDTH = 1080 - MARGIN * 2;
const COL_WIDTH = (CONTENT_WIDTH - GAP * 2) / 3;

export const Scene5PriceGrid: React.FC = () => {
  const frame = useCurrentFrame();

  const kickerOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  const footerOpacity = interpolate(frame, [110, 130], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: VOID }}>
      <div
        style={{
          position: "absolute",
          top: 96,
          left: MARGIN,
          opacity: kickerOpacity,
        }}
      >
        <Kicker>PRESALE</Kicker>
      </div>

      <div
        style={{
          position: "absolute",
          top: 220,
          left: MARGIN,
          display: "flex",
          gap: GAP,
        }}
      >
        {CARDS.map((card, c) => {
          const cardDelay = 20 + c * 28;
          const titleOpacity = interpolate(
            frame,
            [cardDelay, cardDelay + 14],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          return (
            <div key={card.title} style={{ width: COL_WIDTH }}>
              <div
                style={{
                  fontFamily: PRETENDARD,
                  fontWeight: 800,
                  fontSize: 27,
                  lineHeight: 1.25,
                  color: PAPER,
                  opacity: titleOpacity,
                  minHeight: 132,
                }}
              >
                {card.title}
              </div>
              {card.rows.map(([period, price], r) => {
                const rowDelay = cardDelay + 16 + r * 16;
                const rowOpacity = interpolate(
                  frame,
                  [rowDelay, rowDelay + 14],
                  [0, 1],
                  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                );
                const rowY = interpolate(
                  frame,
                  [rowDelay, rowDelay + 14],
                  [12, 0],
                  { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
                );
                return (
                  <div
                    key={period}
                    style={{
                      opacity: rowOpacity,
                      transform: `translateY(${rowY}px)`,
                      padding: "22px 0",
                      borderBottom: `1px solid ${RULE2}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: PRETENDARD,
                        fontWeight: 600,
                        fontSize: 19,
                        color: MUTED,
                        marginBottom: 6,
                      }}
                    >
                      {period}
                    </div>
                    <div
                      style={{
                        fontFamily: PRETENDARD,
                        fontWeight: 900,
                        fontSize: 32,
                        color: PAPER,
                      }}
                    >
                      {price}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: MARGIN,
          right: MARGIN,
          textAlign: "center",
          fontFamily: PRETENDARD,
          fontWeight: 600,
          fontSize: 26,
          color: MUTED,
          opacity: footerOpacity,
        }}
      >
        5개월, 10개월 등록 시 개인 락커가 제공됩니다
      </div>
    </AbsoluteFill>
  );
};
