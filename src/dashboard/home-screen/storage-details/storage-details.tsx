import Flex from "../../../shared/ui/flex";

import { ReactComponent as StorageGraph } from "../../../assets/storage-widget.svg";

import "./style.css";
import DocumentTypeDetails from "./document-type-details";
import { getStorageReport } from "../../data-placeholder";

const StorageDetails = () => {
  const storageReport = getStorageReport();

  const storageUsed = storageReport.documentTypes.reduce(
    (spaceUsed, currentType) => spaceUsed + currentType.spaceInGB,
    0
  );
  return (
    <Flex type="column" alignItems="center" gap={20}>
      <StorageGraph></StorageGraph>
      <div className="subtitle-text">
        {storageUsed} GB of {storageReport.totalSpaceInGB} GB used
      </div>
      <div>
        {storageReport.documentTypes.map((documentType) => (
          <DocumentTypeDetails
            key={documentType.id}
            color={documentType.color}
            spaceInGB={documentType.spaceInGB}
            type={documentType.type}
            numberOfFiles={documentType.numberOfFiles}
          />
        ))}
      </div>
    </Flex>
  );
};

export default StorageDetails;
