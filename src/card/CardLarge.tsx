import React, { FC } from "react";
import Card from "./Card";

export interface CardLarge {
  children: React.ReactNode;
  footer: string;
}
const CardLarge: FC<CardLarge> = ({ children, footer }) => {
  return (
    <Card
      size="large"
      circleDistance="short"
      padding="large"
      footerText={footer}
    >
      {children}
    </Card>
  );
};

export default CardLarge;
