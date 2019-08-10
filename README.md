# Clicky Game

## Functionality 
1. Upon game load, the characters layout will shuffle.
2. Click on a character to gain points. Characters will shuffle again.
3. Character can only be clicked on once, otherwise score is reset.

## Progress/Remaining Psuedo Code
1. The Card.js, which is a parent of the App.js, independently maintains the state whether the card has be clicked. Default state of the card is false, when clicked, a point is added to the current score and the state is set to true.
2. If the state is true, the current score gets reset to 0.

## Development Server
1. Run `npm install` to install all react dependencies
2. Run `npm start` to run developement server

### Packages
1. [React](https://reactjs.org/)
