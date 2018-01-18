import React from 'react';
class Title extends React.Component {
    get data() {
        return this.props.data.length;
    } 
    render() {
        return (
            <div>
            <h2>List to do ({this.data})</h2>
            </div>
        );
    }
}

export default Title;