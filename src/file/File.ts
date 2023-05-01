export interface File {
  name: string;
  filesAmount: number;
  fileSize: number;
  type: number;
}

export interface FileList {
  data: File[];
}
