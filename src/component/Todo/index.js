import React from "react";
import { List } from "antd";
import Post from '../post'

const Todo = ({ todos, deletTodoTask, editPost }) => {
  const clearList = <h3>"You need more learn REACT"</h3>;
  const todoList = todos.length
? todos.map(todo => {
   return  <Post  
              todo = {todo} 
              deletTodoTask = {deletTodoTask} 
              editPost = {editPost}
            />
})
    : [clearList];

  return (
    <List
      bordered
      dataSource={todoList}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

export default Todo;
