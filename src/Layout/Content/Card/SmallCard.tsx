import React from "react";
import { SingleSquare, Circles } from "../../Icons/Icons";
import styles from "./smallcard.module.css";
import { colors } from "../../constants";

interface Props {
  data: Project;
}

export const SmallCard: React.FC<Props> = (project: Props) => {
  return (
    <div className={styles["small-card"]}>
      <div className={styles["small-card-icons"]}>
        <SingleSquare color={colors.ORANGE} w="45" h="36" />
        <Circles quantity={project.data?.comments} />
      </div>
      <div className={styles["small-card-title"]}>{project.data?.name}</div>
      <div className={styles["small-card-date"]}>
        Created: {project.data?.creation_date}
      </div>
    </div>
  );
};
