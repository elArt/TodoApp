import React from "react";
import { Tabs } from 'antd';
import TasksList from "../TasksList/TasksList";


import styles from "./styles.module.scss";

const { TabPane } = Tabs;



const Nav = ({todosList, showModal, selectChangesItem, deleteTask}) => {
  
    const doneTodoList = todosList.filter(todo=>{
      return todo.is_complete;
    })
    const activeTodoList = todosList.filter(todo=>{
      return todo.is_active;
    })
    
  
  return (
    <div className={styles.navigation}>
      <Tabs defaultActiveKey="1" type="card" >
        <TabPane tab="All" key="1">
        <TasksList 
          todosList={todosList}
          showModal={showModal}
          selectChangesItem={selectChangesItem}
          deleteTask={deleteTask}
        />
        </TabPane>
        <TabPane tab="Active" key="2">
        <TasksList 
          todosList={activeTodoList}
          showModal={showModal}
          selectChangesItem={selectChangesItem}
          deleteTask={deleteTask}
        />
        </TabPane>
        <TabPane tab="Done" key="3">
        <TasksList 
          todosList={doneTodoList}
          showModal={showModal}
          selectChangesItem={selectChangesItem}
          deleteTask={deleteTask}
        />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Nav;
