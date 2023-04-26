import React, { FC } from "react";
import "./SectionHeader.css";
import Icon from "../icon/Icon";

interface SectionHeader {
  multipleActions: boolean;
}
const SectionHeader: FC<SectionHeader> = ({ multipleActions }) => {
  return (
    <div className="header flex spaceBetween center">
      <p className="titleHeader">Recent Files</p>
      {multipleActions ? (
        <div className="headerActions">
          <Icon color="dark-blue" />
          <Icon color="lighter-gray" />
        </div>
      ) : (
        <p className="actionHeader">View All</p>
      )}
    </div>
  );
};

export default SectionHeader;
