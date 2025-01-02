/* eslint-disable no-unreachable-loop */
/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */

// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

import {
  aiGameboard,
  playerGameboard,
  createComputerShips,
  createPlayerShips,
  createTables,
  humanGrid,
  aiGrid,
} from ".";

const Gameboard = require("./Gameboard");
const Ship = require("./Ship");
const Player = require("./Player");

// scores
let aiScore = 0;
let playerScore = 0;

const humanCells = document.getElementsByClassName("human-cells");
const aiCells = document.getElementsByClassName("ai-cells");

const h2Ai = document.getElementById("h2-ai");
const h2Player = document.getElementById("h2-player");

const dialog = document.querySelector("dialog");
const dialogText = document.getElementById("end-text");

export default function gameLoop() {
  // text contents to update score

  // access ai cells looping through all cells
  for (let i = 0; i < aiCells.length; i++) {
    const aiCell = aiCells[i];

    aiCell.addEventListener("click", (e) => {
      // get coordinates on clicked cell
      const x = e.target.parentElement.rowIndex;
      const y = e.target.cellIndex;
      const coordinates = [x, y];

      const ship = aiGameboard.grid[x][y];
      if (aiCell.classList.contains("attacked")) {
        // Ignore the click if the cell has already been attacked
        return;
      }
      // give ai cell attacked classlist
      aiCell.classList.add("attacked");
      const attack = aiGameboard.receiveAttack(ship, coordinates);

      if (attack && aiCell.innerHTML == "[object Object]") {
        aiCell.style.pointerEvents = "none";
        aiCell.style.opacity = "1";
        aiCell.textContent = "ship";
        aiCell.style.backgroundColor = "red";
        playerScore++;
        h2Ai.innerHTML = `Human score: ` + `${playerScore}`;
      } else if (aiCell.innerHTML !== "[object Object]") {
        aiCell.style.pointerEvents = "none";
        aiCell.style.opacity = "1";
        aiCell.textContent = "miss";
        aiCell.style.backgroundColor = "blue";
      }

      // trigger a random attack for the AI when an aiCell is clicked by the user
      while (true) {
        const randomX = Math.floor(Math.random() * 9);
        const randomY = Math.floor(Math.random() * 9);
        const randomCoordinates = [randomX, randomY];
        const humanShip = playerGameboard.grid[randomX][randomY];
        console.log(playerGameboard);
        const randomHumanCell = humanCells[randomX * 9 + randomY];
        if (!randomHumanCell.classList.contains("attacked")) {
          const aiAttack = playerGameboard.receiveAttack(
            humanShip,
            randomCoordinates
          );
          randomHumanCell.classList.add("attacked");

          // handle the result of the AI attack
          if (aiAttack) {
            if (randomHumanCell.style.backgroundColor === "pink") {
              randomHumanCell.style.backgroundColor = "red";
              aiScore++;
              h2Player.innerHTML = `Ai score: ` + `${aiScore}`;
              randomHumanCell.innerHTML = "ship";
            } else if (randomHumanCell.style.backgroundColor !== "red") {
              randomHumanCell.style.backgroundColor = "blue";
              randomHumanCell.innerHTML = "miss";
            }
          }

          // if player's or ai's all ships are sunk,
          if (playerGameboard.allSunk() || aiGameboard.allSunk()) {
            gameOver();
          }
        }
        // break out of the loop if the selected cell is already attacked
        // to prevent infinite loop
        break;
      }
    });
  }

  // looping through all human cells
  for (let i = 0; i < humanCells.length; i++) {
    const humanCell = humanCells[i];

    if (humanCell.innerHTML === "[object Object]") {
      humanCell.style.backgroundColor = "pink";
      humanCell.innerHTML = "";
    }
    // user cannot click on his own grid cells
    humanCell.style.pointerEvents = "none";
  }

  function gameOver() {
    // if the dialog is already open, return
    if (dialog.open) {
      return;
    }
    // remove attacked class from ai cells
    for (let i = 0; i < aiCells.length; i++) {
      aiCells[i].classList.remove("attacked");
    }

    // Check if either player or AI has all ships sunk
    if (playerGameboard.allSunk() || aiGameboard.allSunk()) {
      dialog.showModal();
      dialog.style.display = "flex";
      if (aiGameboard.allSunk()) {
        console.log("player wins");
        dialogText.textContent = "Game over. Player wins";
      } else {
        console.log("computer wins!");
        dialogText.textContent = "Game over. Ai wins";
      }

      restartButton.addEventListener("click", restartGame);
    }
  }
}

export function restartGame() {
  dialog.close();
  dialog.style.display = "none";

  // reset score
  aiScore = 0;
  playerScore = 0;

  // reset text score
  h2Ai.innerHTML = "Ai table";
  h2Player.innerHTML = "Human table";

  // reset gameboards
  aiGameboard.reset();
  playerGameboard.reset();

  // create ships again
  createPlayerShips();
  createComputerShips();

  aiGrid.innerHTML = "";
  humanGrid.innerHTML = "";

  createTables();
  gameLoop();
}
