import React, { FC } from "react";
import "./Button.css";
// const Button = () => {
//   return (
//     <div className="actionButton">
//       Create New <button className="actionButtonIcon">+</button>
//     </div>
//   );
// };

// export default Button;

interface Button {
  children: React.ReactNode;
  icon?: string;
}
const Button: FC<Button> = ({ children, icon }) => {
  if (icon) {
    return (
      <div className="button top-2 smallPadding ">
        {children} <button className="actionButtonIcon">{icon}</button>
      </div>
    );
  } else {
    return <div className="button normalPadding center">{children}</div>;
  }
  //return (
  // <div className="actionButton">
  //   {children}
  //   {icon ? <button className="actionButtonIcon">{icon}</button> : null}
  // </div>
  //);
};

export default Button;
