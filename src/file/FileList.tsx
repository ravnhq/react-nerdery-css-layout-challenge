import React, { FC } from "react";
import { FileList as FileListProps } from "./File";
import FileDetail from "./FileDetail";
import "./File.css";

const FileList: FC<FileListProps> = ({ data }) => {
  return (
    <div className="fileList flex flexColumn gap-8">
      {data.map((file, index) => (
        <FileDetail
          key={Date.now() + (index + index / 2) + 1}
          name={file.name}
          filesAmount={file.filesAmount}
          fileSize={file.fileSize}
          type={file.type}
        ></FileDetail>
      ))}
    </div>
  );
};

export default FileList;
