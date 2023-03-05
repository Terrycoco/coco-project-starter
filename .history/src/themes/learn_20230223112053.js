const screens = {
  //min widths
  mobile: "0em",
  lgMobile: "64em",
  tablet: "96em",
  laptop: "124em",
  desktop: "150em",
  tv: "175em",
};

const baseFontSizes = {
  //must match screen keys
  mobile: "8px",
  lgMobile: "10px",
  tablet: "12px",
  laptop: "14px",
  desktop: "18px",
  tv: "20px",
};

const colors = {
  primary: "#fc3a79",
  secondary: "#fe572e",
  blackish: "#261f22",
  whitish: "#f5f5f4",
  error: "#dc2626",
};

const colorVariants = {};

const fonts = {
  body: "Montserrat",
  display: "Josefin Sans",
  special: "Oleo Script",
  mono: "Space Mono",
};

const text = {
  p: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-body)",
    fontWeight: "400",
    fontSize: "1em",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: 0,
    wordSpacing: 0,
    maxWidth: "60ch",
  },
  h1: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "2em",
    lineHeight: "115%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },

  h2: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1.5874em",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h3: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1.2599em",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h4: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h5: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  h6: {
    color: "var(--clr-blackish)",
    fontFamily: "var(--font-display)",
    fontWeight: "400",
    fontSize: "1rem",
    lineHeight: "150%",
    fontVariationSettings: `"wght" 400`, // 1 - 1000 works font-variation-settings
    letterSpacing: "-1.5px",
    wordSpacing: "-5px",
  },
  subtitle1: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1.6rem",
    fontWeight: "normal",
    lineHeight: 1.4,
    letterSpacing: ".15px",
  },
  subtitle2: {
    color: colors.blackish,
    fontFamily: "var(--font-display)",
    fontSize: "1.4rem",
    fontWeight: "medium",
    lineHeight: 1.4,
    letterSpacing: ".1px",
  },
};

const spacing = {
  header: {
    height: "2rem",
  },
  section: {
    padding: "2rem",
  },
};

const layout = {
  page: {
    backgroundColor: colors.whitish,
  },
};

let theme = {
  screens,
  baseFontSizes,
  colors,
  colorVariants,
  fonts,
  text,
  spacing,
  layout,
};

module.exports = theme;
