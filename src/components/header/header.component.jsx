import React from 'react';
import './header.styles.css';

class Header extends React.Component {

    render() {
        return (
            <header>
                <img className="header__img" alt="monkey emoji" src="http://cdn.shopify.com/s/files/1/1061/1924/products/See_No_Evil_Monkey_Emoji_grande.png?v=1571606065"/>
                <h1 className="header__title">The Ultimate Emoji Database</h1>
            </header>
            

        )
    }
}

export default Header;