import React from 'react';
import { Input, Button } from 'antd';

import styles from './styles.module.scss';

class InputField extends React.Component {
    state = {
        value: ''
    };

    changesInField = (e) =>{
        this.setState({
            value: e.target.value,
        });
    };

    addTodo = (value) => (e) => {
        e.preventDefault();
        const {addTodoList} = this.props;
        if(value) {
        addTodoList(value);
        this.setState({
            value: '',
        });
        }
    };

    render(){
      const  {value} = this.state;

        return(
            <form
                className = {styles.editForm}
                onChange ={this.changesInField}
                onSubmit={this.addTodo(value)}>
                <Input
                value={value}
                placeholder="Input your todo please"
                />
                <Button htmlType="submit">Add</Button>
            </form>
        )
    }
}

export default InputField;
