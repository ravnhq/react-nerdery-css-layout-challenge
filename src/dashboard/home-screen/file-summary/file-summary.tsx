import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";
import TextField from "../../../shared/ui/text-field";
import RecentlyUsedFilesSection from "../recently-used-files-section";
import ShareWithMeSection from "../share-with-me-section";

import "./styles.css";

const FileSummary = () => {

  return (
    <div className="content-section">
      <TextField placeholder="Search" preppendIcon={<IconPlaceHolder />} />
      <Flex type="column" gap={38} boxProperties={{ marginTop: 25 }}>
        <RecentlyUsedFilesSection />
        <ShareWithMeSection />
      </Flex>
    </div>
  );
};

export default FileSummary;
