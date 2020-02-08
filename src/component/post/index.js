import React from "react";
import { Icon } from "antd";
import styles from "./styles.module.scss";

 const Post = ({todo, editPost, deletTodoTask }) => { 

  const clickEditPost = () => {
      editPost(true, todo.id, todo.text);
  }

  const _clickremovePost = () => {
    deletTodoTask(todo.id);
  }

  return(
    <div key={todo.id} className = {styles.post}>
      <span>{todo.text}</span>
      <span
        className={styles.iconsEdit}
        onClick={clickEditPost}
      >
        <Icon type="edit" />
      </span>
      <span
        className={styles.iconsDelet}
        onClick={_clickremovePost}
      >
        <Icon type="delete" />
      </span>
    </div>
  )
} 


export default  Post;