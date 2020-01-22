import React from "react";
import { Icon, List } from "antd";
import styles from "./styles.module.scss";

const Todo = ({ todos, deletTodoTask, editPost }) => {
  const todoList = todos.length
    ? todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <span
            className={styles.iconsEdit}
            onClick={() => {
              editPost(todo.id, todo.text, todos);
            }}
          >
            <Icon type="edit" />
          </span>
          <span
            className={styles.iconsDelet}
            onClick={() => {
              deletTodoTask(todo.id, todos);
            }}
          >
            {" "}
            <Icon type="delete" />
          </span>
        </div>
      ))
    : "You need more learn REACT";

  return (
    <List
      bordered
      dataSource={todoList}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

export default Todo;
