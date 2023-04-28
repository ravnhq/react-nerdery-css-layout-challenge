import SharedUser from "./user-shared-with";

interface FileCardProperties {
  filename: string,
  createdAt: string,

  usersSharedWith: SharedUser[]
}

export default FileCardProperties