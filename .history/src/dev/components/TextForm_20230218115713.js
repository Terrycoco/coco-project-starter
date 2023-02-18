import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { ColorDropdown, FontDropdown } from "@/dev/components/dropdowns";
import Slider from "@/dev/components/Slider";

const TextForm = ({ styleObj, section, element, ...props }) => {
  const { theme, setTheme } = useTheme();
  const [thisSO, setThisSO] = useState(styleObj);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontSize, setFontSize] = useState(100);
  const [fontStretch, setFontStretch] = useState(100);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (element) {
      setThisSO(styleObj);
      setFontWeight(styleObj.fontWeight);
      setFontSize(styleObj.fontSize);
      setFontStretch(styleObj.fontStretch);
    }
  }, [styleObj, thisSO, element]);

  const handleChange = (e) => {
    //do nothing here
  };

  const handleValueChange = (id, newval) => {
    //update theme here??
    //coming in from slider
    // let fv;
    // switch (id) {
    //   case "font-size": {
    //     setFontSize(newval);
    //     props.onChange("fontSize", newval);
    //     break;
    //   }
    //   case "weight": {
    //     setWeight(newval);
    //     fv = ` 'wght' ${newval}`;
    //     props.onChange(fv);
    //     break;
    //   }
    //   case "font-stretch": {
    //     setFontStretch(newval);
    //     props.onChange("fontStretch", newval + "%");
    //     break;
    //   }
    //send to parent
    //make new font variation string
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBlur = (e) => {
    let propname = e.target.dataset.propname;
    if (thisSO[propname] !== e.target.value) {
      //console.log("property to change:", propname);
      let newtheme = Object.assign({}, theme);
      newtheme[section][element][propname] = e.target.value;
      //  console.log("newtheme:", newtheme);
      setTheme(newtheme);
    }
  };

  const styles = {
    form: {
      width: "100%",
      backgroundColor: theme.colors.whitish,
      zIndex: 10,
      position: "fixed",
      top: "20px",
      right: "0px",
      maxWidth: "400px",
    },
    heading: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      color: "var(--clr-primary)",
      fontFamily: "var(--font-body)",
      marginBottom: ".5rem",
    },
    element: {
      fontWeight: "normal",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
      padding: "5%",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      padding: "10px",
      fontSize: "1rem",
    },
  };

  return (
    <>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>{element}</div>

        <div key={"font-row"} style={styles.row}>
          <div style={styles.prop}>font</div>
          <div style={styles.val}>
            <FontDropdown
              section={section}
              element={element}
              property="fontFamily"
            />
          </div>
        </div>

        <div key={"size-row"} style={styles.row}>
          <div style={styles.prop}>fontSize</div>
          <div style={styles.val}>
            <Slider
              id="font-size"
              min="0.5"
              max="6"
              defaultValue={styleObj.fontSize}
              onChange={handleValueChange}
            />
          </div>
        </div>

        <div key={"weight-row"} style={styles.row}>
          <div style={styles.prop}>fontWeight</div>
          <div style={styles.val}>
            <Slider
              id="fontWeight"
              min="1"
              max="1000"
              defaultValue={fontWeight}
              onChange={handleValueChange}
            />
          </div>
        </div>

        <div key={"stretch-row"} style={styles.row}>
          <div style={styles.prop}>fontStretch</div>
          <div style={styles.val}>
            <Slider
              id="font-stretch"
              min="50"
              max="200"
              defaultValue={fontStretch}
              onChange={handleValueChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextForm;
