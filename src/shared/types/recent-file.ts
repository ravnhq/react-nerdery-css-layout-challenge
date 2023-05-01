import { FileSystemNode } from "./file-system-node"

interface RecentFile extends Omit<FileSystemNode, 'createdAt'>{
  updatedAt: string,
  type: string,
}

export default RecentFile