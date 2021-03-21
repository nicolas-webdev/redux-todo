import styled from "styled-components";

const Body = ({ children }) => {
  return <StyledBody>{children}</StyledBody>;
};

const StyledBody = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  background: #f7f1ec;
`;

export default Body;
