import React from "react";
import { DSquares, Circles } from "../../Icons/Icons";
import styles from "./card.module.css";

interface Props {
  name: string;
  date: string;
  size?: string;
}

export const Card: React.FC<Props> = (data: Props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-icons"]}>
        <DSquares />
        <Circles quantity={2} />
        <div className={styles["card-menu-button"]}>...</div>
      </div>
      <div className={styles["card-title"]}>{data.name}</div>
      <div className={styles["card-date"]}>Created: {data.date}</div>
    </div>
  );
};
