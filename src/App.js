import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index"
import Data from "../src/data/characters.json"


class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: [],
      currentScore: 0,
      topScore: 0,
      Data,
    }
    this.clickedEvent = this.clickedEvent.bind(this)
  }

  shuffleCard() {

  }

  gameScore() {
    return this.currentScore > this.topScore ? this.setState({ topScore: this.currentScore }) : null;
  }

  clickedEvent(event) {
    // state of the card is captured on event.target.isClicked, which is the state defaulted as false.
    const { id } = event.target
    console.log(`CLICKED target ID-0${[id]}`)

    if ([id] !== this.state.clicked.filter(item => item === [id])) {
      this.setState({
        // clicked: this.state.clicked.push([id]),
        currentScore: this.state.currentScore + 1
      })
      this.gameScore()
      this.state.clicked.push([id])
      console.log(this.state.clicked)

    }
    if ([id] === this.state.clicked.filter(item => item === [id])) {
      this.setState({
        clicked: 0,
        currentScore: 0
      })
    }
    // return this.currentScore > this.topScore ? this.setState({ topScore: this.currentScore }) : null

    // if state of the card is false, update state.currentScore + 1
    // else()
  }


  render() {
    return (
      <div>
        <Navbar score={this.state} />
        <Wrapper>

          {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}
          {/* run shuffleCard method to shuffle the Data.map array upon the click event */}
          {this.state.Data.map(item => <Card key={item.id} props={item} onClick={this.clickedEvent} />)}
        </Wrapper>
      </div>
    )
  }
}

export default App;
