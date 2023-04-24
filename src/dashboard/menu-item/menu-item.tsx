import "./styles.css";

interface MenuItem {
  name: string;
  active: boolean;
}

const MenuItem = ({ name, active }: MenuItem) => {
  return (
    <div className={`menu-item ${active ? "active" : ""}`}>
      {active ? <div className="menu-item-highlight"></div> : null}
      <div className="icon"></div>
      <div className="menu-item-name">{name}</div>
    </div>
  );
};

export default MenuItem;
