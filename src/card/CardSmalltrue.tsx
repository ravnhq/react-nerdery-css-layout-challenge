import React, { FC } from "react";
import { Card } from "./types";
import "./Card.css";

const CardSmalltrue: FC<Card> = ({ children, footer }) => {
  return (
    <div className="card smallCard">
      <div className="cardHeader flex alignCenter gap-50">
        <div className="square"></div>
        <div className="circles flex">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="cardBody fs-12 mt-6">{children}</div>
      <div className="cardFooter fs-8 mt-2">{footer}</div>
    </div>
  );
};

export default CardSmalltrue;
