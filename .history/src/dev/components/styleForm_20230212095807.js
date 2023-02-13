import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme, setTheme } = useTheme();
  console.log("style obj gets theme: ", theme);
  const [property, setProperty] = "";

  const handleChange = (e) => {
    //do nothing here
  };

  const handleBlur = (e) => {
    //save changes to theme
    let newobj = Object.assign({}, theme);
    newobj[section][element][e.target.id] = e.target.value;
    console.log("newobj:", newobj);
    setTheme(newobj);
  };

  const styles = {
    heading: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    element: {
      fontWeight: "normal",
      fontFamily: "Arial",
      fontSize: "16px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
      padding: "10px",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      padding: "10px",
    },
  };

  const renderElement = () => {
    let obj = theme[section][element];
    console.log("styleobj:", theme);
    let result = [];
    for (const p in obj) {
      result.push(
        <div id={p} style={styles.row}>
          <div style={styles.prop}>{p}</div>
          <input
            type="text"
            id={p}
            defaultValue={obj[p]}
            style={styles.val}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      );
    }

    return result;
  };

  return (
    <div>
      <div style={styles.heading}>{element}</div>
      <div style={styles.element}>{renderElement()}</div>
    </div>
  );
};

export default StyleForm;
