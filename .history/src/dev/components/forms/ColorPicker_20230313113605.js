import { ChromePicker } from "react-color";
import { useState } from "react";

const ColorPicker = (props) => {
  const [background, setBackground] = useState("#fff");
  const [color, setColor] = useState(props.color ? props.color : "#fff");

  const handleChange = (color) => {
    setColor(color);
  };

  const handleChangeComplete = (color) => {
    // setBackground({ background: color.hex });
    props.onSelect(color); //to parent
  };

  const preventClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClose = () => {
    props.onClose(color);
  };

  return (
    <div
      onClose={handleClose}
      className="absolute top-1 center-x"
      onClick={preventClose}
    >
      <ChromePicker
        color={color}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
};

export default ColorPicker;
