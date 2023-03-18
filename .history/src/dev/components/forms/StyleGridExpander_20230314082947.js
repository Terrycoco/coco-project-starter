import { useId } from "react";

const styles = {
  title: {
    fontFamily: "var(font-forms)",
    fontSize: "14px",
    textTransform: "uppercase",
    paddingTop: "1rem",
    color: "var(--clr-primary)",
  },
  grid: {
    display: "flex",
    height: "0",
    flexDirection: "column",
    backgroundColor: "white",
    border: "1px solid lightgray",
    transition: "height 1s",
  },
};

const StyleGrid = (props) => {
  return (
    <div>
      {props.title ? <div style={styles.title}>{props.title}</div> : null}
      <div style={styles.grid}>{props.children}</div>
    </div>
  );
};

export default StyleGrid;