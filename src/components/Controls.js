import styled from "styled-components";
import DeleteTaskIcon from "../img/DeleteTasks.svg";
import DeleteSectionIcon from "../img/DeleteSection.svg";
import { useSelector, useDispatch } from "react-redux";
import { deleteSection, setActive, cleanTasks } from "../features/listSlice";

const Controls = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.list);
  const activeTasks = tasks.filter((list) => list.active)[0];
  const activeList = activeTasks.list;
  const tasksCompleted = activeTasks.tasks.some((task) => task.completed);

  const handleDelete = (selectedList) => {
    if (selectedList === "ホーム") {
      return;
    }
    dispatch(setActive("ホーム"));
    dispatch(deleteSection(selectedList));
  };

  return (
    <StyledControls>
      <EraseTasks
        onClick={() => dispatch(cleanTasks(activeList))}
        style={{
          visibility: tasksCompleted ? "" : "hidden",
          opacity: tasksCompleted ? 1 : 0,
        }}
      >
        <img src={DeleteTaskIcon} alt="" />
        <p>タスクの掃除</p>
      </EraseTasks>
      <EraseList
        onClick={() => handleDelete(activeList)}
        style={{
          visibility: activeList === "ホーム" ? "hidden" : "",
          opacity: activeList === "ホーム" ? 0 : 1,
        }}
      >
        <img src={DeleteSectionIcon} alt="" />
        <p>リストを削除</p>
      </EraseList>
    </StyledControls>
  );
};

const StyledControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

const EraseTasks = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #bd9787;
  transition: all 0.3s ease;
  img {
    height: 24px;
    width: 24px;
  }
  p {
    padding-left: 4px;
    padding-bottom: 2px;
  }
`;

const EraseList = styled(EraseTasks)``;

export default Controls;
