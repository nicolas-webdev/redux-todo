import Task from "./Task";
import styled from "styled-components";

const TaskList = () => {
  return (
    <StyledTaskList>
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={false} />
      <Task completed={true} />
    </StyledTaskList>
  );
};

const StyledTaskList = styled.div`
  max-height: 100%;
`;

export default TaskList;
