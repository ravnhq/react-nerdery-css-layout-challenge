import HomeAsideContent from "./home-aside-content/home-aside-content";
import FileSummary from "./file-summary";
import "./styles.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <FileSummary />
      <HomeAsideContent />
    </div>
  );
};

export default HomeScreen;
