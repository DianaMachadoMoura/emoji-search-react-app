import React from 'react';
import './search-bar.styles.css';

class SearchBar extends React.Component {

    render() {
        return (
            <input type="text" placeholder="Which emoji are you looking for?" onChange={this.props.onChange}></input>
        )

    }
}

export default SearchBar;