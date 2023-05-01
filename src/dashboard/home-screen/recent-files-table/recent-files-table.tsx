import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";

import { ReactComponent as HorizontalEllipsisIcon } from "../../../assets/horizontal=ellipsis=icon.svg";

import "./styles.css";
import RecentFile from "../../../shared/types/recent-file";
import { getRecentFiles } from "../../data-placeholder";


const RecentFilesTable = () => {

  const files: RecentFile[] = getRecentFiles();

  return (
    <Flex type="column" gap={16}>
      <Flex className="sub-text table-head">
        <div style={{ flexBasis: "50%" }}>Name</div>
        <div style={{ flexBasis: "20%" }}>Members</div>
        <div style={{ flexBasis: "20%" }}>LastModified</div>
        <div style={{ flexBasis: "10%" }}></div>
      </Flex>
      {files.map((file) => (
        <Flex className="sub-text table-row" alignItems="center" key={file.id}>
          <Flex
            style={{ flexBasis: "50%", display: "inline-flex" }}
            alignItems="center"
            className="title-text"
            gap={12}
          >
            <IconPlaceHolder
              size={21}
              filled
              color={file.type}
              style={{ borderRadius: "5px" }}
            />
            {file.filename}
          </Flex>
          <div style={{ flexBasis: "20%" }}>
            {file.members.length} members
          </div>
          <div style={{ flexBasis: "20%" }}>{file.updatedAt}</div>
          <div style={{ flexBasis: "10%" }}>
            <Flex justifyContent="flex-end">
              <HorizontalEllipsisIcon />
            </Flex>
          </div>
        </Flex>
      ))}
    </Flex>
  );
};

export default RecentFilesTable;
