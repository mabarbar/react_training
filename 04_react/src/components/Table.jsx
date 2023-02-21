import React from "react";
import TableRow from "./TableRow";
import styles from "./Table.module.css"

const Table = ({ items }) => {
  return (
    <div className="tableContainer">
      <table className={styles.tablee}>
        <tbody>
          {items.map(item => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
