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
  // cell elements
  const humanCells = document.getElementsByClassName('human-cells');
  const aiCells = document.getElementsByClassName('ai-cells');

  // scores 
  let aiScore = 0;
  let playerScore = 0;

  // access ai cells looping through all cells
  for (let i = 0; i < aiCells.length; i++) {
    const aiCell = aiCells[i];

    aiCell.addEventListener('click', (e) => {
      const h2Ai = document.getElementById("h2-ai");

      // get coordinates on clicked cell
      const x = e.target.parentElement.rowIndex;
      const y = e.target.cellIndex;
      const coordinates = [x, y];

      const ship = aiGameboard.grid[x][y];
      if (aiCell.classList.contains('attacked')) {
        // Ignore the click if the cell has already been attacked
        return;
      }
      // give ai cell attacked classlist
      aiCell.classList.add('attacked');
      const attack = aiGameboard.receiveAttack(ship, coordinates);

      if (attack && aiCell.innerHTML == '[object Object]') {
        aiCell.style.pointerEvents = "none";
        aiCell.style.opacity = "1";
        aiCell.textContent = 'ship';
        aiCell.style.backgroundColor = 'red';
        playerScore++;
        h2Ai.innerHTML = "Player 2(Ai); Score: " + playerScore;
      } else if (aiCell.innerHTML !== '[object Object]') {
        aiCell.style.pointerEvents = "none";
        aiCell.style.opacity = "1";
        aiCell.textContent = 'miss';
        aiCell.style.backgroundColor = 'blue';
      }

      // trigger a random attack for the AI when an aiCell is clicked by the user
      const h2Player = document.getElementById("h2-player");

      while (true) {
        const randomX = Math.floor(Math.random() * 9);
        const randomY = Math.floor(Math.random() * 9);
        const randomCoordinates = [randomX, randomY];
        const humanShip = playerGameboard.grid[randomX][randomY];
        const randomHumanCell = humanCells[randomX * 9 + randomY];

        if (!randomHumanCell.classList.contains('attacked')) {
          let aiAttack = playerGameboard.receiveAttack(humanShip, randomCoordinates);
          randomHumanCell.classList.add('attacked');

          // handle the result of the AI attack
          if (aiAttack) {
            if (randomHumanCell.style.backgroundColor === "pink") {
              randomHumanCell.style.backgroundColor = 'red';
              aiScore++;
              h2Player.innerHTML = "Player 1(Human); Score: " + aiScore;
              randomHumanCell.innerHTML = "ship";
            } else if (randomHumanCell.style.backgroundColor !== 'red') {
              randomHumanCell.style.backgroundColor = 'blue';
              randomHumanCell.innerHTML = "miss";
            }
          }

          // if player's or ai's all ships are sunk,
          if (playerGameboard.allSunk() || aiGameboard.allSunk()) {
            // game is over
            gameOver();
          }
          // break out of the loop if the selected cell is already attacked
          // to prevent infinite loop
          break;
        }
      }
    });
  }

  // looping through all human cells
  for (let i = 0; i < humanCells.length; i++) {
    const humanCell = humanCells[i];

    if (humanCell.innerHTML === '[object Object]') {
      humanCell.style.backgroundColor = 'pink';
      humanCell.innerHTML = "";
    }
    // user cannot click on his own grid cells
    humanCell.style.pointerEvents = "none";
  }

  function gameOver() {
    for (let i = 0; i < aiCells.length; i++) {
      aiCells[i].classList.remove('attacked');
    }
    if(playerScore > aiScore) {
      console.log("player wins!");
    } else console.log("ai wins!")
    console.log("Game over");
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
