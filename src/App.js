import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index"
import Data from "../src/data/characters.json"


class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      currentScore: 0,
      topScore: 0,
      Data,
    }
    this.clickedEvent = this.clickedEvent.bind(this)
  }

  shuffleCard() {

  }


  game() {

    // if clicked === false, current Score +1 
  }

  clickedEvent(event) {
    // state of the card is captured on event.target.isClicked, which is the state defaulted as false.
    const { isClicked } = event.target

    console.log(`${typeof isClicked}`)
    // if state of the card is false, update state.currentScore +1
    // else()
    if ([isClicked] === false) {
      console.log("TRIGGERED")

      this.setState({
        currentScore: this.state.currentScore + 1
      });
    }
    if ([isClicked] === true) {
      console.log("CURRENT SCORE RESET");
      this.setState({ currentScore: this.state.currentScore = 0 })
    }
  }


  render() {
    return (
      <div>
        <Navbar score={this.state} />
        <Wrapper>

          {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}

          {this.state.Data.map(item => <Card key={item.id} props={item} onClick={this.clickedEvent} />)}
        </Wrapper>
      </div>
    )
  }
}

export default App;
