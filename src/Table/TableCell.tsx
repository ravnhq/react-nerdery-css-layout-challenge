import React, { FC } from "react";
import RoundedSquare from "../roundedSquare/RoundedSquare";
import { ReactComponent as EllipsisHorizontal } from "../assets/ellipsisHorizontal.svg";
import { TableCell as TableCellProps } from "./types";

const TableCell: FC<TableCellProps> = ({ name, members, date, type }) => {
  const colors = ["orange", "green", "red", "blue"];
  return (
    <tr>
      <td>
        <div className="cellContainer">
          <RoundedSquare color={colors[type]} size="small" /> {name}
        </div>
      </td>
      <td>{members} Members</td>
      <td>
        <div>
          <div className="cellAction">
            {date} <EllipsisHorizontal />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableCell;
