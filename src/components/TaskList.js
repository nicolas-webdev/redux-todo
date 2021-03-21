import Task from "./Task";
import styled from "styled-components";

import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.list);
  const activeList = tasks.filter((list) => list.active)[0].list;
  const listTasks = tasks.filter((list) => list.list === activeList)[0].tasks;
  return (
    <StyledTaskList>
      {listTasks.map(({ id, completed, title }) => (
        <Task key={id} id={id} completed={completed} title={title} />
      ))}
    </StyledTaskList>
  );
};

const StyledTaskList = styled.div`
  max-height: 100%;
`;

export default TaskList;
