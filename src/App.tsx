import "./App.css";
import Actions from "./actions/Actions";
import Button from "./button/Button";
import CardLargetrue from "./card/CardLargetrue";
import CardSmalltrue from "./card/CardSmalltrue";
import SectionHeader from "./header/SectionHeader";
import Icon from "./icon/Icon";
import RectangleSmall from "./rectangle/RectangleSmall";
import RoundedSquare from "./roundedSquare/RoundedSquare";
import SideBar from "./sideBar/SideBar";

function App() {
  return (
    <div className="layout">
      <div className="cell ">
        <div className="sideBar">
          <RectangleSmall />
          <SideBar />
        </div>
        <div className="sideBarActions">
          <Actions></Actions>
          <Button icon="+">Create New</Button>
        </div>
      </div>
      <div className="cell">
        <div className="searchBar">
          <Icon color="light-gray" /> <input type="text" placeholder="Search" />
        </div>
        <SectionHeader multipleActions={true}></SectionHeader>
      </div>
      <div className="cell">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        officia voluptatem magni repudiandae, repellat doloremque, commodi,
        facere voluptatum ducimus esse perferendis amet nostrum sit dignissimos!
        Tempore distinctio labore ipsum quos.
      </div>
    </div>
  );
}

export default App;
