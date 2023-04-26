import React, { FC } from "react";
import Card from "./Card";

export interface CardSmall {
  children: React.ReactNode;
  footer: string;
}
const CardSmall: FC<CardSmall> = ({ children, footer }) => {
  return (
    <Card
      size="small"
      circleDistance="long"
      padding="small"
      footerText={footer}
    >
      {children}
    </Card>
  );
};

export default CardSmall;
