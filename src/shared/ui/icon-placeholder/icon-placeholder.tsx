import { CustomBoxModel } from "../../types/box-model-properties";
import "./style.css";

interface IconPlaceholderProps extends CustomBoxModel {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  filled?: boolean;
  width?: number;
  height?: number;
}

// TODO: Convert to a general icon with color changes and use it in NavItem, MenuItem and TextInput and anywhere else
const IconPlaceHolder = ({
  size,
  color,
  className,
  style,
  filled,
  width,
  height
}: IconPlaceholderProps) => {
  return (
    <div
      className={`icon ${className ?? ''}`}
      style={{
        ...style,
        outline: `1px solid ${color}`,
        backgroundColor: `${filled ? color : "transparent"}`,
        height: `${height ?? size }`,
        width: `${width ?? size}`
      }}
    ></div>
  );
};

export default IconPlaceHolder;
