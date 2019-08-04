import React from 'react';
import './style.css';

function Navbar(props) {
    // pass props.currentScore & props.topScore
    return (
        <div>
            <h1 className="title">MARVEL Clicky Game</h1>
            <div className="d-flex justify-content-around">
                {/* <h1 className="title">{props.children}</h1> */}
                <div className="order-1 p-2 bd-highlight">
                    <h2 >Guess Status</h2>
                </div>
                <div className="order-2 p-2 bd-highlight">
                    <h2>Current Score: 0 | Top Score: 0</h2>
                </div>
            </div>
        </div>
    )
}

export default Navbar