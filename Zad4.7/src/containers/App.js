import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'learn JavaScript and React'
                },
                {
                    id: 2,
                    text: 'find a job'
                },
                {
                    id: 3,
                    text: 'go on holiday'
                },
                {
                    id: 4,
                    text: 'buy a Russian Blue'
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title data={this.state.data}/>
                <TodoForm add={this.addTodo.bind(this)}/>
                <TodoList data={this.state.data} remove={this.removeTodo.bind(this)}/>
                
            </div>
        );
    }
}
export default App;