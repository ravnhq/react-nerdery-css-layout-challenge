import React, { FC } from "react";
import "./RoundedSquare.css";

interface RoundedSquare {
  color: string;
  size?: string;
}
const RoundedSquare: FC<RoundedSquare> = ({ color, size }) => {
  return (
    <div className={`${size}Square ${color ? `${color}` : "default"}`}></div>
  );
};

export default RoundedSquare;
