import Select, { components } from "react-select";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import {
  fonts,
  getFontsByCategory,
  getFontVariable,
  getFontNameFromVar,
} from "@/utils/fonts";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontDropdown = ({ section, element, property }) => {
  const { theme, setTheme } = useTheme();
  const [currentVal, setCurrentVal] = useState();

  useEffect(() => {
    setCurrentVal(theme[section][element][property]);
  }, [theme, section, element, property]);

  const handleSelect = (e) => {
    let newtheme = Object.assign({}, theme);
    newtheme[section][element][property] = e.value;
    setTheme(newtheme);
  };

  const Option = (props) => {
    console.log("option gets props:", props.data.value);
    return (
      <Fragment>
        <components.Option {...props} key={Math.random()}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: props.data.value }}>{props.children}</div>
          </div>
        </components.Option>
      </Fragment>
    );
  };

  //two kinds of dropdowns -- one just the themed fonts, the other all the fonts
  const getOptions = () => {
    let themeOptions = [];
    let allOptions = [];
    let groupedOptions = [];

    let themedFonts = theme.fonts;

    for (const t in themedFonts) {
      themeOptions.push({
        value: getFontVariable(t),
        label: t,
      });
    }

    groupedOptions.push({
      label: "----------themed fonts-----------",
      options: themeOptions,
    });

    for (const f in fonts) {
      allOptions.push({
        value: getFontVariable(fonts[f].name),
        label: fonts[f].name,
      });
    }
    groupedOptions.push({
      label: "----------all fonts-----------",
      options: allOptions,
    });

    return groupedOptions;
  };

  return (
    <Select
      options={getOptions()}
      components={{ Option }}
      onChange={handleSelect}
      defaultValue={{
        label: getFontNameFromVar(currentVal),
        value: currentVal,
      }}
    />
  );
};

export default FontDropdown;
