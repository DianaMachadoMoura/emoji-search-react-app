import React from 'react';
import './list.css';

const List = (props) => {

    return (
        <ul className="result-list">{props.items}</ul>
    )
}

export default List;