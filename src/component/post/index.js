import React from "react";
import { Icon } from "antd";
import styles from "./styles.module.scss";

 const Post = ({todo, todos, editPost, deletTodoTask }) => { 

  const _clickEditPost = () => {
      editPost(todo.id, todo.text, todos);
  }
  const _clickremovePost = () => {
    deletTodoTask(todo.id, todos);
}

  return(
    <div key={todo.id}>
      {todo.text}
      <span
        className={styles.iconsEdit}
        onClick={_clickEditPost}
      >
        <Icon type="edit" />
      </span>
      <span
        className={styles.iconsDelet}
        onClick={_clickremovePost}
      >
        {" "}
        <Icon type="delete" />
      </span>
    </div>
  )
} 


export default  Post;