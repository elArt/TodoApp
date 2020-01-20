import React from "react";
import { Icon } from "antd";
import styles from "./styles.module.scss";

const Post = ({ todo, editPost, deleteTodoTask, selectTodoItem }) => {
  const _removePost = () => deleteTodoTask(todo.id);
  const editTodo = () => {
    selectTodoItem(todo);
    editPost();
  };

  return (
    <div className={styles.post}>
      <p>{todo.text}</p>
      <div className={styles.postBtnPanel}>
        <Icon type="delete" onClick={_removePost} />
        <Icon type="edit" onClick={editTodo} />
      </div>
    </div>
  );
};

export default Post;
