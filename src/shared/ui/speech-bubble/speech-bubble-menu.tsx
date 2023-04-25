import MenuItem from "../menu-item/menu-item";
import "./style.css";

interface SpeechBubbleMenuProps {
  items: string[];
  classNames?: string;
  style?: React.CSSProperties;
}

const SpeechBubbleMenu = ({
  items,
  classNames,
  style,
}: SpeechBubbleMenuProps) => {
  return (
    <div className={`speech-bubble-menu ${classNames ?? ' '}`} style={style}>
      <div className="menu-items">
        {items.map((item, idx) => (
          <MenuItem name={item} key={idx} gap={7}/> 
        ))}
      </div>
      <div className="speech-bubble-tail"></div>
    </div>
  );
};

export default SpeechBubbleMenu;
