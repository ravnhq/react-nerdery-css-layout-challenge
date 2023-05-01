import React, { FC, useRef, useEffect } from "react";
import "./Test.css";

interface Segment {
  amount: number;
  type: number;
}
interface Test {
  data: Segment[];
  total: number;
}
const color = {
  orange: "#FF9F00",
  green: "#4AC29D",
  red: "#FF6860",
  blue: "#689FF8",
  gray: "#BCBECA",
};
const Test: FC<Test> = ({ data, total }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spaceOcupped = data.reduce((accu, cur) => cur.amount + accu, 0);
  const canvasSize = 150;
  const canvasCenter = Math.ceil(canvasSize / 2);
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.translate(canvasCenter, canvasCenter);
    let startAngle = 0;
    const separation = 0.1;
    data.map((file, index, arr) => {
      const percentage = (file.amount * (100 - arr.length * 5)) / spaceOcupped;
      const endAngle = (percentage * 2) / 100 + startAngle;
      ctx.beginPath();
      ctx.arc(0, 0, 70, startAngle * Math.PI, endAngle * Math.PI);
      startAngle = endAngle + separation;
      ctx.lineWidth = 5;
      ctx.strokeStyle =
        color[Object.keys(color)[file.type] as keyof typeof color];
      ctx.lineCap = "round";
      ctx.stroke();
    });
    ctx.translate(-canvasCenter, -canvasCenter);
  }, []);

  return (
    <div className="relative">
      <div className="absolute piePercentage">
        <p className="fs-24">
          {(spaceOcupped * 100) / total}
          <span className="fs-16"> %</span>
        </p>
        <p className="fs-14 graySub">Used</p>
      </div>
      <canvas ref={canvasRef} height={canvasSize} width={canvasSize}></canvas>
    </div>
  );
};

export default Test;
