// let BODY_SIZE = 2; //em
// let LEVELS = 3; //number of headers deep to use
// let RATIO = 2; //how much contrast
import { getUnitFromCSS, getValFromCSS } from "@/utils/strings";

export const calcFontSizes = (bodySize, LEVELS, RATIO) => {
  let BODY_SIZE = getValFromCSS(bodySize);
  let unit = getUnitFromCSS(bodySize);
  console.log("BODYSIZE:", BODY_SIZE, "unit;", unit);
  let fontSizes = {};
  let counter = 0;

  for (let i = 1; i <= LEVELS; i++) {
    let power = i / LEVELS;
    let multiplier = Math.pow(RATIO, power);
    let fs = BODY_SIZE * multiplier;
    let lev = LEVELS - counter;
    fontSizes[`h${lev}`] = `${fs.toFixed(4)}${unit}`;
    counter++;
  }
  //small size
  let power = -1 / LEVELS;
  let multiplier = Math.pow(RATIO, power);
  let sm = BODY_SIZE * multiplier;
  fontSizes.small = `${sm.toFixed(4)}${unit}`;

  console.log("fontSizes", fontSizes);

  return fontSizes;
};
