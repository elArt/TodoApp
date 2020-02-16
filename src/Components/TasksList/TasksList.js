import React from "react";
import Task from '../Task/Task';

import styles from "./styles.module.scss";

const TasksList = ({ todosList }) => {
  
  const listWithTodo = todosList.map(todo => {
    
    return <li key = {todo.id}><Task todo={todo}/></li>;
  });
  return <ul className={styles.taskList}>{listWithTodo}</ul>;
};

export default TasksList;
