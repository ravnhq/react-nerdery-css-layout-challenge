import React, { FC } from "react";
import SectionHeader from "../header/SectionHeader";

interface Section {
  children: React.ReactNode;
  action: boolean;
  title: string;
}
const Section: FC<Section> = ({ children, action, title }) => {
  return (
    <div>
      <SectionHeader multipleActions={action}>{title}</SectionHeader>
      {children}
    </div>
  );
};

export default Section;
