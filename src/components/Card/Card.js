import React from 'react';
import "./style.css";

class Card extends React.Component {
    state = {
        clicked: false
    }

    handleClick() {
        this.setState({ clicked: this.state.clicked = true })
        console.log(this.state.clicked)
    }

    render() {
        // console.log(props.props.image)
        // console.log(this.state.clicked)
        return (
            /* onClick={} passed function from parent, App.js */
            //props.props displays the data from the characters.json information
            //props.onClick runs the parent function gameScore
            < div className="card" onClick={this.props.onClick}>
                <div className="img-container" id={this.props.props.id} >
                    <img id={this.props.props.id} alt={this.props.props.name} src={this.props.props.image} onCick={this.handleClick} />
                </div>
            </div >
        )
    }
}
export default Card;