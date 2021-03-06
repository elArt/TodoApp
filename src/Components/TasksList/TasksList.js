import React from "react";
import Task from "../Task/Task";

import styles from "./styles.module.scss";

const TasksList = ({ todosList, showModal, selectChangesItem, deleteTask, changesActive, addCheckedElementInArray}) => {
  const listWithTodo = todosList.map(todo => {
    return (
      <li key={todo.id}>
        <Task
          todo={todo}
          showModal={showModal}
          selectChangesItem={selectChangesItem}
          deleteTask={deleteTask}
          changesActive={changesActive}
          addCheckedElementInArray={addCheckedElementInArray}
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
