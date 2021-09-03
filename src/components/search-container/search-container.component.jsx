import React from 'react';
import SearchBar from '../search-bar/search-bar.component';
import List from '../list/list.component';
import ListItem from '../list-item/list-item.component';

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emojiListItems: []
        }
    }

    handleChange = (input) => {

        fetch('emojiList.json')
        .then(response => response.json())
        .then(result => {
            let emojiList = result.filter(emoji => emoji.keywords.includes(input));
            let emojis = emojiList.map(emoji => {
                return <ListItem key={emoji.title} symbol={emoji.symbol} title={emoji.title} />;
            })

            this.setState({emojiListItems: emojis});
        })
        .catch(error => console.log(error));
    }

    render() {

        return (
            <section>
                <SearchBar onChange={event => this.handleChange(event.target.value)} />
                <List items={this.state.emojiListItems}>    
                </List>
            </section>
        )      
    }
}

export default SearchContainer;