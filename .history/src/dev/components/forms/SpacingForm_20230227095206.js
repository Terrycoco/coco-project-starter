import { useTheme } from "@/hooks";
import styles from "./forms.module.css";
import { Slider } from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();

  const handleValueChange = (id, newval) => {
    console.log("id:", id, "newval:", newval);
  };

  return (
    <div className={styles.form}>
      <div className={styles.heading}>Section</div>

      <div key={`section-pt`} className={styles.row}>
        <div className={styles.prop}>paddingTop</div>
        <div className={styles.val}>
          <Slider
            key="section-pt-slider"
            id="sectionPaddingTop"
            min="0"
            max="6"
            defaultValue={theme.spacing.sectionPaddingTop}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
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
