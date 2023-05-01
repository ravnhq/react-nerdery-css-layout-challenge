import React, { FC } from "react";
import { Card } from "./types";
import "./Card.css";

const colors = ["orange", "green", "red", "blue"];

const CardSmall: FC<Card> = ({ children, footer, numberUsers }) => {
  return (
    <div className="card smallCard">
      <div className="cardHeader flex alignCenter gap-50">
        <div className="square"></div>
        {numberUsers.length ? (
          <div className="circles flex relative">
            {numberUsers.map((user, index) => {
              const moreUsers = index - 2;
              if (index === 0) {
                return (
                  <div
                    key={Date.now() + (index + 2) + 1}
                    className={`circle ${colors[user.type]}`}
                  ></div>
                );
              }
              if (index < 3) {
                return (
                  <div
                    key={Date.now() + (index + 2) + 1}
                    className={`circle absolute ${colors[user.type]}`}
                    style={{ left: `${12 * index}px` }}
                  ></div>
                );
              }
              if (index === numberUsers.length - 1) {
                return (
                  <div
                    key={Date.now() + (index + 2) + 1}
                    className="absolute cardCounter"
                  >
                    +{moreUsers}
                  </div>
                );
              }
            })}
          </div>
        ) : null}
      </div>
      <div className="cardBody fs-12 mt-6">{children}</div>
      <div className="cardFooter fs-8 mt-2">{footer}</div>
    </div>
  );
};

export default CardSmall;
