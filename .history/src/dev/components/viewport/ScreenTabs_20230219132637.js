import { useTheme } from "@/hooks";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "gray",
    justifyItems: "stretch",
  },
};

const ScreenTabs = (props) => {
  return (
    <div style={styles.container}>
      <button>Mobile</button>
      <button>Lg Mobile</button>
      <button>Tablet</button>
      <button>Laptop</button>
      <button>Desktop</button>
      <button>TV</button>
    </div>
  );
};

export default ScreenTabs;
