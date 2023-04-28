import Section from "../../../shared/ui/section";
import SectionHeader from "../../../shared/ui/section-header";


import "./styles.css";
import RecentFilesTable from "../recent-files-table/recent-files-table";

const RecentFilesSection = () => {
  const recentFilesSectionHeader = (
    <SectionHeader
      title="Recent Files"
      append={<div className="section-append-text">View All</div>}
    />
  );



  const recentFilesSectionBody = (
    <RecentFilesTable />
  )

  return (
    <Section
      sectionHeader={recentFilesSectionHeader}
      sectionBody={recentFilesSectionBody}
      contentSeparator={14}
    ></Section>
  );
};

export default RecentFilesSection;
