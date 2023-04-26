import { Graph, SingleSquare, Square } from "../Icons/Icons";
import styles from "./widget.module.css";
import primitives from "../Primitives/primitives.module.css";
import { colors } from "../constants";

export const Widget = () => {
  return (
    <section className={styles["widget-area"]}>
      <div className={styles["section-header"]}>
        <div className={styles["profile"]}>
          <div className={styles["pagination"]}>
            <Square color={colors.GRAYVARIANT} />
            <Square color={colors.DARKGRAY} />
          </div>
          <label>Name </label>
          <div className={styles["picture"]}></div>
        </div>
      </div>
      <div className={styles["divider"]} />

      <div className={styles["storage-graph"]}>
        <div className={styles["section-header"]}>
          <h1 className={styles["header"]}>Storage</h1>
        </div>
        <Graph />
        <div className={styles["graph-metric"]}>
          <SingleSquare color={colors.ORANGE} rounded={true} />
          <label className={styles["graph-metric-label"]}>
            Documents <span>720 files</span>
          </label>
          <button className={primitives["secondary-button"]}>200GB</button>
        </div>
        <div className={styles["divider"]} />

        <div className={styles["graph-metric"]}>
          <SingleSquare color={colors.NAVYBLUE} rounded={true} />
          <label className={styles["graph-metric-label"]}>
            Documents <span>720 files</span>
          </label>
          <button className={primitives["secondary-button"]}>125GB</button>
        </div>
        <div className={styles["divider"]} />

        <div className={styles["graph-metric"]}>
          <SingleSquare color={colors.GREEN} rounded={true} />
          <label className={styles["graph-metric-label"]}>
            Documents <span>720 files</span>
          </label>
          <button className={primitives["secondary-button"]}>75GB</button>
        </div>
        <div className={styles["divider"]} />

        <div className={styles["graph-metric"]}>
          <SingleSquare color={colors.DARKGRAY} rounded={true} />
          <label className={styles["graph-metric-label"]}>
            Documents <span>720 files</span>
          </label>
          <button className={primitives["secondary-button"]}>50GB</button>
        </div>
      </div>
      <div className={styles["divider"]} />

      <div className={primitives["content-area"]}>
        <div className={styles["ad-img"]}></div>
        <label>Buy more space now!</label>
        <span>Upgrade to cloud premium</span>
        <button className={primitives["primary-button"]}>
          Upgrade Account!
        </button>
      </div>
    </section>
  );
};
