import { Navbar } from "./Navbar/Navbar";
import { Content } from "./Content/Content";
import { Widget } from "./Widget/Widget";
import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <div className={styles["layout-container"]}>
        <Navbar />
        <Content />
        <Widget />
      </div>
    </>
  );
}

export default Layout;
