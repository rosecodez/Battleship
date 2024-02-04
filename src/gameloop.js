/* eslint-disable no-plusplus */
// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

import { aiGameboard, playerGameboard } from '.';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

export default function gameLoop() {
  const humanCells = document.getElementsByClassName('human-cells');
  const aiCells = document.getElementsByClassName('ai-cells');

  for (let i = 0; i < aiCells.length; i++) {
    const aiCell = aiCells[i];

    aiCell.addEventListener('click', (e) => {
      const x = e.target.parentElement.rowIndex;
      const y = e.target.cellIndex;
      const coordinates = [x, y];

      const ship = aiGameboard.grid[x][y];
      
      const attack = aiGameboard.receiveAttack(ship, coordinates);

      if (attack && aiCell.innerHTML == '[object Object]') {
        aiCell.style.opacity = "1";
        console.log("cell contains object");
        aiCell.textContent = 'ship';
        aiCell.style.backgroundColor = 'red';
        aiCell.style.pointerEvents = "none";
      } else if (aiCell.innerHTML !== '[object Object]') {
        aiCell.style.opacity = "1";
        console.log("shot was missed, cell was empty");
        aiCell.textContent = 'miss';
        aiCell.style.backgroundColor = 'blue';
        aiCell.style.pointerEvents = "none";
      }

      // trigger a random attack for the AI when an aiCell is clicked
        const randomX = Math.floor(Math.random() * 9);
        const randomY = Math.floor(Math.random() * 9);
        const randomCoordinates = [randomX, randomY];
        console.log("random coords for ai:" + randomCoordinates)

        const humanShip = playerGameboard.grid[randomX, randomY];

        const aiAttack = playerGameboard.receiveAttack(humanShip, randomCoordinates);

        // handle the result of the AI attack
        const randomHumanCell = humanCells[randomX * 9 + randomY]
        console.log(randomX)
        console.log(randomY)
        console.log(randomHumanCell);

        if (aiAttack && randomHumanCell.innerHTML === "[object Object]") {
          randomHumanCell.style.backgroundColor = 'red';
          randomHumanCell.innerHTML = "ship";
        } else if (randomHumanCell.innerHTML !== '[object Object]') {
          randomHumanCell.style.backgroundColor = 'blue';
          randomHumanCell.innerHTML = "miss";
        }
    });
  }

  for (let i = 0; i < humanCells.length; i++) {
    const humanCell = humanCells[i];
    
    if (humanCell.innerHTML === '[object Object]') {
      humanCell.style.backgroundColor = 'pink';
    }
    humanCell.style.pointerEvents = "none";
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