import React from 'react';
import Nav from '../Nav/Nav';
import TasksList from '../TasksList/TasksList';

// import styles from './styles.module.scss';



class FieldTodo extends React.Component {
    render(){
        const todosList = this.props.todosList;
        return(
            <div >
                <Nav /> 
                <TasksList todosList = {todosList} />
            </div>
        )
    }
}

export default FieldTodo;