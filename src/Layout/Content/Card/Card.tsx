import React from "react";
import { DSquares, Circles } from "../../Icons/Icons";
import styles from "./card.module.css";

interface Props {
  data: Project;
}

export const Card: React.FC<Props> = (project: Props) => {
  const cardClicked = () => {
    alert("A project was clicked");
  };
  return (
    <div className={styles["card"]}>
      <div className={styles["card-icons"]}>
        <DSquares />
        <Circles quantity={project.data?.comments} />
        <div onClick={cardClicked} className={styles["card-menu-button"]}>
          ...
        </div>
      </div>
      <div className={styles["card-title"]}>{project.data?.name}</div>
      <div className={styles["card-date"]}>
        Created: {project.data?.creation_date}
      </div>
    </div>
  );
};
