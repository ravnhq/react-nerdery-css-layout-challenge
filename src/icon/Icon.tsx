import React, { FC } from "react";
import "./Icon.css";

interface Icon {
  color?: string;
  full?: boolean;
}
const Icon: FC<Icon> = ({ color, full }) => {
  return <div className={`icon ${color} ${full ? "full" : ""}`} />;
};
export default Icon;
