import React, { Component } from "react";
import Todo from "./component/Todo";
import InputField from "./component/InputField";
import ModalWindow from "./component/ModalWindow";
import { Typography } from "antd";
import styles from "./styles.module.scss";
import * as data from "./mocks/todo.json";

const { Title } = Typography;
const todoListFromJson = data.items;

class App extends Component {
  state = {
    todoList: [],
    visible: false,
    editText: "",
    id: ""
  };
  
  deletPost = (id) => {
    const { todoList } = this.state;
    const newTodo = todoList.filter(todo => todo.id !== id);
    this.editTodoList( newTodo );

  };

  editPost = (bool = false, id = '', text = '') => {
    this.setState({
      visible: bool,
      editText: text,
      id: id
    });
  };

  handleOk = (editId,  editText) => {
    const { todoList } = this.state;

    const newTodo = todoList.filter(todo =>
      todo.id === editId ? (todo.text = editText) : todo
    );
    this.editTodoList( newTodo );
    this.editPost();
    
  };

  handleCancel = () => {
    this.editPost();
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

    this.editTodoList(todos, newTodo);
  };

  editTodoList = ( todos, ...rest) =>{
    this.setState({
      todoList: [...todos, ...rest]
    });
  }

  componentDidMount() {
    this.editTodoList(todoListFromJson);
  }

  render() {
    const {todoList, id, editText, visible} = this.state;    
    return (
      <div className={styles.container}>
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
          editId={id}
          todoList={todoList}
          editText={editText}
          visible={visible}
        />
      </div>
    );
  }
}

export default App;
