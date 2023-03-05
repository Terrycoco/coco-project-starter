import styled from "styled-components";
import { useState } from "react";

const DropDownContainer = styled.div`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;

const Dropdown = ({ listObj, listStyle, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const toggling = (e) => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>Mangoes</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            <ListItem onClick={handleSelect} key={Math.random()} value="2">
              Musical (2)
            </ListItem>
            <ListItem
              onClick={handleSelect}
              key={Math.random()}
              value="1.618034"
            >
              Golden (1.618034)
            </ListItem>
            <ListItem onClick={handleSelect} key={Math.random()} value="3">
              High (3)
            </ListItem>
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default Dropdown;
