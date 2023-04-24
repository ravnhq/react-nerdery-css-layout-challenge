import Button from "../../shared/ui/button";
import MenuList from "../menu-list/menu-list";
import "./styles.css"

const Sidebar = () => {

  return <div className="sidebar">
    <div className="gradient-bar"></div>
    <MenuList />
    <div className="create-section">
      <Button>Create New</Button>
    </div>
  </div>
}


export default Sidebar;