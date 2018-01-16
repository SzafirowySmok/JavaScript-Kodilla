import React from 'react';
import Todo from './Todo.js'
import style from './TodoList.css';
class TodoList extends React.Component {
    get data() {
        return this.props.data.map(item => <Todo key={item.id} task={item} />)
    } 
    render() {
        return (
            <ul className={style.TodoList}>
            {this.data}
            </ul>
        );
    }
}

export default TodoList;