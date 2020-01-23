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
    addTodo = (e) =>{
        const {addTodoList, todos} = this.props;
        e.preventDefault();
        addTodoList(this.state.value, todos)
        this.setState({
            value: ''
        })
    }

    render(){
        
        return(
            <form 
                className = {styles.editForm}
                onChange ={this.changesInField}
                onSubmit={this.addTodo}>
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