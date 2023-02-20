import React from "react";
import Button from "./Button";
import styles from "./Form.module.css";

const Form = ({ reqType, setReqType }) => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;
