import IconPlaceHolder from "../../../shared/ui/icon-placeholder";
import './styles.css'


const RectanglesOverlappedIcon = () => {
  return (
    <>
      <IconPlaceHolder
        className="rectangles-overlapped square-1"
        color="#FFD999"
        height={26}
        width={30}
        filled
      >
        <IconPlaceHolder
          className="rectangles-overlapped square-2"
          color="#FF9F00"
          height={26}
          width={30}
          filled
        />
      </IconPlaceHolder>
    </>
  );
};

export default RectanglesOverlappedIcon;
