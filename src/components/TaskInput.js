import { useState } from "react";
import styled from "styled-components";
import AddTask from "../img/AddTask.svg";

const TaskInput = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      target: { newtask },
    } = e;
    if (newtask.value.length > 0) {
      console.log(e.target.newtask.value);
    }
    setInputValue("");
    e.target.newtask.blur();
  };
  return (
    <StyledForm action="/" method="post" onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        name="newtask"
        maxLength={10}
        autoComplete="off"
      />
      <StyledLabel htmlFor="newtask">新しいタスク</StyledLabel>
      <StyledButton type="submit">
        <img width="22" height="22" alt="" src={AddTask} />
      </StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 30px auto;
  width: 700px;
  max-width: 98%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(0, 0, 0, 0.07);
  border-radius: 4px;
`;

const StyledInput = styled.input`
  padding: 4px 4px 4px 42px;
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  caret-color: white;
  color: transparent;
  font-size: 1px;
  font-weight: normal;
  transition: all 0.3s;
  &:focus {
    color: #a7a2a1;
    outline: none;
    font-size: 24px;
    & + label {
      font-size: 0;
    }
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 12px;
  left: 40px;
  font-size: 16px;
  color: #a7a2a1;
  pointer-events: none;
  transition: 0.3s all;
`;

const StyledButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 14px;
  left: 12px;
`;

export default TaskInput;
