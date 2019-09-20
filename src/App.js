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
    //  checks the state of the score and updates accordingly
    return this.state.currentScore > this.state.topScore ? this.setState({ topScore: this.state.currentScore }) : null;
  }

  clickedEvent(event) {

    this.gameScore()

    // access the state of the card (child) in App (parent)
    const { id } = event.target;
    const { clicked, currentScore, charData } = this.state;

    this.setState(prevState => ({
      clicked: [...prevState.clicked, id]
    })
    )

    // console.log(this.state.clicked)


    if (clicked.indexOf(id) === -1) {
      this.gameScore()
      this.setState({
        // if going with the empty array way, use the indexof method.
        // clicked: this.state.clicked.push([id]),
        currentScore: currentScore + 1
      }, () => { this.gameScore() })

      // console.log("here")
    }

    else {
      this.setState({
        clicked: [],
        currentScore: 0
      })
    }

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
          {charData.map(item =>
            <Card
              shuffleCard={this.shuffle}
              key={item.id}
              props={item}
              onClick={this.clickedEvent} />)}
        </Wrapper>
      </div>
    )
  }
}

export default App;
