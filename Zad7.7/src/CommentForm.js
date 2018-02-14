import React, {Component} from 'react';
import { addComment } from './actions';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    onChangeHandle(e) {
        this.setState({text: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.addComment(this.state.text);
        this.setState({text: ''});
    }
    
    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input
                    type={'text'}
                    onChange={e => this.onChangeHandle(e)}
                    value={this.state.text}
                />
                <button type={'submit'}>add</button>
            </form>
        );
    }
}
export default CommentForm;