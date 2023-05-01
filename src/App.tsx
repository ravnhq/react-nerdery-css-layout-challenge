import "./App.css";
import Table from "./Table/Table";
import Actions from "./actions/Actions";
import Button from "./button/Button";
import Cards from "./card/Cards";
import Circle from "./circle/Circle";
import Icon from "./icon/Icon";
import RectangleSmall from "./rectangle/RectangleSmall";
import Section from "./section/Section";
import SideBar from "./sideBar/SideBar";
import Storage from "./storage/Storage";

const tableData = [
  { name: "Travel Landing Page", members: 5, date: "Mar 8, 2020", type: 0 },
  { name: "True Photos", members: 12, date: "Mar 8, 2020", type: 1 },
  { name: "Dashboard Structure", members: 10, date: "Mar 9, 2020", type: 2 },
  { name: "Character Illustration", members: 3, date: "Mar 10, 2020", type: 0 },
];
const sharedFiles = [
  {
    name: "Landing Page",
    date: "Created: 20.02.2020",
    users: [
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 2 },
    ],
  },
  {
    name: "Illustration Pack",
    date: "Created: 20.02.2020",
    users: [
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 2 },
      { avatar: "", id: 1, type: 0 },
    ],
  },
  {
    name: "CV Design",
    date: "Created: 20.02.2020",
    users: [
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 0 },
    ],
  },
];
const files = [
  {
    name: "App Project",
    date: "Created: 20.02.2020",
    users: [
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
    ],
  },
  {
    name: "Project: fitbit",
    date: "Created: 28.02.2020",
    users: [
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
    ],
  },
  {
    name: "Client Documents",
    date: "Created: 4.03.2020",
    users: [
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
      { avatar: "", id: 1, type: 1 },
    ],
  },
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
        <Section title="Recently Used" action={true}>
          <Cards data={files} shared={false}></Cards>
        </Section>
        <Section title="Recent Files" action={false}>
          <Table data={tableData}></Table>
        </Section>
        <Section title="Share with me" action={false}>
          <Cards data={sharedFiles} shared={true}></Cards>
        </Section>
      </div>
      <div className="cell">
        <div className="flex spaceBetween center">
          <div className="flex gap-13">
            <Icon full={true}></Icon>
            <Icon full={true}></Icon>
          </div>
          <div className="flex center gap-1">
            <span className="fs-12">Name</span> <Circle />
          </div>
        </div>
        <Storage />
      </div>
    </div>
  );
}

export default App;
