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

  // handleChange
  randomNumber() {
    return Math.floor(Math.random() * Data.length) + 1;
  }

  shuffleCard() {

  }

  gameScore = (event) => {
    //if character id === click random number
    //this.setState(prevState => {
    // currentScore: this.state.currentScore +1
    // })

    const { id } = event.target

    if (id === "6") {
      this.setState({
        currentScore: this.state.currentScore + 1
      })
      console.log("Current Score: " + this.state.currentScore)
    }

    // if currentScore > topScore
    // this.setState(prevState => {topScore: this.state.currentScore})
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      })
    }
    else {
      console.log("Wrong selection")
      // shuffle <Card />
    }

    console.log(`Clicked ${event.target.id}`)
  }

  render() {
    return (
      <div>
        <Navbar score={this.state} />
        <Wrapper>

          {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}

          {Data.map(item => <Card key={item.id} props={item} onClick={this.gameScore} />)}

        </Wrapper>
      </div>
    )
  }
}

export default App;
