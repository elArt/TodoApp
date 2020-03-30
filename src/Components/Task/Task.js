import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, Icon } from "antd";

const Task = ({ todo, showModal, selectChangesItem }) => {
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

  const editValue = () =>{
    showModal();
    selectChangesItem(todo);
  }


  return (
    <div className={styles.todo}>
      <Checkbox></Checkbox>
      <p>{todo.text}</p>
      <p className={styles.time}>{`${dateTodoCreate}`}</p>
      <div className={styles.btnGroup}>
        <Icon className={styles.btnDone} type="check" />
        <button className={styles.btnActive}></button>
        <Icon className={styles.btnEdit} onClick={editValue} type="edit" />
        <Icon className={styles.btnRemove} type="delete" />
      </div>
    </div>
  );
};

export default Task;
