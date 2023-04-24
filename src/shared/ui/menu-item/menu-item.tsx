import MenuIcon from "../menu-icon";
import "./styles.css";

interface MenuItemProps {
  name: string
  className?: string,
  gap: number,
  color?: string
}

const MenuItem = ({ name, className, gap, color }: MenuItemProps) => {
  return (
    <div className={`menu-item ${className ?? ''}`} style={{gap, color}}>
      <MenuIcon />
      <div className="menu-item-name">{name}</div>
    </div>
  );
};

export default MenuItem;
