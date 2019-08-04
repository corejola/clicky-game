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

  gameScore = event => {
    //if character id === click random number
    //this.setState(prevState => {
    // currentScore: this.state.currentScore +1
    // })

    // if currentScore > topScore
    // this.setState(prevState => {topScore: this.state.currentScore})
    console.log(this.id)

  }

  render() {

    return (
      <div>
        <Navbar />
        <Wrapper>

          {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}

          {Data.map(item => <Card key={item.id} props={item}
            onClick={this.gameScore(item.id)}
          />)}

        </Wrapper>
      </div>
    )
  }
}
export default App;
