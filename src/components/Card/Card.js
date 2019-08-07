import React from 'react';

import "./style.css";

function Card(props) {
    // console.log(props.props.image)
    return (
        /* onClick={} passed function from parent, App.js */
        < div className="card" onClick={props.onClick}>
            <div className="img-container" id={props.props.id}>
                <img id={props.props.id} alt={props.props.name} src={props.props.image} />
            </div>
        </div >
    )
}
export default Card;