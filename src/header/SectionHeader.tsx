import React, { FC } from "react";
import "./SectionHeader.css";
import Icon from "../icon/Icon";

interface SectionHeader {
  multipleActions: boolean;
  children: React.ReactNode;
}
const SectionHeader: FC<SectionHeader> = ({ multipleActions, children }) => {
  return (
    <div className="header flex spaceBetween center">
      <p className="titleHeader">{children}</p>
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
