import FileSummary from "./file-summary";
import "./styles.css";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <FileSummary />
      <div className="details"></div>
    </div>
  );
};

export default HomeScreen;
