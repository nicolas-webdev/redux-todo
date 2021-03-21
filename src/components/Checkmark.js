import styled from "styled-components";

const Checkmark = ({ completed }) => {
  return (
    <StyledCheckmark
      // add Onclick event to mark the task as completed
      style={{ background: completed ? "rgba(189, 151, 135, 0.5)" : "#fff" }}
    />
  );
};

const StyledCheckmark = styled.div`
  width: 24px;
  min-width: 24px;
  max-width: 24px;
  height: 24px;
  min-height: 24px;
  max-height: 24px;
  border: 2px solid #bd9787;
  border-radius: 100%;
`;

export default Checkmark;
