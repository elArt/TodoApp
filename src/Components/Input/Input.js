import React from "react";
import { Input } from "antd";

const Inputfueld = ({creatingNewTodo, addTodo, text}) => {
  
  return <Input placeholder = 'Input your todo here...'  value ={text} onChange = {creatingNewTodo} onPressEnter = {addTodo}/>;
};
export default Inputfueld;
