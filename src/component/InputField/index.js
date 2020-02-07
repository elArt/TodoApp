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
        const {value} = this.state;
        e.preventDefault();
        addTodoList(value, todos)
        this.setState({
            value: ''
        })
    }

    render(){
      const  {value} = this.state
        
        return(
            <form 
                className = {styles.editForm}
                onChange ={this.changesInField}
                onSubmit={this.addTodo}>
                <Input 
                value={value} 
                placeholder="What need to do?" 
                />
                <Button htmlType="submit">Add</Button>
            </form>
        )
    }
}

export default InputField;