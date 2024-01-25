/* eslint-disable no-plusplus */
// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

export default function gameLoop() {
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    if (cell.innerHTML === '[object Object]') {
      cell.style.backgroundColor = 'pink';
      cell.innerHTML = ' ';
    }
    // on click get the [x,y] coordinate for specific cell
    cell.addEventListener('click', (e) => {
      console.log(e);
      const x = e.target.parentElement.rowIndex;
      const y = e.target.cellIndex;
      const coordinates = [x, y];
      console.log(coordinates);
      // receive an attack
      // playerGameboard.receiveAttack(newShip, coordinates);
      cell.textContent = '';
      cell.style.backgroundColor = 'black';
    });
  }

  // HTML Drag and Drop API for human player
  // start game
  // turn-based style, increment each turn
  // shots firing

  // game score
  // when all the ships of a player are sunk the other player wins

  // 3.
  // create conditions so that the game ends once one player's ships have all been sunk
  // this function is appropriate for the game modules

  // game ends
  // open module
  // restart / play again
}
