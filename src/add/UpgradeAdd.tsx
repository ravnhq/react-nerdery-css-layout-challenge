import React from "react";
import Rectangle from "../rectangle/Rectangle";
import Button from "../button/Button";

const UpgradeAdd = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "17px 38px",
        borderRadius: "18px",
        marginTop: "34px",
        display: "flex",
        flexDirection: "column",
        gap: "23px",
      }}
    >
      <Rectangle size="large"></Rectangle>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "12px" }}>Buy more space now!</p>
        <p style={{ fontSize: "8px", color: "var(--gray-fc)" }}>
          Upgrade to cloud premium
        </p>
      </div>
      <div style={{ height: "30px", fontSize: "10px", width: "116px" }}>
        <Button>Upgrade Account!</Button>
      </div>
    </div>
  );
};

export default UpgradeAdd;
