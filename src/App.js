import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
import Wrapper from "./components/Wrapper/index"
import Data from "../src/data/characters.json"


class App extends Component {
  constructor() {
    super();
    this.state = {
      clicked: null,
      currentScore: 0,
      topScore: 0,
      charData: Data,
    }
    this.clickedEvent = this.clickedEvent.bind(this)
  }

  shuffleData(array) {
    // use to shuffle data array layout
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  gameScore() {

    return this.state.currentScore > this.state.topScore ? this.setState({ topScore: this.state.currentScore }) : null;
  }

  clickedEvent(event) {
    // state of the card is captured on event.target.isClicked, which is the state defaulted as false.
    // access the state of the card (child) in App (parent)
    const { id } = event.target
    const { clicked, currentScore, charData } = this.state

    console.log(`CLICKED target ID-0${[id]}`)
    console.log(clicked)

    // if (clicked.indexOf([id]) !== [id]) {
    //   this.setState({
    //     // if going with the empty array way, use the indexof method.
    //     // clicked: this.state.clicked.push([id]),
    //     currentScore: currentScore + 1
    //   })

    //   console.log(clicked)
    // }

    // if ([id] === clicked.filter(item => item === [id])) {
    //   this.setState({
    //     clicked: 0,
    //     currentScore: 0
    //   })
    // }
    // return this.currentScore > this.topScore ? this.setState({ topScore: this.currentScore }) : null

    // if state of the card is false, update state.currentScore + 1
    // else()
  }


  render() {
    // desctructor state components
    const { charData } = this.state
    this.shuffleData(charData)

    return (
      <div>
        <Navbar score={this.state} />
        <Wrapper>

          {/* Nav Bar
        Nav bar will contain the title, button click event & current score & top score, this will require the state to be changed and modified  */}
          {/* run shuffleCard method to shuffle the Data.map array upon the click event */}
          {charData.map(item => <Card key={item.id} props={item} onClick={this.clickedEvent} />)}
        </Wrapper>
      </div>
    )
  }
}

export default App;
