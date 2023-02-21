import React from 'react'
import styles from "./ListItem.module.css"

const ListItem = ({ key, item }) => {
  return (
    <li className={styles.li}>{JSON.stringify(item)}</li>
  )
}

export default ListItem