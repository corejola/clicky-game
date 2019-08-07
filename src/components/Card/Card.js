import React, { Component } from 'react';
import "./style.css";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log("before setState " + this.state.isClicked)
        this.setState({ isClicked: this.state.isClicked = true })
        console.log("after setState " + this.state.isClicked)
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
                    <img id={this.props.props.id} alt={this.props.props.name} src={this.props.props.image} onClick={this.handleClick} state={this.state.isClicked} />
                    {console.log(this.state.isClicked)}
                </div>
            </div >
        )
    }
}
export default Card;