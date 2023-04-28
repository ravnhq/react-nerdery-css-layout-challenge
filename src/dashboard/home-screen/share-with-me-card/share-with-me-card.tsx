import FileCardProperties from "../../../shared/types/file-card-properties";
import Card from "../../../shared/ui/card";
import Flex from "../../../shared/ui/flex";
import SingleRectangleIcon from "../single-rectangle-icon";
import UsersSharedWith from "../users-shared-with";



const ShareWithMeCard = ({filename, createdAt, usersSharedWith} : FileCardProperties) => {
  const recentlyUsedFileCardHeader = (
    <Flex
      type="row"
      boxProperties={{ margin: "8px 6px" }}
      gap={31}
      alignItems="center"
    >
      <SingleRectangleIcon   />
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
      contentSeparator={6}
    />
  );
}

export default ShareWithMeCard