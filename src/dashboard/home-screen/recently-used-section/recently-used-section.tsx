import SectionHeader from "../../../shared/ui/section-header";
import Section from "../../../shared/ui/section";
import ContentSlickDots from "../content-slick-dots";
import Flex from "../../../shared/ui/flex";

import "./styles.css";
import RecentlyUsedFileSectionCard from "../recently-used-file-card";

const RecentlyUsedSection = () => {
  const recentlyUsedSectionHeader = (
    <SectionHeader title="Recently Used" append={<ContentSlickDots />} />
  );


  const users = [
    {
      id: 1,
    },
    {
      id: 4,
    },
    {
      id: 6,
    },
    {
      id: 8,
    },
  ];


  const recentlyUsedSectionContent = (
    <Flex type="row" gap={14}>
      <RecentlyUsedFileSectionCard filename="App Project" createdAt="20.02.2020" usersSharedWith={users}/>
      <RecentlyUsedFileSectionCard filename="App Project" createdAt="20.02.2020" usersSharedWith={users}/>
      <RecentlyUsedFileSectionCard filename="App Project" createdAt="20.02.2020" usersSharedWith={users}/>
    </Flex>
  );

  return (
    <Section
      sectionHeader={recentlyUsedSectionHeader}
      sectionBody={recentlyUsedSectionContent}
      contentSeparator={23}
    ></Section>
  );
};

export default RecentlyUsedSection;
