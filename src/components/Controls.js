import styled from "styled-components";
import DeleteTaskIcon from "../img/DeleteTasks.svg";
import DeleteSectionIcon from "../img/DeleteSection.svg";

const Controls = () => {
  return (
    <StyledControls>
      <EraseTasks>
        <img src={DeleteTaskIcon} alt="" />
        <p>タスクの掃除</p>
      </EraseTasks>
      <EraseList>
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
