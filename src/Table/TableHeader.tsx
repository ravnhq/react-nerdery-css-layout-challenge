import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th style={{ textAlign: "left" }}>Name</th>
        <th style={{ textAlign: "left" }}>Members</th>
        <th style={{ textAlign: "left" }}>Last Modified</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
