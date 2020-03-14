import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, Icon } from "antd";

const Task = ({ todo, showModal, selectChangesItem, deleteTask }) => {
  const dateCreate = new Date(todo.created_at);

  const dateTodoCreate = `${
    dateCreate.getHours() >= 10
      ? dateCreate.getHours()
      : "0" + dateCreate.getHours()
    }:${
    dateCreate.getMinutes() >= 10
      ? dateCreate.getMinutes()
      : "0" + dateCreate.getMinutes()
    } 
    ${dateCreate.getMonth()}/${dateCreate.getDay()}/${dateCreate.getFullYear()} `;

  const editValue = () => {
    showModal();
    selectChangesItem(todo);
  };

  const deleteThisTask = () => {
    deleteTask(todo.id);
  };

  return (
    <div className={styles.todo}>
      <Checkbox/>
      <p>{todo.text}</p>
      <p className={styles.time}>{`${dateTodoCreate}`}</p>
      <div className={styles.btnGroup}>
        {todo.is_complete && <Icon className={styles.btnDone} type="check" />}
        <button className={todo.is_active ? styles.btnActive : styles.btnDontActive} />
        <Icon className={styles.btnEdit} onClick={editValue} type="edit" />
        <Icon
          className={styles.btnRemove}
          onClick={deleteThisTask}
          type="delete"
        />
      </div>
    </div>
  );
};

export default Task;
