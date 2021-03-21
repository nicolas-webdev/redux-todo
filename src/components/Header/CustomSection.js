import styled from "styled-components";

const CustomSection = ({ section, handler }) => {
  return (
    <StyledSection onClick={handler}>
      <span style={{ fontWeight: section.active ? "bold" : "normal" }}>
        {section.list}
      </span>
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
