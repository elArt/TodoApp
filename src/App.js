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
    isModal: false,
    selectedTodoItem: {},
  };

  componentDidMount() {
    this.setState({
      todoList: todoListFromJson,
    });
  }

  deletePost = (id) => {
    const {todoList}=this.state;

    this.setState({
        todoList: todoList.filter(todo => todo.id !== id),
      });
  };

  selectItemTodo = todoElement => {
    this.setState({
      selectedTodoItem: todoElement,
    });
  };

  handleModalVisible = () => {
    this.setState(prevState => {
      return {
        isModal: !prevState.isModal,
      }
    });
  };

  editTodoItem = (selectedItemTodo) => () => {
    const {todoList } = this.state;
    const {id} = selectedItemTodo;

    this.setState( {
      isModal: false,
        todoList: todoList.map((element) => {
              if(element.id === id) {
                return selectedItemTodo
              }
              return element;
            }
        )
    });
  };

  changeModalValue = (e) => {
    const {value}=e.target;
    const {selectedTodoItem}=this.state;

    this.setState({
      selectedTodoItem: { ...selectedTodoItem, text: value},
    });
  };

  addTodoItem = (inputValue) => {
    const {todoList }=this.state;

    this.setState({
      todoList: [
          ...todoList,
        {
        id: Date.now(),
        text: inputValue,
      }],
    });
  };

  render() {
    const {todoList, selectedTodoItem, isModal} = this.state;
 
    return (
      <div className={styles.container}>
        <Title className={styles.title}>TODO</Title>
        <InputField addTodoList={this.addTodoItem} />
        <Todo
            todoList={todoList}
            deleteTodoTask={this.deletePost}
            selectTodoItem={this.selectItemTodo}
            editTodoItem={this.handleModalVisible}
        />
        <ModalWindow
          handleOk={this.editTodoItem(selectedTodoItem)}
          handleCancel={this.handleModalVisible}
          changeModalValue={this.changeModalValue}
          selectedTodoItem={selectedTodoItem}
          isModal={isModal}
        />
      </div>
    );
  }
}

export default App;
