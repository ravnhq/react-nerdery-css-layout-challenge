import FileCardProperties from "../../../shared/types/file-card-properties";
import Card from "../../../shared/ui/card";
import Flex from "../../../shared/ui/flex";
import RectanglesOverlappedIcon from "../rectangles-overlapped-icon";
import UsersSharedWith from "../users-shared-with";


const RecentlyUsedFileSectionCard = ({
  filename,
  createdAt,
  usersSharedWith,
}: FileCardProperties) => {
  const recentlyUsedFileCardHeader = (
    <Flex
      type="row"
      boxProperties={{ margin: "20px 7px" }}
      gap={31}
      alignItems="center"
    >
      <RectanglesOverlappedIcon />
      <div className="users-shared">
        <UsersSharedWith users={usersSharedWith} />
      </div>
    </Flex>
  );

  const recentlyUsedFileCardBody = (
    <Flex type="column" boxProperties={{ margin: "0px 7px 11px" }} gap={10}>
      <div className="file-card-filename">{filename}</div>
      <div className="file-card-created-at">Created: {createdAt}</div>
    </Flex>
  );

  return (
    <Card
      header={recentlyUsedFileCardHeader}
      body={recentlyUsedFileCardBody}
      contentSeparator={9}
      details
    />
  );
};

export default RecentlyUsedFileSectionCard;
