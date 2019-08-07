import React from 'react';
import "./style.css";

class Card extends React.Component {
    state = {
        clicked: false
    }

    render() {
        // console.log(props.props.image)
        return (
            /* onClick={} passed function from parent, App.js */
            //props.props displays the data from the characters.json information
            //props.onClick runs the parent function gameScore
            < div className="card" onClick={this.props.onClick}>
                <div className="img-container" id={this.props.props.id} >
                    <img id={this.props.props.id} alt={this.props.props.name} src={this.props.props.image} isClicked={this.state.clicked} />
                </div>
            </div >
        )
    }
}
export default Card;