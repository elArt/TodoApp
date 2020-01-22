import React from 'react';
import { Input, Button } from 'antd';

import styles from './styles.module.scss';

class InputField extends React.Component {
 
    state = {
        value: ''
    }
    changesInField = (e) =>{
        this.setState({
            value: e.target.value
        })
    }
    addTodo = (e, addTodoList, todos) =>{
        e.preventDefault();
        addTodoList(this.state.value, todos)
        this.setState({
            value: ''
        })
    }

    render(){
        const {addTodoList, todos} = this.props;
        return(
            <form 
                className = {styles.editForm}
                onChange ={this.changesInField}
                onSubmit={(e)=>{
                    this.addTodo(e, addTodoList, todos)
                }}>
                <Input 
                value={this.state.value} 
                placeholder="What need to do?" 
                />
                <Button htmlType="submit">Add</Button>
            </form>
        )
    }
}

export default InputField;