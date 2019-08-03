import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index"
import Data from "../src/data/characters.json"


class App extends Component {
  constructor() {
    super()
    // this is the state data
    this.state = {
      currentScore: 0,
      topScore: 0,
    }
  }



  render() {

    const characterData = Data.map(item => <Card key={item.id} props={item} />);
    // console.log(Data[0].name)

    return (
      <Wrapper>
        <div>
          {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}
          <Navbar>NAVBAR - CLICK BUTTON - SCORES GO HERE</Navbar>

          {characterData}
        </div>
      </Wrapper>
    )
  }
}
export default App;
