import React from 'react';
import './search-bar.styles.css';

const SearchBar = (props) => {

    return (
        <input type="text" placeholder="Which emoji are you looking for?" onChange={props.onChange}></input>
    )

}

export default SearchBar;