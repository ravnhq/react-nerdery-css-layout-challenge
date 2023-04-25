import HomeScreen from "./home-screen/Home"
import Sidebar from "./sidebar/sidebar"
import "./styles.css"

const Dashboard = () => {
  return <div className="dashboard">
    <Sidebar />
    <HomeScreen />
  </div>
}

export default Dashboard