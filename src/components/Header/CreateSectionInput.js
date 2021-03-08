import { useState } from "react";
import styled from "styled-components";
import AddList from "../../img/AddList.svg";

const CreateSectionInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.newlist.value);
    setInputValue("");
    e.target.newlist.blur();
  };
  return (
    <StyledForm action="/" method="post" onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        name="newlist"
        maxLength={24}
        autoComplete="off"
        required
      />
      <StyledLabel htmlFor="newlist">新しいリスト</StyledLabel>
      <StyledButton type="submit">
        <img width="22" height="22" alt="" src={AddList} />
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 8px 6px 0 0;
  height: 30px;
  min-width: 140px;
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
  font-size: 1px;
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
