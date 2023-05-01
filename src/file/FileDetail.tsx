import React, { FC } from "react";
import RoundedSquare from "../roundedSquare/RoundedSquare";
import { File } from "./File";
import "./File.css";

const FileDetail: FC<File> = ({ name, filesAmount, fileSize, type }) => {
  const colors = ["orange", "green", "red", "blue"];
  return (
    <div className="fileDetail flex spaceBetween alignCenter">
      <div className="flex gap-7">
        <RoundedSquare
          color={`${type > colors.length - 1 ? "" : colors[type]}`}
          size="large"
        ></RoundedSquare>
        <div className="flex flexColumn spaceBetween">
          <p className="fs-10">{name}</p>
          <p className="fs-8">{filesAmount} files</p>
        </div>
      </div>
      <div>
        <div
          style={{
            background: "white",
            fontSize: "8px",
            borderRadius: "4px",
            padding: "6px 13px",
            fontWeight: "500",
            marginRight: "5px",
          }}
        >
          <p>{fileSize} GB</p>
        </div>
      </div>
    </div>
  );
};

export default FileDetail;
