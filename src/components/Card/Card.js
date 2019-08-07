import React from 'react';
import "./style.css";

function Card(props) {

    // console.log(props.props.image)
    return (
        /* onClick={} passed function from parent, App.js */
        //props.props displays the data from the characters.json information
        //props.onClick runs the parent function gameScore
        < div className="card" onClick={props.onClick}>
            <div className="img-container" id={props.props.id} >
                <img id={props.props.id} alt={props.props.name} src={props.props.image} isClicked={props.props.clicked} />
            </div>
        </div >
    )
}
export default Card;