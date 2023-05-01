import React from "react";
import "./Storage.css";
import ChartDonut from "../chartDonut/ChartDonut";
import UpgradeAdd from "../add/UpgradeAdd";
import FileList from "../file/FileList";
import Test from "../experimentalPie/Test";

const Storage = () => {
  const totalSpace = 500;
  const fileData = [
    { name: "Documents", filesAmount: 720, fileSize: 200, type: 0 },
    { name: "Documents", filesAmount: 720, fileSize: 125, type: 3 },
    { name: "Documents", filesAmount: 720, fileSize: 75, type: 1 },
    { name: "Documents", filesAmount: 720, fileSize: 50, type: 4 },
  ];
  const fileFilter = fileData.map((file) => {
    return { amount: file.fileSize, type: file.type };
  });

  return (
    <div>
      <p style={{ fontSize: "20px", color: "var(--sidebar-bg)" }}>Storage</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "23px",
          }}
        >
          <ChartDonut />
        </div>
        <p style={{ fontSize: "8px", color: "var(--gray-fc)" }}>
          420.2 GB of 500 GB used
        </p>
      </div>
      <FileList data={fileData} />
      <UpgradeAdd />
    </div>
  );
};

export default Storage;
