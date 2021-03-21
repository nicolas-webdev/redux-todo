import TaskInput from "./TaskInput";
import styled from "styled-components";

const TodoList = () => {
  return (
    <StyledList>
      <StyledTitle>リストのタイトル</StyledTitle>
      <StyledProgress>あと１つ</StyledProgress>
      <TaskInput />
    </StyledList>
  );
};

const StyledList = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 41px;
  color: #625855;
`;

const StyledProgress = styled.h2`
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: #625855;
`;

export default TodoList;
