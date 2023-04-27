import { Square } from "../Icons/Icons";
import { GraphWidget } from "./GraphWidget/GraphWidget";
import styles from "./widget.module.css";
import primitives from "../Primitives/primitives.module.css";
import { colors } from "../constants";

import { GRAPH_DATA } from "../../test-data";

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
      <div className={primitives["divider"]} />
      <GraphWidget data={GRAPH_DATA} />
      <div className={primitives["divider"]} />

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
