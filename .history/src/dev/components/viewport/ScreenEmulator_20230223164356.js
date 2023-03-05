import { useState, useEffect } from "react";
import { useViewport, useTheme } from "@/hooks";

const ScreenEmulator = ({ children, ...props }) => {
  const [width, setWidth] = useState(300);
  const [baseFontSize, setBaseFontSize] = useState();
  const { theme } = useTheme();
  const screens = theme.screens;

  const styles = {
    tabContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "gray",
      justifyContent: "stretch",
    },
    tab: {
      flex: 1,
    },
  };

  useEffect(() => {
    switch (props.device) {
      case "mobile":
        setWidth("45em"); //375px
        setBaseFontSize(theme.baseFontSizes[props.device]);
        break;
      case "full":
        setWidth(window.innerWidth);
        setBaseFontSize(theme.baseFontSizes.laptop);
        break;
      default:
        setWidth(screens[props.device]);
        setBaseFontSize(theme.baseFontSizes[props.device]);
    }
  }, [props.device]);

  const scrStyles = {
    emulator: {
      border: "1px solid black",
      width: `${width}`,
      fontSize: `${baseFontSize}`,
      padding: "2em",
    },
    full: {
      width: `${width}`,
      fontSize: `2rem`,
      padding: "2em",
    },
  };

  return props.device === "full" ? (
    <div style={scrStyles.full}>{children}</div>
  ) : (
    <div style={scrStyles.emulator}>{children}</div>
  );
};

export default ScreenEmulator;
