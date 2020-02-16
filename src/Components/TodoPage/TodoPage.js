import React from "react";
import Input from "../Input/Input";
import FieldTodo from "../FieldTodo/FieldTodo";
import * as data from "../../mocks/todo.json";

import styles from "./styles.module.scss";

const todosList = data.items;

class TodoPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODOS LIST</h1>
        <Input />
        <FieldTodo todosList={todosList} />
      </div>
    );
  }
}

export default TodoPage;
