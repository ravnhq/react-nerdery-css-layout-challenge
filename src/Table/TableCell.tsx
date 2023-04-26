import React, { FC } from "react";
import RoundedSquare from "../roundedSquare/RoundedSquare";
import { ReactComponent as EllipsisHorizontal } from "../assets/ellipsisHorizontal.svg";
import { TableCell as TableCellProps } from "./types";

const TableCell: FC<TableCellProps> = ({ name, members, date, type }) => {
  const colors = ["orange", "green", "red", "blue"];
  return (
    <tr>
      <td
        style={{
          alignItems: "center",
          padding: "11px 13px",
          borderRadius: "10px 0px 0px 10px",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <RoundedSquare color={colors[type]} size="small" /> {name}
        </div>
      </td>
      <td style={{ backgroundColor: "white" }}>{members} Members</td>
      <td
        style={{
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "20px",
            }}
          >
            {date} <EllipsisHorizontal />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableCell;
