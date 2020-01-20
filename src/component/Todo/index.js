import React from 'react';
import { Icon } from 'antd';
import styles from './styles.module.scss';

const Todo = ({ todos, deletTodoTask }) => {
    const todoList = todos.length ? (
        todos.map((todo) =>
            <div key={todo.id} className = {styles.oneTask}>
                {todo.task}
                <span onClick={() => { deletTodoTask(todo.id, todos) }}> <Icon type="delete" style={{ left: '80%', position: "absolute", cursor: 'pointer' }} /></span>
            </div>
        )
    )
        : "You need more learn REACT";
    return (

        <div className = {styles.inputTaskField}>
            {todoList}
        </div>
    )
}

export default Todo;