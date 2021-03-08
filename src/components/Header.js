import styled from "styled-components";
import { sections, sectionSelector } from "../features/counter/fakeState";
import CreateSectionInput from "./CreateSectionInput";

const Header = () => {
  // State with a list of Sections, pass which one is the Active section
  // Default to "Main section"
  const sectionsArray = sectionSelector();
  return (
    <StyledHeader>
      <HeaderWrapper>
        <CreateSectionInput />
        {/* CreateSectionInput */}
        {/* Main Section*/}
        {/* Map array of sections from state */}
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
  height: 80px;
  display: flex;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: auto;
  padding: 0px 16px;
`;

export default Header;
