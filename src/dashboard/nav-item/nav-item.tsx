import "./styles.css";

interface NavItemProps {
  name: string;
  active: boolean;
}

const NavItem = ({ name, active }: NavItemProps) => {
  return (
    <div className={`nav-item ${active ? "active" : ""}`}>
      {active ? <div className="nav-item-highlight"></div> : null}
      <div className="icon"></div>
      <div className="nav-item-name">{name}</div>
    </div>
  );
};

export default NavItem;
