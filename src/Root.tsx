import { Composition } from "remotion";
import { BigbroxPresale } from "./BigbroxPresale";
import { loadBrandFonts } from "./brand/loadFonts";

loadBrandFonts();

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="BigbroxPresale"
      component={BigbroxPresale}
      durationInFrames={900}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};
