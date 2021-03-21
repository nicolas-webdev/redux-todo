import styled from "styled-components";
import Checkmark from "./Checkmark";
import { toggleComplete } from "../features/listSlice";
import { useDispatch, useSelector } from "react-redux";

const Task = ({ completed, title, id }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list);
  const activeList = tasks.filter((list) => list.active)[0].list;
  return (
    <StyledTask
      onClick={() => dispatch(toggleComplete({ list: activeList, id }))}
    >
      {/* Add an onlclick event to the text to mark as complete */}
      <Checkmark completed={completed} />
      <TaskTitle
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {title}
      </TaskTitle>
    </StyledTask>
  );
};

const StyledTask = styled.div`
  cursor: pointer;
  padding: 0px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const TaskTitle = styled.h3`
  padding: 3px 6px;
  font-weight: normal;
  font-size: 16px;
  color: #625855;
`;

export default Task;
