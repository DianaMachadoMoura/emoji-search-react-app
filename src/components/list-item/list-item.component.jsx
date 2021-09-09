import React, {useState} from 'react';
import './list-item.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ListItem = (props) => {

    const [style, setStyle] = useState({ background: "", display: "none"});
    const [copyText, setCopyText] = useState('Click to copy emoji');

    const handlerOnMouseOver = () => {
        setStyle({background: "rgba(0,0,0,.1)", display:"inline"});
    }

    const handlerOnMouseOut = () => {
        setStyle({background: "", display:"none"});
        setCopyText('Click to copy emoji');
    }

    const handleCopy = () => {
        setCopyText('Copied!');
    }

    return (
        <CopyToClipboard text={props.symbol} onCopy={handleCopy}>
            <li className="emoji" onMouseOver={handlerOnMouseOver} onMouseOut={handlerOnMouseOut} style={{background: style.background}}>
                <span className="emoji__symbol">{props.symbol}</span>  
                <span className="emoji__tilte">{props.title}</span>
                <span className="emoji__copy-text" style={{display: style.display}}>{copyText}</span>     
            </li>
        </CopyToClipboard>
    )
}

// class ListItem extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             style : {
//                 background: "",
//                 display: "none"
//             },
//             value: '',
//             copyText: 'Click to copy emoji'
//         }
//     }

//     handlerOnMouseOver = () => {
//         this.setState({style: {background: "rgba(0,0,0,.1)", display:"inline"}});
//     }

//     handlerOnMouseOut = () => {
//         this.setState({style: {background: "", display:"none"}});
//         this.setState({copyText: 'Click to copy emoji'})
//     }

//     handleCopy = () => {
//         this.setState({copyText: 'Copied!'});
//     }

//     render() {
//         return (
//             <CopyToClipboard text={this.props.symbol} onCopy={this.handleCopy}>
//                 <li className="emoji" onMouseOver={this.handlerOnMouseOver} onMouseOut={this.handlerOnMouseOut} style={{background: this.state.style.background}}>
//                     <span className="emoji__symbol">{this.props.symbol}</span>  
//                     <span className="emoji__tilte">{this.props.title}</span>
//                     <span className="emoji__copy-text" style={{display: this.state.style.display}}>
//                         {this.state.copyText}
//                     </span>     
//                 </li>
//             </CopyToClipboard>
//         )   
//     }
// }

export default ListItem;