import React from 'react';
import './list-item.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style : {
                background: "",
                display: "none"
            },
            value: '',
            copyText: 'Click to copy emoji'
        }
    }

    handlerOnMouseOver = () => {
        this.setState({style: {background: "rgba(0,0,0,.1)", display:"inline"}});
    }

    handlerOnMouseOut = () => {
        this.setState({style: {background: "", display:"none"}});
        this.setState({copyText: 'Click to copy emoji'})
    }

    handleCopy = () => {
        this.setState({copyText: 'Copied!'});
    }

    render() {
        return (
            <CopyToClipboard text={this.props.symbol} onCopy={this.handleCopy}>
                <li className="emoji" onMouseOver={this.handlerOnMouseOver} onMouseOut={this.handlerOnMouseOut} style={{background: this.state.style.background}}>
                    <span className="emoji__symbol">{this.props.symbol}</span>  
                    <span className="emoji__tilte">{this.props.title}</span>
                    <span className="emoji__copy-text" style={{display: this.state.style.display}}>
                        {this.state.copyText}
                    </span>     
                </li>
            </CopyToClipboard>
        )   
    }
}

export default ListItem;