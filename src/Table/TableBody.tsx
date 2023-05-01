import React, { FC } from "react";
import TableCell from "./TableCell";
import { TableBody as TableBodyProps } from "./types";

const TableBody: FC<TableBodyProps> = ({ data }) => {
  return (
    <>
      {data.length ? (
        <tbody>
          {data.map((cell, index) => (
            <TableCell
              key={Date.now() * index}
              name={cell.name}
              members={cell.members}
              date={cell.date}
              type={cell.type}
            />
          ))}
        </tbody>
      ) : (
        <div>no data</div>
      )}
    </>
  );
};

export default TableBody;
