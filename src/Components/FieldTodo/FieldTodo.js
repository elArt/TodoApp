import React from "react";
import Nav from "../Nav/Nav";

import styles from "./styles.module.scss";

class FieldTodo extends React.Component {
  render() {
    const { todosList, showModal, selectChangesItem, deleteTask, changesActive } = this.props;
    return (
      <div>
        <Nav 
          todosList={todosList}
          showModal={showModal}
          selectChangesItem={selectChangesItem}
          deleteTask={deleteTask}
          changesActive={changesActive}
        />
      </div>
    );
  }
}

export default FieldTodo;
