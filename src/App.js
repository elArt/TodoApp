import React, { Component } from 'react';
import Todo from './component/Todo/index';
import InputField from './component/InputField/index';
import { Typography } from 'antd';
import styles from './styles.module.scss';

const { Title } = Typography;

class App extends Component {

  state = {
    todoList: [
      { id: 1, task: 'learn react' },
      { id: 2, task: 'learn more react' }
    ]
  }

  deletPost = (id) => {
    const newTodo = this.state.todoList.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todoList: newTodo
    })
  }
  addTodoList = (inputData) => {
    const newTodo = {
      id: Date.now(),
      task: inputData
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  render() {
    return (
      <div>
        <Title className={styles.title}>TODO</Title>
        <InputField addTodoList={this.addTodoList} />
        <Todo todos={this.state.todoList} deletTodoTask={this.deletPost} />
      </div>
    )
  }

}

export default App;
