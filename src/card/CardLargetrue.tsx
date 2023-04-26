import React, { FC } from "react";
import { Card } from "./types";
import "./Card.css";
//import Ellipsis from "../ellipsis/Ellipsis";
import { ReactComponent as Ellipsis } from "../assets/ellipsis.svg";

const CardLargetrue: FC<Card> = ({ children, footer }) => {
  return (
    <div className="card largeCard">
      <div className="cardHeader flex alignCenter relative gap-25">
        <div className="squares flex relative">
          <div className="square squareYellow"></div>
          <div className="square absolute left-5 -top-5"></div>
        </div>
        <div className="circles flex relative">
          <div className="circle"></div>
          <div className="circle absolute"></div>
        </div>
        <Ellipsis className="absolute -top-10 right-0" />
      </div>
      <div className="cardBody fs-12 mt-30">{children}</div>
      <div className="cardFooter fs-8 mt-10">{footer}</div>
    </div>
  );
};

export default CardLargetrue;
