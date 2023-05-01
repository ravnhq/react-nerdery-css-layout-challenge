import AsideContent from "./aside-content/aside-content";
import FileSummary from "./file-summary";
import "./styles.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <FileSummary />
      <AsideContent />
    </div>
  );
};

export default HomeScreen;
