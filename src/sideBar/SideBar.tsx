import React from "react";
import Icon from "../icon/Icon";
import "./SideBar.css";
import Item from "../item/Item";

const SideBar = () => {
  return (
    <nav className="sideBarContent">
      <ul className="sideBarList">
        <Item gap="gap-2">Home</Item>
        <Item gap="gap-2">My Files</Item>
        <Item gap="gap-2">Recent Files</Item>
        <Item gap="gap-2">Shared Files</Item>
        <Item gap="gap-2">File Request</Item>
        <Item gap="gap-2">Trash</Item>
      </ul>
    </nav>
  );
};

export default SideBar;
