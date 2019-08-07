import React from 'react';
import './style.css';

function Navbar(props) {
    // pass props.currentScore & props.topScore

    return (
        <div className="header">
            <h1 className="title">MARVEL  CLICKY  GAME</h1>
            <div className="d-flex justify-content-around">
                {/* <h1 className="title">{props.children}</h1> */}
                <div className="order-1 p-2 bd-highlight">
                    <h2>Pick A Character</h2>
                </div>
                <div className="order-2 p-2 bd-highlight">
                    <h2>Current Score: {props.score.currentScore} | Top Score: {props.score.topScore}</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar