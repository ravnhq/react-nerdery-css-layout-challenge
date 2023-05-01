import { DocumentTypeReport } from "../../../shared/types/storage-detail";
import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";



const DocumentTypeDetails = (documentTypeReport: Omit<DocumentTypeReport, 'id'>) => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap={7}
      style={{
        padding: "8px 0px 9px",
        borderBottom: `1px solid var(--light-color)`,
      }}
    >
      <IconPlaceHolder
        color={documentTypeReport.color}
        size={28}
        style={{ borderRadius: "8px" }}
        filled
      />
      <div>
        <div className="title-text font-size-10 line-height-12">{documentTypeReport.type}</div>
        <div className="subtitle-text">{documentTypeReport.numberOfFiles} files</div>
      </div>

      <div className="file-type-space">{documentTypeReport.spaceInGB} GB</div>
    </Flex>
  );
};


export default DocumentTypeDetails;