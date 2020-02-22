import React from "react";
import Task from "../Task/Task";

import styles from "./styles.module.scss";

const TasksList = ({ todosList, showModal, selectChangesItem, deleteTask}) => {

  const listWithTodo = todosList.map(todo => {
    return (
      <li key={todo.id}>
        <Task
          todo={todo}
          showModal={showModal}
          selectChangesItem={selectChangesItem}
          deleteTask={deleteTask}
        />
      </li>
    );
  });

  return (
    <div>
      <ul className={styles.taskList}>{listWithTodo}</ul>
    </div>
  );
};

export default TasksList;
