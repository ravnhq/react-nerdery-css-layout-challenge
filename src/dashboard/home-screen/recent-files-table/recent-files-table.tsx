import Flex from "../../../shared/ui/flex";
import IconPlaceHolder from "../../../shared/ui/icon-placeholder";

import { ReactComponent as HorizontalEllipsisIcon } from "../../../assets/horizontal=ellipsis=icon.svg";

import "./styles.css";
import RecentFile from "../../../shared/types/recent-file";


const RecentFilesTable = () => {

  const files: RecentFile[] = [
    {
      id: 1,
      filename: 'Travel Landing Page',
      numberOfMembersSharedWith: 5,
      lastModifiedDate: 'Mar 8, 2020',
      type: 'var(--orange)'
    },
    {
      id: 2,
      filename: 'True Photos',
      numberOfMembersSharedWith: 12,
      lastModifiedDate: 'Mar 8, 2020',
      type: 'var(--green)'
    },
    {
      id: 3,
      filename: 'Dashboard Structure',
      numberOfMembersSharedWith: 10,
      lastModifiedDate: 'Mar 9, 2020',
      type: 'var(--red)'
    },
    {
      id: 4,
      filename: 'Character Illustration',
      numberOfMembersSharedWith: 3,
      lastModifiedDate: 'Mar 10, 2020',
      type: 'var(--orange)'
    },

  ]

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
            className="file-card-filename"
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
            {file.numberOfMembersSharedWith} members
          </div>
          <div style={{ flexBasis: "20%" }}>{file.lastModifiedDate}</div>
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
