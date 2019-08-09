import React, { Component } from 'react';
import "./style.css";

//style components

class Card extends Component {
    constructor() {
        super();
        this.state = {
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // console.log("before setState " + this.state.isClicked)
        if (this.state.isClicked === false) {
            this.setState({ isClicked: this.state.isClicked = true })
        }
        else {
            this.setState({ isClicked: this.state.isClicked = false })
        }
        console.log("Updated State " + this.state.isClicked)
    }

    render() {
        // console.log(props.props.image)
        // console.log(this.state.clicked)
        // destructor props
        const { id, name, image } = this.props.props
        return (
            /* onClick={} passed function from parent, App.js */
            //props.props displays the data from the characters.json information
            //props.onClick runs the parent function gameScore
            < div className="card" onClick={this.props.onClick}>
                <div className="img-container" id={id} >
                    <img id={id} alt={name} src={image}
                        onClick={this.handleClick} state={this.state.isClicked} />
                    {/* {console.log(this.state.isClicked)} */}
                </div>
            </div >
        )
    }
}
export default Card;