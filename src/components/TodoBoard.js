import TodoList from "./TodoList";
import styled from "styled-components";

const TodoBoard = () => {
  return (
    <StyledTodoBoard>
      <TodoContainer>
        <TodoBox>
          <TodoList />
        </TodoBox>
      </TodoContainer>
    </StyledTodoBoard>
  );
};

const StyledTodoBoard = styled.div`
  padding-top: 40px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TodoContainer = styled.div`
  width: 770px;
  height: 650px;
  max-width: 95%;
  max-height: 90%;
  background: white;
  border-radius: 3px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoBox = styled.div`
  height: calc(100% - 12px);
  width: calc(100% - 12px);
  border: 1px solid #e5e5e5;
  border-radius: 3px;
`;

export default TodoBoard;
