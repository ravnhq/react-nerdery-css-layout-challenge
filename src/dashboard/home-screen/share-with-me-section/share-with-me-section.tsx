import SectionHeader from "../../../shared/ui/section-header";
import Section from "../../../shared/ui/section";
import Flex from "../../../shared/ui/flex";

import ShareWithMeCard from "../share-with-me-card";
import { getSharedWithMeData } from "../../data-placeholder";

const ShareWithMeSection = () => {
  const recentlyUsedSectionHeader = (
    <SectionHeader
      title="Share with Me"
      append={<div className="section-append-text">View All</div>}
    />
  );

  const sharedWithMeFiles = getSharedWithMeData() 

  const recentlyUsedSectionContent = (
    <Flex gap={14}>
      {sharedWithMeFiles.map(file => 
        <ShareWithMeCard
          key={file.id}
          filename={file.filename}
          createdAt={file.createdAt}
          usersSharedWith={file.members}
        />
      )}
    </Flex>
  );

  return (
    <Section
      sectionHeader={recentlyUsedSectionHeader}
      sectionBody={recentlyUsedSectionContent}
      contentSeparator={16}
    ></Section>
  );
};

export default ShareWithMeSection;
