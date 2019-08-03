import React, { Component } from 'react';
import './App.css';
// import Nav from "./components/Nav"
import Card from "./components/Card/Card"
import Data from "../src/data/characters.json"


class App extends Component {
  constructor() {
    super()
    // this is the state data
    this.state = {
      currentScore: 0,
      topScore: 0,
      // Data
    }
  }



  render() {
    const characterData = Data.map(item => <Card key={item.id} props={item} />);
    // console.log(Data[0].name)

    return (
      <div>
        {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}
        <h1>NAVBAR</h1>
        {/* <Nav /> */}
        <hr />
        <h2>Cards Section</h2>
        {characterData}
      </div>
    )
  }
}
export default App;
