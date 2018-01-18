import React from 'react';
import style from './Todo.css'
class Todo extends React.Component {
    render() {
        return this.props.items.map(item => (
            <li key={item.id} className={style.Todo}>
                {item.text}
                <button onClick={() => this.props.remove(item.id)}>x</button>
            </li>
        ));
    }
}

export default Todo;