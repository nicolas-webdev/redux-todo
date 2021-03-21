import styled from "styled-components";
import CustomSection from "./CustomSection";
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../../features/listSlice";

const SectionList = () => {
  const sectionsArray = useSelector((state) => state.list);
  const dispatch = useDispatch();
  return (
    <StyledSections>
      {sectionsArray.map((section) => (
        <CustomSection
          key={section.name}
          section={section}
          handler={() => dispatch(setActive(section.list))}
        />
      ))}
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
