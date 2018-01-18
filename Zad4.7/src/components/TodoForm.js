import React from 'react';
import style from './TodoForm.css';
class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newData: ''
        };
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangeHandle(event) {
        this.setState({newData: event.target.value});
    }
    onSubmit(event) {
        this.props.add(this.state.newData);
        event.preventDefault();
        this.setState({newData: ''});
    }
    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={this.onSubmit}>
                    <input 
                    type={'text'} 
                    onChange={this.onChangeHandle}
                    placeholder={'things to do'} 
                    value={this.state.newData} />
                    <button type={'submit'}>add</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;