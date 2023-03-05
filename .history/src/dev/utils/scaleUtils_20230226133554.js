function getValFromCSS(input) {
  if (!input) return null;
  let matches = input.match(/[a-z]/); //search for unit pos
  if (matches) {
    let val = parseFloat(input.substring(0, matches.index));
    return val;
  } else {
    return parseFloat(input);
  }
}
function getUnitFromCSS(input) {
  let matches = input.match(/[a-z]/); //search for unit pos
  if (matches) {
    let unit = input.substring(matches.index);
    return unit;
  } else {
    return null;
  }
}

const calcFontSizes = (bodySize, LEVELS, RATIO) => {
  let BODY_SIZE = getValFromCSS(bodySize);
  let unit = getUnitFromCSS(bodySize);
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

module.export = calcFontSizes;