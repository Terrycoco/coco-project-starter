import styles from "./slider.module.css";
import { useState } from "react";
import { getValFromCSS } from "@/utils/strings";

const Slider = (props) => {
  console.log(props);
  const [val, setVal] = useState(getValFromCSS(props.defaultValue));
  const [valUnit, setValUnit] = useState(props.defaultValue);

  const changeValue = (e) => {
    setVal(e.target.value); //send to parent? //change theme?
    let vu = e.target.value + (props.suf ? props.suf : "");
    setValUnit(vu);
    props.onChange(e.target.id, vu);
  };

  return (
    <div className={styles.slidecontainer}>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={val}
        id={props.id}
        onInput={changeValue}
      />
      <span>{valUnit}</span>
    </div>
  );
};

export default Slider;
