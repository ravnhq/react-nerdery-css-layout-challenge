import Button from "../../shared/ui/button";
import SpeechBubbleMenu from "../../shared/ui/speech-bubble";
import MenuList from "../menu-list/menu-list";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="gradient-bar"></div>
      <MenuList />
      <div className="sidebar-footer">
        <SpeechBubbleMenu
          items={["Upload Files", "Upload folder", "New folder", "More"]}
        ></SpeechBubbleMenu>
        <Button>Create New</Button>
      </div>
    </div>
  );
};

export default Sidebar;
