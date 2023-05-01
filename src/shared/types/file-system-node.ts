import FileMember from "./user-shared-with";

export interface FileSystemNode {
  id: number,
  filename: string,
  members: FileMember[]
  createdAt: string,
}