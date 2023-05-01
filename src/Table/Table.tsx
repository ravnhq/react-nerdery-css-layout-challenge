import React, { FC } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Table as TableProps } from "./types";
import "./Table.css";

const Table: FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <TableHeader />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
