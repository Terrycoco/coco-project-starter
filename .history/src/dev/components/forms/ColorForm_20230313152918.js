import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants, updateColor } from "@/store/colorsSlice";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { Button } from "@/components/buttons";
import ColorPickerDropdown from "@/dev/components/dropdowns/ColorPickerDropdown";

const ColorForm = (props) => {
  const dispatch = useDispatch();
  const colors = useSelector(selectColors);
  const variants = useSelector(selectVariants);
  const [initColors, setInitColors] = useState(null); // store initial state for reset

  useEffect(() => {
    setInitColors(colors);
  }, []);

  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "5rem",
      overflowY: "scroll",
      height: "100vh",
    },
    buttonrow: {
      marginTop: "1rem",
    },
  };

  const resetColor = (key) => {
    console.log("key to reset:", key);
    console.log("orig val:", initColors[key]);
    dispatch(updateColor({ key: key, value: initColors[key] }));
  };

  const getColorItems = useCallback(() => {
    if (colors !== undefined) {
      let result = [];
      for (let key in colors) {
        result.push(
          <StyleGridItem label={key} key={key}>
            <ColorPickerDropdown
              defaultColor={colors[key]}
              category="colors"
              key={key}
              id={key}
              onSelect={colorSelected}
              onReset={resetColor}
            />
          </StyleGridItem>
        );
      }
      return result;
    }
  });

  const colorSelected = (newpayload) => {
    dispatch(updateColor(newpayload));
    console.log("newcolor:", newpayload);
  };

  const getVariantItems = () => {
    //no color picker here
    if (variants !== undefined) {
      let result = [];
      for (let key in variants) {
        let style = {
          backgroundColor: variants[key],
          width: "100%",
          height: "100%",
        };
        result.push(
          <StyleGridItem label={key} key={key}>
            <div style={style}></div>
          </StyleGridItem>
        );
      }
      return result;
    }
  };

  return (
    <div style={styles.form}>
      <div style={styles.buttonrow}>
        <Button>Reset</Button>
        <Button>Delete</Button>
        <Button>Add Another Category</Button>
      </div>
      <StyleGrid title="Theme Colors">{getColorItems()}</StyleGrid>
      <StyleGrid title="Variants (calculated)">{getVariantItems()}</StyleGrid>
    </div>
  );
};

export default ColorForm;
