import { useTheme } from "@/hooks";

const StyleForm = ({ section, element, ...props }) => {
  const { theme } = useTheme;
  console.log("theme: ", theme);

  return <div>hello</div>;
};

export default StyleForm;
