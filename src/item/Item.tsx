import React, { FC } from "react";
import Icon from "../icon/Icon";
import "./Item.css";

interface Item {
  children: React.ReactNode;
  gap?: string;
}

const Item: FC<Item> = ({ children, gap }) => {
  return (
    <li className={`item ${gap ? gap : ""}`}>
      <Icon color="gray" /> <span>{children}</span>
    </li>
  );
};

export default Item;
