import { useTheme } from "@/hooks";
import styles from "./forms.module.css";
import { Slider } from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme } = useTheme();

  const handleValueChange = (id, newval) => {
    //console.log("id:", id, "newval:", newval);
    // let newobj = Object.assign({}, styleObj);
    // //exception if fontWeight change both fontWeight and fontVariationSettings
    // if (id === "fontWeight") {
    //   newobj.fontVariationSettings = `"wght" ${newval}`;
    // } else {
    //   newobj[id] = newval;
    // }
    // //set new obj to parent
    // props.onChange(element, newobj);
  };

  return (
    <div className={styles.form}>
      <div className={styles.heading}>Section</div>

      <div key={`section-pt`} className={styles.row}>
        <div className={styles.prop}>paddingTop</div>
        <div className={styles.val}></div>
      </div>

      <div key={"section-pr"} className={styles.row}>
        <div className={styles.prop}>PaddingRight</div>
      </div>

      <div key={"section-pb"} className={styles.row}>
        <div className={styles.prop}>PaddingBottom</div>
        <div className={styles.val}>3</div>
      </div>
      <div key={"section-pl"} className={styles.row}>
        <div className={styles.prop}>PaddingLeft</div>
        <div className={styles.val}>3</div>
      </div>
    </div>
  );
};

export default SpacingForm;