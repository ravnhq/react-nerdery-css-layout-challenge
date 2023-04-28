import React, { useRef, useEffect } from "react";
import "./Storage.css";
import ChartDonut from "../chartDonut/ChartDonut";
import RoundedSquare from "../roundedSquare/RoundedSquare";
import Rectangle from "../rectangle/Rectangle";
import Button from "../button/Button";
import UpgradeAdd from "../add/UpgradeAdd";
import FileList from "../file/FileList";

const Storage = () => {
  const fileData = [
    { name: "Documents", filesAmount: 720, fileSize: 200, type: 0 },
    { name: "Documents", filesAmount: 720, fileSize: 125, type: 3 },
    { name: "Documents", filesAmount: 720, fileSize: 75, type: 1 },
    { name: "Documents", filesAmount: 720, fileSize: 50, type: 4 },
  ];
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
      {/* <div
        className="flex spaceBetween"
        style={{
          alignItems: "center",
          paddingBottom: "9px",
          borderBottom: "1px solid var(--gray-separation)",
          marginTop: "30px",
        }}
      >
        <div className="flex" style={{ gap: "7px" }}>
          <RoundedSquare color="orange" size="large"></RoundedSquare>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            className="spaceBetween"
          >
            <p style={{ fontSize: "10px" }}>Documents</p>
            <p style={{ fontSize: "8px" }}>720 files</p>
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
            <p>200 GB</p>
          </div>
        </div>
      </div> */}
      <UpgradeAdd />
      {/* <div
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
      </div> */}
    </div>
  );
  //   const canvasRef = useRef<HTMLCanvasElement>(null);
  //   const draw = (ctx: CanvasRenderingContext2D) => {
  //     ctx.fillStyle = "#000000";
  //     //   context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  //     ctx.beginPath();
  //     ctx.arc(20, 20, 20, 0, 0.5 * 2 * Math.PI);
  //     ctx.fill();
  //   };
  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;
  //     const context = canvas.getContext("2d");
  //     if (!context) return;
  //     draw(context);
  //   }, []);

  //   return <canvas ref={canvasRef} height={139} width={139}></canvas>;
};

export default Storage;

{
  /* <svg version="1.1" width="1000" height="600" viewBox="0 0 16 9">
        <rect
          x="1"
          y="1"
          width="4"
          height="2"
          fill="silver"
          stroke="black"
          stroke-width="0.1"
          ry="1"
          rx="1"
        />
      </svg> */
}
{
  /* <svg width={139} height={139}>
        <path
          d="M 10 10 C 20 20 10 20 50 10"
          stroke="black"
          strokeLinecap="round"
          strokeWidth={5}
        />
      </svg> */
}
{
  /* <div
        style={{
          position: "relative",
          width: "139px",
          height: "139px",
          margin: "0 auto 2em",
          borderRadius: "100%",
          backgroundColor: "red",
        }}
      >
        <div id="part1" className="portion-block">
          <div className="circle"></div>
        </div>
        <div id="part2" className="portion-block">
          <div className="circle"></div>
        </div>
        <div id="part3" className="portion-block">
          <div className="circle"></div>
        </div>
        <p className="center"></p>
      </div> */
}
