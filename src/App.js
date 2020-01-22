import React, { Component } from "react";
import Todo from "./component/Todo/";
import InputField from "./component/InputField/";
import { Typography } from "antd";
import styles from "./styles.module.scss";
import * as data from "./mocks/todo.json";
import ModalWindow from "./component/ModalWindow";

const { Title } = Typography;
const todoListFromJson = data.items;

class App extends Component {
  state = {
    todoList: "",
    visible: false,
    editText: "",
    id: ""
  };
  deletPost = (id, todoList) => {
    const newTodo = todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodo
    });
  };

  editPost = (id, text) => {
    this.setState({
      visible: true,
      editText: text,
      id: id
    });
  };

  handleOk = (editId, todoList, editText) => {
    const newTodo = todoList.filter(todo =>
      todo.id === editId ? (todo.text = editText) : todo
    );
    this.setState({
      visible: false,
      todoList: newTodo
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  changeModalValue = e => {
    this.setState({
      editText: e.target.value
    });
  };

  addTodoList = (inputValue, todos) => {
    const newTodo = {
      id: Date.now(),
      text: inputValue
    };
    this.setState({
      todoList: [...todos, newTodo]
    });
  };

  componentDidMount() {
    this.setState({
      todoList: todoListFromJson
    });
  }

  render() {
    const todoList = this.state.todoList;
    const visible = this.state.visible;
    const editText = this.state.editText;
    const editId = this.state.id;
    return (
      <div>
        <Title className={styles.title}>TODO</Title>
        <InputField todos={todoList} addTodoList={this.addTodoList} />
        <Todo
          todos={todoList}
          deletTodoTask={this.deletPost}
          editPost={this.editPost}
        />
        <ModalWindow
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          changeModalValue={this.changeModalValue}
          editId={editId}
          todoList={todoList}
          editText={editText}
          visible={visible}
        ></ModalWindow>
      </div>
    );
  }
}

export default App;
