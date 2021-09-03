import React from 'react';
import './list.css';

class List extends React.Component {

    render() {
        return (
            <ul className="result-list">{this.props.items}</ul>
        )
    }
}

export default List;