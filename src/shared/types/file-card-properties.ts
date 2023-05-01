import FileMember from "./file-member";

interface FileCardProperties {
  filename: string,
  createdAt: string,

  usersSharedWith: FileMember[]
}

export default FileCardProperties