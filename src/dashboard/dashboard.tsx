import Sidebar from "./sidebar/sidebar"
import "./styles.css"

const Dashboard = () => {
  return <div className="dashboard">
    <Sidebar />

    <div style={{background: 'black', outline: '1px solid red'}}></div>
    <div style={{background: 'black', outline: '1px solid red'}}></div>
  </div>
}

export default Dashboard