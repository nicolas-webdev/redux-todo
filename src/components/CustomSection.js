import styled from "styled-components";

const CustomSection = ({ section }) => {
  return (
    <StyledSection>
      <span>{section.name}</span>
    </StyledSection>
  );
};

const StyledSection = styled.div`
  padding: 0px 8px;
  cursor: pointer;
  font-weight: normal;
  font-size: 18px;
  color: #ffffff;
  transition: 0.3s all;
  &:hover {
    opacity: 0.8;
  }
`;

export default CustomSection;
