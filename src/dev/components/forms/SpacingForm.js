import { useTheme } from "@/hooks";
import styles from "./forms.module.css";
import Slider from "./Slider/FirstSlider";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();

  const handleValueChange = (id, newval) => {
    console.log("id", id, "newval", newval);
    let newtheme = Object.assign({}, theme);
    newtheme.spacing.section[id] = newval;
    setTheme(newtheme);
  };

  return (
    <div className={styles.form}>
      <div className={styles.heading}>Section</div>

      <div key={`section-pt`} className={styles.row}>
        <div className={styles.prop}>paddingTop</div>
        <div className={styles.val}>
          <Slider
            key="section-pt-slider"
            id="paddingTop"
            min="0"
            max="10"
            defaultValue={theme.spacing.section.paddingTop}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
      </div>

      <div key={`section-pr`} className={styles.row}>
        <div className={styles.prop}>paddingRight</div>
        <div className={styles.val}>
          <Slider
            key="section-pr-slider"
            id="paddingRight"
            min="0"
            max="10"
            defaultValue={theme.spacing.section.paddingRight}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
      </div>

      <div key={`section-pb`} className={styles.row}>
        <div className={styles.prop}>paddingBottom</div>
        <div className={styles.val}>
          <Slider
            key="section-pb-slider"
            id="paddingBottom"
            min="0"
            max="10"
            defaultValue={theme.spacing.section.paddingBottom}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
      </div>

      <div key={`section-pl`} className={styles.row}>
        <div className={styles.prop}>paddingLeft</div>
        <div className={styles.val}>
          <Slider
            key="section-pl-slider"
            id="paddingLeft"
            min="0"
            max="10"
            defaultValue={theme.spacing.section.paddingLeft}
            onChange={handleValueChange}
            suf="rem"
          />
        </div>
      </div>
    </div>
  );
};

export default SpacingForm;
