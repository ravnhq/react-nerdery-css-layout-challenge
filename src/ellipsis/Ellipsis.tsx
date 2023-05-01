import React from "react";

function Ellipsis() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="13"
      fill="none"
      viewBox="0 0 3 13"
      style={{ position: "absolute", right: "13px", top: "10px" }}
    >
      <circle cx="1.5" cy="1.5" r="1.5" fill="#C4C4C4"></circle>
      <circle cx="1.5" cy="6.5" r="1.5" fill="#C4C4C4"></circle>
      <circle cx="1.5" cy="11.5" r="1.5" fill="#C4C4C4"></circle>
    </svg>
  );
}

export default Ellipsis;
