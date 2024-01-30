/* eslint-disable no-plusplus */
// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

import { aiGameboard } from '.';
import { oneSquareShip } from '.';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

export default function gameLoop() {
  const humanCells = document.getElementsByClassName('human-cells');
  const aiCells = document.getElementsByClassName('ai-cells');
  for (let i = 0; i < humanCells.length; i++) {
    const humanCell = humanCells[i];
    let child = document.createElement("div");
    child.id = "child";
    // HTML Drag and Drop API for human player
    if (humanCell.innerHTML === '[object Object]') {
      child.style.backgroundColor = 'pink';
      humanCell.innerHTML = '';
    }
    humanCell.appendChild(child);
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
    // each time user attacks, increment turn by 1, let ai also attack once
    aiCell.addEventListener('click', (e) => {
      
      console.log(e);
      const x = e.target.parentElement.rowIndex;
      const y = e.target.cellIndex;
      const coordinates = [x, y];
      console.log(coordinates);
      // if cell contains an object trigger send attack
      if(aiCell.innerHTML === '[object Object]') {
        console.log("cell contains object");
        aiGameboard.receiveAttack(oneSquareShip, coordinates);
        aiCell.textContent = '';
        aiCell.style.backgroundColor = 'black';
        playerScore++;
        console.log(playerScore)
        console.log(aiGameboard);
      } else {
        console.log("does not contain object");
      };
      if(aiCell.style.backgroundColor = "black") {
        aiCell.style.pointerEvents = "none";
      }
      
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
