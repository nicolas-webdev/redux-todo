import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import styled from "styled-components";

import { useSelector } from "react-redux";

const TodoList = () => {
  const tasks = useSelector((state) => state.list);
  const activeList = tasks.filter((list) => list.active)[0];
  const tasksRemaining = activeList.tasks.filter((task) => !task.completed)
    .length;

  return (
    <StyledList>
      <StyledTitle>{activeList.list}</StyledTitle>
      <StyledProgress>
        {tasksRemaining ? `あと${tasksRemaining}つ` : "全クリア！"}
      </StyledProgress>
      <TaskInput />
      <TaskList />
    </StyledList>
  );
};

const StyledList = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  text-align: center;
  overflow-y: scroll;
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
