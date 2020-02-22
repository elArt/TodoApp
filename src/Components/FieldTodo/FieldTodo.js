import React from 'react';
import Nav from '../Nav/Nav';
import TasksList from '../TasksList/TasksList';

// import styles from './styles.module.scss';



class FieldTodo extends React.Component {
    render(){
        const {todosList, showModal, selectChangesItem, deleteTask} = this.props;
        return(
            <div >
                <Nav /> 
                <TasksList 
                    todosList = {todosList} 
                    showModal= {showModal} 
                    selectChangesItem={selectChangesItem}
                    deleteTask={deleteTask}
                />
            </div>
        )
    }
}

export default FieldTodo;