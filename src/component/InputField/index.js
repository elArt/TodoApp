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
            <form className={styles.inputForm}
                     onChange ={this.changesInField}
                     onSubmit={(e)=>{
                         this.addTodo(e, addTodoList, todos)
                         }
                    }
            >
                <Input className={styles.inputField} value={this.state.value} placeholder="What you whant add to do?" />
            </form>
        )
    }
}

export default InputField;