import React from "react";
import Input from "../Input/Input";
import FieldTodo from "../FieldTodo/FieldTodo";
import ModalWindow from "../ModalWindow/ModalWindow";

import { Button } from 'antd';

import styles from "./styles.module.scss";


import * as data from "../../mocks/todo.json";

const taskList = data.items;

class TodoPage extends React.Component {
  state = {
    todosList: [],
    visible: false,
    changesItem: {},
    creatingItem: {},
    checkDoneItemId: [],
  };

  componentDidMount() {
    this.setState({
      todosList: taskList
    });
  }

  showModal = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  };

  handleOk = changesItem => () => {
    const { todosList } = this.state;
    const { id } = changesItem;

    this.setState({
      visible: false,
      todosList: todosList.map(element => {
        if (element.id === id) {
          return changesItem;
        }
        return element;
      })
    });
  };

  selectChangesItem = todo => {
    this.setState({
      changesItem: todo
    });
  };

  changeModalValue = e => {
    const { value } = e.target;
    const { changesItem } = this.state;

    this.setState({
      changesItem: { ...changesItem, text: value }
    });
  };

  creatingNewTodo = e => {
    const { value } = e.target;
    const id = Date.now();
    const time = new Date();

    this.setState({
      creatingItem: {
        id: id,
        text: value,
        created_at: time
      }
    });
  };

  addTodo = () => {
    const { creatingItem, todosList } = this.state;

    this.setState({
      todosList: [...todosList, creatingItem],
      creatingItem: {}
    });
  };

  deleteTask = id => {
    this.setState(prevState => {
      return {
        todosList: prevState.todosList.filter(todo => todo.id !== id)
      };
    });
  };

  changesActive = id => {
    this.setState(prevState => {
      return {
        todosList: prevState.todosList.map(todo => {
          if (todo.id === id) {
            todo.is_active = !todo.is_active;
            return todo;
          }
          else {
            return todo;
          }
        })
      };
    });
  };

  addCheckedElementInArray = id => {
    this.setState(prevState => {
      return {
        checkDoneItemId: [...prevState.checkDoneItemId, id]
      };
    });
  };

  addCheckedDoneTask = () =>{
    const { todosList, checkDoneItemId } = this.state;
    const newDoneTask = todosList.map(todo => {
      checkDoneItemId.map(id => {
        if (id === todo.id){
          todo.is_complete = true;
          todo.is_active = false;
        };
      });
      return todo;
    });
    
    this.setState({
      todosList: newDoneTask,
      checkDoneItemId: [],
    });
  };


  render() {
    const { changesItem, visible, todosList, creatingItem, checkDoneItemId } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODOS LIST</h1>
        <Input
          addTodo={this.addTodo}
          creatingNewTodo={this.creatingNewTodo}
          text={creatingItem.text}
        />
        <FieldTodo
          todosList={todosList}
          showModal={this.showModal}
          selectChangesItem={this.selectChangesItem}
          deleteTask={this.deleteTask}
          changesActive={this.changesActive}
          addCheckedElementInArray={this.addCheckedElementInArray}
        />
        {checkDoneItemId.length !== 0 && <Button type="primary" onClick = {this.addCheckedDoneTask}>Done Task</Button>}
        <ModalWindow
          handleOk={this.handleOk(changesItem)}
          handleCancel={this.showModal}
          changeModalValue={this.changeModalValue}
          changesItem={changesItem}
          visible={visible}
        />
      </div>
    );
  }
}

export default TodoPage;
