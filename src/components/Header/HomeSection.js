import styled from "styled-components";

const HomeSection = () => {
  const isActive = true;
  return (
    <StyledHome>
      <span className={isActive ? "active" : "inactive"}>ホーム</span>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 0px 10px;
  cursor: pointer;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
  transition: 0.3s all;
  &:hover {
    opacity: 0.8;
  }
  .active {
    font-weight: bold;
  }
`;

export default HomeSection;
