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
  // {todoList} = this.state.todoList;

  deletPost = (id, todoList) => {
    const newTodo = todoList.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todoList: newTodo
    })
  }
  addTodoList = (inputValue, todos) => {
    const newTodo = {
      id: Date.now(),
      task: inputValue
    }
    this.setState({
      todoList: [...todos, newTodo]
    })
  }

  render() {
    const {todoList} = this.state;
    return (
      <div>
        <Title className={styles.title}>TODO</Title>
        <InputField todos={todoList} addTodoList={this.addTodoList} />
        <Todo todos={todoList} deletTodoTask={this.deletPost} />
      </div>
    )
  }

}

export default App;
