import React from "react";
import { List } from "antd";
import Post from '../Post'

const Todo = ({ todoList, deleteTodoTask, editTodoItem, selectTodoItem }) => {

  return (
      <>
          {
              !!todoList.length ?
                <List
                  bordered
                  dataSource={todoList}
                  renderItem={item =>
                      <List.Item>
                          <Post
                              key={item.id}
                              todo = {item}
                              deleteTodoTask = {deleteTodoTask}
                              selectTodoItem={selectTodoItem}
                              editPost = {editTodoItem}
                            />
                      </List.Item>}
                />
                  : <h3>You need more learn REACT</h3>
          }
      </>
  );
};

export default Todo;
