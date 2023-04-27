import { SingleSquare } from "../../Icons/Icons";
import styles from "./graph.module.css";
import primitives from "../../Primitives/primitives.module.css";

interface Props {
  data: GraphData;
}

export const GraphMetric: React.FC<Props> = (item: Props) => {
  return (
    <div className={styles["graph-metric"]}>
      <div className={styles["document-data"]}>
        <SingleSquare color={item.data.color} rounded={true} />
        <label className={styles["graph-metric-label"]}>
          {item.data.name} <span>{`${item.data.files} Files`} </span>
        </label>
      </div>
      <div className={styles["button-group"]}>
        <button className={primitives["secondary-button"]}>
          {`${item.data.size}${item.data.size_type}`}
        </button>
      </div>
    </div>
  );
};
