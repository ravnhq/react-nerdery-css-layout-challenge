import React, { FC } from "react";
import Ellipsis from "../ellipsis/Ellipsis";
import "./Card.css";

interface Card {
  size?: string;
  padding?: string;
  circleDistance?: string;
  children: React.ReactNode;
  footerText: string;
}
const Card: FC<Card> = ({
  size,
  padding,
  circleDistance,
  children,
  footerText,
}) => {
  return (
    <div className={`card ${padding}Padding ${size}Card relative`}>
      <div className="cardHeader flex " style={{ alignItems: "center" }}>
        <div className="squares flex relative">
          {size === "large" ? (
            <div className="square absolute left-5 -top-5"></div>
          ) : null}
          <div
            className={`square ${size === "large" ? "secondarySquare" : ""}`}
          ></div>
        </div>
        <div className={`circles flex relative ${circleDistance}Distance`}>
          <div className="circle absolute"></div>
          <div className="circle absolute"></div>
        </div>
        {size === "large" ? <Ellipsis /> : null}
      </div>
      <div className={`cardBody ${size === "large" ? "margin-30" : ""}`}>
        {children}
      </div>
      <div className={`cardFooter ${size === "large" ? "margin-10" : ""} `}>
        {footerText}
      </div>
    </div>
  );
  //   return (
  //     <div className={`card ${size}Card ${padding}Padding`}>
  //       <div className="cardHeader">
  //         <div className="">
  //           {size === "large" ? (
  //             <div className="square squareSecondary"></div>
  //           ) : null}
  //           <div className={`square ${large ? "float minustop-5 left-5" : ""}`} />
  //         </div>
  //         <div className="circles">
  //           <div className="circle"></div>
  //           <div className="circle"></div>
  //         </div>
  //         <Ellipsis></Ellipsis>
  //       </div>
  //       <div className="cardBody">Landing Page</div>
  //       <div className="cardFooter">Created: 20.02.2020</div>
  //     </div>
  //   );
  //   if (large) {
  //     return (
  //       <div className={`card ${size}Card`}>
  //         <div className="cardHeader">
  //           <div className="square" />
  //           <div className="circles">
  //             <div className="circle"></div>
  //             <div className="circle"></div>
  //           </div>
  //           {/* {size === "large" ? <div>...</div> : <div>dsa</div>} */}
  //         </div>
  //         <div className="cardBody">Landing Page</div>
  //         <div className="cardFooter">Created: 20.02.2020</div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="card">
  //         <div className="cardHeader">
  //           <div className="square" />
  //           <div className="circles">
  //             <div className="circle"></div>
  //             <div className="circle"></div>
  //           </div>
  //         </div>
  //         <div className="cardBody">Landing Page</div>
  //         <div className="cardFooter">Created: 20.02.2020</div>
  //       </div>
  //     );
  //   }
};

export default Card;
