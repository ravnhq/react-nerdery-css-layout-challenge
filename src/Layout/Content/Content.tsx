import { Table } from "./Table/Table";
import { Card } from "./Card/Card";
import { SmallCard } from "./Card/SmallCard";
import { Square } from "../Icons/Icons";

import styles from "./content.module.css";
import { colors } from "../constants";

import { TABLE_DATA, TABLE_HEADERS } from "../../test-data";
import { RECENT_PROJECTS } from "../../test-data";
import { SHARED_PROJECTS } from "../../test-data";

export const Content = () => {
  return (
    <section className={styles["content"]}>
      <div className={styles["search-bar"]}>
        <Square color={colors.LIGHTGRAY} w="25" h="25" />
        <input
          type="search"
          className={styles["search-bar-input"]}
          name="search"
          id="search"
          placeholder="Search"
        />
      </div>

      <div className={styles["recently-used"]}>
        <div className={styles["section-header"]}>
          <h1 className={styles["header"]}>Recently used</h1>
          <div className={styles["pagination"]}>
            <Square color={colors.GRAYVARIANT} />
            <Square color={colors.DARKGRAY} />
          </div>
        </div>
        <div className={styles["box-group"]}>
          {RECENT_PROJECTS.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
      </div>

      <div className={styles["recent-files"]}>
        <div className={styles["section-header"]}>
          <h1 className={styles["header"]}>Recent files</h1>
          <label>View All</label>
        </div>
        <Table data={TABLE_DATA} headers={TABLE_HEADERS} />
      </div>

      <div className={styles["share-w-me"]}>
        <div className={styles["section-header"]}>
          <h1 className={styles["header"]}>Share with me </h1>
          <label>View All</label>
        </div>
        <div className={styles["box-group"]}>
          {SHARED_PROJECTS.map((item) => {
            return <SmallCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
