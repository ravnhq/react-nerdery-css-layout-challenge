import React, { FC } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Table as TableProps } from "./types";

const Table: FC<TableProps> = ({ data }) => {
  return (
    <table style={{ width: "100%", borderSpacing: "0 16px" }}>
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
