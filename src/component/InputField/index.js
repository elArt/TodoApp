import React from 'react';
import { Input } from 'antd';

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
        e.preventDefault();
        this.props.addTodoList(this.state.value)
        this.setState({
            value: ''
        })
    }

    render(){
        return(
            <form className={styles.inputForm} onChange ={this.changesInField} onSubmit={this.addTodo}>
                <Input className={styles.inputField} value={this.state.value} placeholder="What you whant add to do?" />
            </form>
        )
    }
}

export default InputField;