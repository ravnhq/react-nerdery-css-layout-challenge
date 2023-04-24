
export const Square = ({color = '#fff', w = '15' , h = '15'}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 15 15"
    >
      <path stroke={color} d="M0.5 0.5H14.5V14.5H0.5z"></path>
    </svg>
  );
}

export const DSquares = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="31"
      fill="none"
      viewBox="0 0 35 31"
    >
      <path fill="#FFD999" d="M0 5H30V31H0z"></path>
      <path fill="#FF9F00" d="M5 0H35V26H5z"></path>
    </svg>
  );
}

export const Circles = () =>{
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="18"
            fill="none"
            viewBox="0 0 30 18"
        >
            <circle cx="9" cy="9" r="8.5" fill="#fff" stroke="#BEC0C8"></circle>
            <circle cx="21" cy="9" r="8.5" fill="#fff" stroke="#BEC0C8"></circle>
        </svg>
        );
}


