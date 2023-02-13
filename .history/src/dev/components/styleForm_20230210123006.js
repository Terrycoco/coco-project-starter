import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();

  const styles = {
    row: {
      border: "solid gray 1px",
      display: "grid",
      gridTemplateColumns: "auto auto",
    },
    element: {
      fontWeight: "bold",
    },
  };

  const renderElement = () => {
    let obj = theme[section][element];
    let result = [];
    for (const p in obj) {
      console.log(p, obj[p]);
      result.push(
        <div style={styles.row}>
          <div>{p}</div>
          <div>{obj[p]}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div>
      <div style={styles.element}>
        {element}
        {renderElement()}
      </div>
    </div>
  );
};

export default StyleForm;
