import SharedUser from "../../../shared/types/user-shared-with";
import "./styles.css";

interface sharedWithProps {
  users: SharedUser[];
}

const UsersSharedWith = ({ users }: sharedWithProps) => {
  const firstUsers = users.slice(0, 3);
  const firstUsersAvatars = firstUsers.map((user) => (
    <div
      className="shared-with"
      style={{ border: `1px solid ${user.color ?? "var(--gray)"}` }}
      key={user.id}
    ></div>
  ));

  if (users.length > 3)
    firstUsersAvatars[2] = (
      <div className="shared-with" key={3}>
        <div>{`+${firstUsers.length - 1}`}</div>
      </div>
    );

  return <>{firstUsersAvatars}</>;
};

export default UsersSharedWith;
