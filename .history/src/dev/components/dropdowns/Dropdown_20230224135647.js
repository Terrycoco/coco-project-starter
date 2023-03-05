import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: 2, label: "Musical" },
  { value: 1.618034, label: "Golden" },
  { value: 3, label: "High-Contrast" },
];

export default function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState(props.defaultValue);

  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      display: "block",
      textAlign: "left",
      width: "100%",
    }),
  };

  const handleSelected = (e) => {
    setSelectedOption(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={handleSelected}
        options={options}
        styles={customStyles}
      />
    </div>
  );
}
