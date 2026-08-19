import { continueRender, delayRender, staticFile } from "remotion";

const PRETENDARD_WEIGHTS: Record<string, number> = {
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
};

const loadFace = (family: string, url: string, weight?: string) => {
  const handle = delayRender(`Loading font ${family} ${weight ?? ""}`);
  const face = new FontFace(family, `url(${url})`, weight ? { weight } : {});
  face
    .load()
    .then((loaded) => {
      document.fonts.add(loaded);
      continueRender(handle);
    })
    .catch((err) => {
      console.error(err);
      continueRender(handle);
    });
};

export const loadBrandFonts = () => {
  loadFace("Anton", staticFile("fonts/Anton-Regular.ttf"));
  Object.entries(PRETENDARD_WEIGHTS).forEach(([name, weight]) => {
    loadFace(
      "Pretendard",
      staticFile(`fonts/Pretendard-${name}.otf`),
      String(weight),
    );
  });
};
