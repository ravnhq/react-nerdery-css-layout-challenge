import FileMember from "./file-member";

export interface FileSystemNode {
  id: number,
  filename: string,
  members: FileMember[]
  createdAt: string,
}