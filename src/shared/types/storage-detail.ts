export interface DocumentTypeReport {
  id: number
  type: string,
  color: string,
  numberOfFiles: number,
  spaceInGB: number,
}

export interface StorageReport {
  totalSpaceInGB: number,
  documentTypes: DocumentTypeReport[]
}