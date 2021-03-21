import styled from "styled-components";
import Checkmark from "./Checkmark";

const Task = ({ completed }) => {
  return (
    <StyledTask>
      {/* Add an onlclick event to the text to mark as complete */}
      <Checkmark completed={completed} />
      <TaskTitle
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        これがタスクのタイトル
      </TaskTitle>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TaskTitle = styled.h3`
  padding: 3px 6px;
  margin-top: -3px;
  font-weight: normal;
  line-height: 35px;
  font-size: 24px;
  color: #625855;
`;

export default Task;
