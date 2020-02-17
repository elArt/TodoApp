import React from "react";
import Task from "../Task/Task";
import ModalWindow from "../ModalWindow/ModalWindow";
import * as data from "../../mocks/todo.json";

import styles from "./styles.module.scss";

const todosList = data.items;

class TasksList extends React.Component {
  state = {
    todosList: [],
    visible: false,
    changesItem: {}
  };

  componentDidMount() {
    this.setState({
      todosList: todosList
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

  render() {
    const { visible, changesItem, todosList } = this.state;

    const listWithTodo = todosList.map(todo => {
      return (
        <li key={todo.id}>
          <Task
            todo={todo}
            showModal={this.showModal}
            selectChangesItem={this.selectChangesItem}
          />
        </li>
      );
    });

    return (
      <div>
        <ul className={styles.taskList}>{listWithTodo}</ul>
        <ModalWindow
          handleOk={this.handleOk(changesItem)}
          handleCancel={this.handleCancel}
          changeModalValue={this.changeModalValue}
          changesItem={changesItem}
          visible={visible}
        />
      </div>
    );
  }
}

export default TasksList;
