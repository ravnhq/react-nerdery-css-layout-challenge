import HomeScreen from "./home-screen"
import Sidebar from "./sidebar"
import "./styles.css"

const Dashboard = () => {
  return <div className="dashboard">
    <Sidebar />
    <HomeScreen />
  </div>
}

export default Dashboard