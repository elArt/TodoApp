import React from "react";
import Input from "../Input/Input";
import FieldTodo from "../FieldTodo/FieldTodo";


import styles from "./styles.module.scss";



class TodoPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODOS LIST</h1>
        <Input />
        <FieldTodo />
      </div>
    );
  }
}

export default TodoPage;
