import React, {useState} from 'react';
import SearchBar from '../search-bar/search-bar.component';
import List from '../list/list.component';
import ListItem from '../list-item/list-item.component';

const SearchContainer = () => {

    const[emojiListItems, setEmojiListItems] = useState([]);

        const handleChange = (input) => {

            fetch('emojiList.json')
            .then(response => response.json())
            .then(result => {
                let emojiList = result.filter(emoji => emoji.keywords.includes(input) || emoji.title.includes(input));
                let emojis = emojiList.map(emoji => {
                    return <ListItem key={emoji.title} symbol={emoji.symbol} title={emoji.title} />;
                })

                setEmojiListItems(emojis);
            })
            .catch(error => console.log(error));
        }

    return (
        <section>
            <SearchBar onChange={event => handleChange(event.target.value)} />
            <List items={emojiListItems}>    
            </List>
        </section>
    )  
}
export default SearchContainer;