import React from "react";
import styles from "./TableCell.module.css"

const Cell = ({ value }) => {
  return <td className={styles.cell}>{value}</td>;
};

export default Cell;
