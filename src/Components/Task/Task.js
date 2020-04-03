import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, Icon, Popconfirm } from "antd";

const Task = ({ todo, showModal, selectChangesItem, deleteTask, changesActive, addCheckedElementInArray }) => {
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

  const changesActiveStatus = (e) => {
    e.preventDefault();
    changesActive(todo.id);
  };

  let todoChecked = todo.is_complete;
  const checkedTask = () => {
    addCheckedElementInArray(todo.id);
    todoChecked = true;
  };

  return (
    <div className={styles.todo}>
      {
      todo.is_complete ?
        <Checkbox disabled={todo.is_complete} checked={todoChecked}  /> :
        <Checkbox disabled={todo.is_complete} onChange={checkedTask} />
      }

      <p>{todo.text}</p>
      <p className={styles.time}>{dateTodoCreate}</p>
      <div className={styles.btnGroup}>
        {todo.is_complete && <Icon className={styles.btnDone} type="check" />}
        <button className={todo.is_active ? styles.btnActive : styles.btnDontActive} onClick={changesActiveStatus} />
        <Icon className={styles.btnEdit} onClick={editValue} type="edit" />
        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={deleteThisTask}>
          <Icon
            className={styles.btnRemove}
            type="delete"
          />
        </Popconfirm>
      </div>
    </div>
  );
};

export default Task;
