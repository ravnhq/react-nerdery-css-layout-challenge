import React from "react";
import Item from "../item/Item";
import "./Actions.css";

const Actions = () => {
  return (
    <div className="actions">
      <ul className="actionsList">
        <Item>Upload files</Item>
        <Item>Upload folder</Item>
        <Item>New Folder</Item>
        <Item>More</Item>
      </ul>
      <div className="tail"></div>
    </div>
  );
};

export default Actions;
