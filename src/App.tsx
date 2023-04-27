import "./App.css";
import Table from "./Table/Table";
import Actions from "./actions/Actions";
import Button from "./button/Button";
import CardLarge from "./card/CardLarge";
import CardSmall from "./card/CardSmall";
import Icon from "./icon/Icon";
import RectangleSmall from "./rectangle/RectangleSmall";
import Section from "./section/Section";
import SideBar from "./sideBar/SideBar";

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
          <div style={{ display: "flex", gap: "14px", marginTop: "23px" }}>
            {files.map((file) => (
              <CardLarge footer={file.date} numberUsers={file.users}>
                {file.name}
              </CardLarge>
            ))}
          </div>
        </Section>
        {/* <Section title="Recent Files" action={false}>
          <Table data={tableData}></Table>
        </Section> */}
        <Section title="Share with me" action={false}>
          <div style={{ display: "flex", gap: "13px" }}>
            {sharedFiles.map((file) => (
              <CardSmall footer={file.date} numberUsers={file.users}>
                {file.name}
              </CardSmall>
            ))}
          </div>
        </Section>
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
