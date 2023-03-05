import { useTheme } from "@/hooks";

const Notepaper = (props) => {
  const styles = {
    paper: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: -100,
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#FFFFE0",
    },
    lines: {
      width: "100%",
      height: "calc(var(--sp-vert-unit) - 1px)",
      borderBottom: "1px solid lightblue",
      alignText: "right",
    },
  };

  const getLines = () => {
    let result = [];
    for (let i = 0; i < 60; i++) {
      result.push(<div style={styles.lines}></div>);
    }
    return result;
  };

  const getMagicNumber = (e) => {
    //compute this eventually using dom
    return "24px";
  };

  return (
    <div style={styles.paper}>
      <div style={styles.lines}>{`Vertical Space: ${getMagicNumber} `}</div>
      {getLines()}
    </div>
  );
};

export default Notepaper;
