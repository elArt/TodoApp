import React from "react";
import { List } from "antd";
import Post from '../post'

const Todo = ({ todos, deletTodoTask, editPost }) => {
  const todoList = todos.length
? todos.map(todo => {
   return  <Post  
              todos = {todos} 
              todo = {todo} 
              deletTodoTask = {deletTodoTask} 
              editPost = {editPost}
            />
})
    : "You need more learn REACT";

  return (
    <List
      bordered
      dataSource={todoList}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

export default Todo;
