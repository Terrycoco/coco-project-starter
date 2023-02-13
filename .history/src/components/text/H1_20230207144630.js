import { withTheme } from "styled-components";

const H1 = ({ theme, ...props }) => {
  return <h1>{props.children}</h1>;
};

export default withTheme(H1);
