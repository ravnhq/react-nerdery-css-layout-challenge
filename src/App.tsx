import "./App.css";
import Table from "./Table/Table";
import Actions from "./actions/Actions";
import Button from "./button/Button";
import CardLarge from "./card/CardLarge";
import CardSmall from "./card/CardSmall";
import SectionHeader from "./header/SectionHeader";
import Icon from "./icon/Icon";
import RectangleSmall from "./rectangle/RectangleSmall";
import SideBar from "./sideBar/SideBar";

const tableData = [
  { name: "Travel Landing Page", members: 5, date: "Mar 8, 2020", type: 0 },
  { name: "True Photos", members: 12, date: "Mar 8, 2020", type: 1 },
  { name: "Dashboard Structure", members: 10, date: "Mar 9, 2020", type: 2 },
  { name: "Character Illustration", members: 3, date: "Mar 10, 2020", type: 0 },
];

const Users = [
  { avatar: "", id: 1, type: 1 },
  { avatar: "", id: 1, type: 2 },
];
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
        {/* <SectionHeader multipleActions={true}></SectionHeader>
        <Table data={tableData}></Table> */}
        <CardLarge numberUsers={Users} footer="footer">
          Card
        </CardLarge>
        <CardSmall footer="footer" numberUsers={Users}>
          Small
        </CardSmall>
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
