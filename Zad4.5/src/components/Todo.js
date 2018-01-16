import React from 'react';
class Todo extends React.Component {
    
    render() {
        return (
            <li>
            {this.props.task.text}
            </li>
        );
    }
}

export default Todo;