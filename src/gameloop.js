/* eslint-disable no-plusplus */
// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

import { aiGameboard, playerGameboard } from '.';
import { oneSquareShip } from '.';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

export default function gameLoop() {
  let turn = 0;
  const humanCells = document.getElementsByClassName('human-cells');
  const aiCells = document.getElementsByClassName('ai-cells');
  for (let i = 0; i < humanCells.length; i++) {
    const humanCell = humanCells[i];
    // HTML Drag and Drop API for human player
    if (humanCell.innerHTML === '[object Object]') {
      humanCell.style.backgroundColor = 'pink';
      humanCell.innerHTML = '';
    }
  }

  for (let i = 0; i < aiCells.length; i++) {
    const aiCell = aiCells[i];
    if (aiCell.innerHTML === '[object Object]') {
      aiCell.style.backgroundColor = 'green';
      //aiCell.innerHTML = '';
    }
    // start game
    // turn-based style, increment each turn
    let playerScore = 0;
    let playerMissedShots = 0;
    // each time user attacks, let ai also attack once
    aiCells[i].addEventListener('click', (e) => {
      console.log(e);
      const x = e.target.parentElement.rowIndex;
      const y = e.target.cellIndex;
      const coordinates = [x, y];

      turn++;
      console.log("turn is: " + turn);
      
      // if cell contains an object trigger send attack
      if(aiCell.style.backgroundColor === 'green') {
        aiCell.style.opacity = "1"
        console.log("cell contains object");
        aiGameboard.receiveAttack(oneSquareShip, coordinates);
        aiCell.textContent = 'ship';
        aiCell.style.backgroundColor = 'red';
        aiCell.style.pointerEvents = "none";
        console.log(aiGameboard);
      } else if(aiCell.innerHTML !== '[object Object]') {
        aiCell.style.opacity = "1"
        console.log("shot was missed, cell was empty");
        playerMissedShots++;
        console.log("playerMissedShots: " + playerMissedShots)
        aiCell.textContent = 'miss';
        aiCell.style.backgroundColor = 'blue';
        aiCell.style.pointerEvents = "none";
      };
    });
    // when player attacks a square, make ai get a random attack
    aiCells[i].addEventListener('click', (e) => {
      const x = Math.floor(Math.random() * 9);
      const y = Math.floor(Math.random() * 9);
      const coordinates = [x, y];
      playerGameboard.receiveAttack(oneSquareShip, coordinates);
      console.log(playerGameboard);
      
    });
  }

  // game score
  // when all the ships of a player are sunk the other player wins

  // 3.
  // create conditions so that the game ends once one player's ships have all been sunk
  // this function is appropriate for the game modules

  // game ends
  // open module
  // restart / play again
}
