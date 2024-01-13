// 1.
// set up a new game
// create players and gameboards
// populate each gameboard with predetermined coordinates
// implement a system for allowing to place ships *later*

// 2.
// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

// 3.
// create conditions so that the game ends once one player's ships have all been sunk
// this function is appropriate for the game modules
import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
