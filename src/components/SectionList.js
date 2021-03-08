import styled from "styled-components";
import HomeSection from "./HomeSection";
import CustomSection from "./CustomSection";
import { sectionSelector } from "../features/counter/fakeState";

const SectionList = () => {
  const sectionsArray = sectionSelector();
  return (
    <StyledSections>
      <HomeSection />
      {sectionsArray.length > 0
        ? sectionsArray.map((section) => <CustomSection section={section} />)
        : null}
    </StyledSections>
  );
};

const StyledSections = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none;
  }
  & > * {
    flex-shrink: 0;
  }
`;

export default SectionList;
