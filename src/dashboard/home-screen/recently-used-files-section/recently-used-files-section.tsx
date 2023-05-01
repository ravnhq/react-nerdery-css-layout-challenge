import SectionHeader from "../../../shared/ui/section-header";
import Section from "../../../shared/ui/section";
import ContentSlickDots from "../content-slick-dots";
import Flex from "../../../shared/ui/flex";

import "./styles.css";
import RecentlyUsedFileSectionCard from "../recently-used-file-card";
import { getRecentlyUsedFiles } from "../../data-placeholder";

const RecentlyUsedFilesSection = () => {
  const recentlyUsedSectionHeader = (
    <SectionHeader title="Recently Used" append={<ContentSlickDots />} />
  );

  const recentlyUsedFiles = getRecentlyUsedFiles();

  const recentlyUsedSectionContent = (
    <Flex gap={14}>
      {recentlyUsedFiles.map((file) => (
        <RecentlyUsedFileSectionCard
          key={file.id}
          filename={file.filename}
          createdAt={file.createdAt}
          usersSharedWith={file.members}
        />
      ))}
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

export default RecentlyUsedFilesSection;
