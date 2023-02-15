import Select, { components } from "react-select";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { fonts, getFontsByCategory, getFontVariable } from "@/utils/fonts";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontDropdown = ({ section, element, property }) => {
  const { theme, setTheme } = useTheme();
  const [styleObj, setStyleObj] = useState();

  useEffect(() => {
    if (!element === undefined) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const getFontObjects = () => {
    theme.fonts;
  };

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
    let groupedOptions = [];

    let themedFonts = theme.fonts;

    for (const f in themedFonts) {
      themeOptions.push({
        value: getFontVariable(f),
        label: f,
      });
    }
    groupedOptions.push({ label: "themed", options: themeOptions });

    for (const a in theme.colorVariants) {
      variants.push({
        value: theme.colorVariants[v],
        label: v,
      });
    }
    options.push({ label: "variants", options: variants });

    return groupedOptions;
  };

  return (
    <Select
      options={getOptions()}
      components={{ Option }}
      onChange={handleSelect}
    />
  );
};

export default FontDropdown;
