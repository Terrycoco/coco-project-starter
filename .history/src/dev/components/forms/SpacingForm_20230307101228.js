import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/hooks";
import {
  RangeSlider,
  StyleGrid,
  StyleGridItem,
  ThemeViewer,
} from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();
  const [headerVal, setHeaderVal] = useState();

  useEffect(() => {
    setHeaderVal(theme.spacing.header.height);
  }, []);

  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
    },
  };

  const headerProps = useMemo(
    () => ({
      min: 0,
      max: 10,
      value: headerVal,
      step: 0.5,
      unit: "rem",
      onChange: (e) => handleValueChange(e, "header", "height"),
    }),
    [headerVal]
  );

  const handleValueChange = (newval, section, property) => {
    setHeaderVal(newval);
    let newtheme = Object.assign({}, theme);
    newtheme.spacing[section][property] = newval;
    setTheme(newtheme);
  };

  return (
    <div style={styles.form}>
      <StyleGrid title="Header">
        <StyleGridItem label="height">
          <RangeSlider key="headerht" {...headerProps} />
        </StyleGridItem>
      </StyleGrid>
    </div>
  );
};

export default SpacingForm;