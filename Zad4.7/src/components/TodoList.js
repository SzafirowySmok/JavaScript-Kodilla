import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';
class TodoList extends React.Component {
    render() {
        return (
            <ul className={style.TodoList}>
            <Todo items={this.props.data} remove={this.props.remove} />
            </ul>
        );
    }
}

export default TodoList;