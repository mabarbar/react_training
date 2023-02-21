import React from "react";
import TableCell from "./TableCell";

const TableRow = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return <TableCell key={key} value={JSON.stringify(value)} />;
      })}
    </tr>
  );
};

export default TableRow;
