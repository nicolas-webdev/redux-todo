import styled from "styled-components";
import CreateSectionInput from "./CreateSectionInput";
import SectionList from "./SectionList";

const Header = () => {
  // State with a list of Sections, pass which one is the Active section
  // Default to "Main section"

  return (
    <StyledHeader>
      <HeaderWrapper>
        <CreateSectionInput />
        <SectionList />
      </HeaderWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background: linear-gradient(
    90deg,
    rgba(189, 151, 135, 0.5) 100%,
    #f4e4e1 0.03%
  );
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 1120px;
  padding: 0px 8px;
  margin: -5px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
