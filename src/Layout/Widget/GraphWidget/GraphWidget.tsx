import { Graph } from "../../Icons/Icons";

import styles from "./graph.module.css";
import { GraphMetric } from "./GraphMetric";

interface Props {
  data: Array<GraphData>;
}

export const GraphWidget: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={styles["storage-graph"]}>
        <div className={styles["section-header"]}>
          <h1 className={styles["header"]}>Storage</h1>
        </div>
        <div className={styles["graph-area"]}>
          <Graph />
        </div>

        {props.data?.map((item) => {
          return <GraphMetric key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};
