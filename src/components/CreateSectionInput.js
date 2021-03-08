import { useState } from "react";
import styled from "styled-components";
import AddList from "../img/AddList.svg";

const CreateSectionInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledForm autocomplete="off">
      <StyledButton>
        <img type="submit" width="22" height="22" alt="" src={AddList} />
      </StyledButton>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        name="new-list"
        autocomplete="off"
      />
      <StyledLabel htmlFor="new-list">新しいリストを追加</StyledLabel>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  height: 30px;
  width: 210px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid white;
  position: relative;
`;

const StyledInput = styled.input`
  padding: 10px 0px 18px 40px;
  margin-top: -2px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  caret-color: white;
  color: transparent;
  font-size: 0px;
  font-weight: bold;

  transition: all 0.3s;
  &:focus {
    color: white;
    outline: none;
    font-size: 18px;
    & + label {
      font-size: 0;
    }
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: -2px;
  left: 38px;
  font-size: 16px;
  color: #ffffff;
  pointer-events: none;
  transition: 0.3s all;
`;

const StyledButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 6px;
`;

export default CreateSectionInput;
