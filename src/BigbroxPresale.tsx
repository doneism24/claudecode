import React from "react";
import { Series } from "remotion";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Identity } from "./scenes/Scene2Identity";
import { Scene3Mood } from "./scenes/Scene3Mood";
import { Scene4Offer } from "./scenes/Scene4Offer";
import { Scene5PriceGrid } from "./scenes/Scene5PriceGrid";
import { Scene6Recap } from "./scenes/Scene6Recap";
import { Scene7CTA } from "./scenes/Scene7CTA";

export const BigbroxPresale: React.FC = () => {
  return (
    <Series>
      <Series.Sequence durationInFrames={60} name="S1 Hook">
        <Scene1Hook />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90} name="S2 Identity">
        <Scene2Identity />
      </Series.Sequence>
      <Series.Sequence durationInFrames={120} name="S3 Mood">
        <Scene3Mood />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90} name="S4 Offer">
        <Scene4Offer />
      </Series.Sequence>
      <Series.Sequence durationInFrames={300} name="S5 Price grid">
        <Scene5PriceGrid />
      </Series.Sequence>
      <Series.Sequence durationInFrames={150} name="S6 Recap">
        <Scene6Recap />
      </Series.Sequence>
      <Series.Sequence durationInFrames={90} name="S7 CTA">
        <Scene7CTA />
      </Series.Sequence>
    </Series>
  );
};
