import NavItem from "../nav-item/nav-item";
import "./styles.css"

const MenuList = () => {
  const items = [
    {name: "Home", active: true},
    {name: "My Files", active: false},
    {name: "Recent Files", active: false},
    {name: "Shared Filed", active: false},
    {name: "File Request", active: false},
    {name: "Trash", active: false},
  ];

  return (
    <div className="menu-list">
      {items.map((item, idx) => (
        <NavItem key={idx} name={item.name} active={item.active} />
      ))}
    </div>
  );
};

export default MenuList;
