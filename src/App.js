import React, { Component } from 'react';
import Todo from './component/Todo/';
import InputField from './component/InputField/';
import { Typography } from 'antd';
import styles from './styles.module.scss';
import * as data from './mocks/todo.json'

const { Title } = Typography;
const todoListFromJson = data.items;

class App extends Component {
  state = {
      todoList: ''
  }
  deletPost = (id, todoList) => {
    const newTodo = todoList.filter(todo => todo.id !== id)
    this.setState({
      todoList: newTodo
    })
  }
  editPost = (id, todoList) =>{
    console.log(id, todoList);
    
  }
  addTodoList = (inputValue, todos) => {
    const newTodo = {
      id: Date.now(),
      text: inputValue
    }
    this.setState({
      todoList: [...todos, newTodo]
    })
  }
  componentDidMount(){
    this.setState({
      todoList: todoListFromJson
    })
  }

  render() {
    const todoList =  this.state.todoList
    return (
      <div>
        <Title className={styles.title}>TODO</Title>
        <InputField todos={todoList} addTodoList={this.addTodoList} />
        <Todo todos={todoList} deletTodoTask={this.deletPost} editPost={this.editPost} />
      </div>
    )
  }

}

export default App;
