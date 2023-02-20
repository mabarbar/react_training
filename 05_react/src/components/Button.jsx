import React from "react";
import styles from "./Button.module.css";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className={styles.formButton}
      onClick={() => {
        setReqType(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
};
export default Button;
