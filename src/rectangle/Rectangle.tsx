import React, { FC } from "react";
import "./Rectangle.css";

interface Rectangle {
  size: string;
}

const Rectangle: FC<Rectangle> = ({ size }) => {
  return <div className={`rectangle ${size}`} />;
};

export default Rectangle;
