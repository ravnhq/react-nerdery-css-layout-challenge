import styles from "./table.module.css";
import { SingleSquare } from "../../Icons/Icons";

interface TableProps {
  headers: Array<string>;
  data: Array<RecentFile>;
}

export const Table = (props: TableProps) => {
  const [first, second, third] = props.headers;
  const rowActionHandler = () => {
    alert("A row was clicked");
  };

  return (
    <table className={styles["table-custom"]}>
      <thead>
        <tr>
          <th>{first}</th>
          <th>{second}</th>
          <th>{third}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <SingleSquare color={item.color} rounded={true}></SingleSquare>{" "}
                {item.name}
              </td>
              <td>
                <span className={styles["row-data"]}>
                  {`${item.members} Members`}
                </span>
              </td>
              <td>
                <span className={styles["row-data"]}>{item.last_modified}</span>
              </td>

              <td>
                <span
                  onClick={rowActionHandler}
                  className={styles["row-action"]}
                >
                  ...
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
