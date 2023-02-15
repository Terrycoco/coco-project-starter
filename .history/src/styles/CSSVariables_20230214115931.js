//to create global CSS variables dependent on Theme
import { createGlobalStyle } from "styled-components";
import { useTheme } from "@/hooks";
import { fontVariables, getFontVariable } from "@/utils/fonts";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const GlobalStyle = createGlobalStyle`
 html: {
   --font-body: ${(props) => props.theme.fonts.display};
   --font-display: "Josefin Sans";
   --font-special: ${(props) => props.theme.fonts.special};
   --font-mono: ${(props) => props.theme.fonts.mono};
 }
`;

const CSSVariables = (props) => {
  const { theme } = useTheme();
  return <GlobalStyle theme={theme} />;
};

export default CSSVariables;

// --font-body: ${(props) => props.theme.fonts.display};
// --font-display: ${(props) => props.theme.fonts.display};
// --font-special: ${(props) => props.theme.fonts.display};
// --font-mono: ${(props) => props.theme.fonts.display};
