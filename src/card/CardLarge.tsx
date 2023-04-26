import React, { FC } from "react";
import { Card } from "./types";
import "./Card.css";
import { ReactComponent as Ellipsis } from "../assets/ellipsis.svg";

const CardLarge: FC<Card> = ({ children, footer, numberUsers }) => {
  return (
    <div className="card largeCard">
      <div className="cardHeader flex alignCenter relative gap-25">
        <div className="squares flex relative">
          <div className="square squareYellow"></div>
          <div className="square absolute left-5 -top-5"></div>
        </div>
        {numberUsers.length ? (
          <div className="circles flex relative">
            {numberUsers.map((user, index) => {
              const moreUsers = index - 2;
              if (index === 0) {
                return <div className="circle"></div>;
              }
              if (index < 3) {
                return (
                  <div
                    className="circle absolute"
                    style={{ left: `${12 * index}px` }}
                  ></div>
                );
              }
              if (index === numberUsers.length - 1) {
                return <div className="absolute cardCounter">+{moreUsers}</div>;
              }
            })}
          </div>
        ) : null}

        <Ellipsis className="absolute -top-10 right-0" />
      </div>
      <div className="cardBody fs-12 mt-30">{children}</div>
      <div className="cardFooter fs-8 mt-10">{footer}</div>
    </div>
  );
};

export default CardLarge;
