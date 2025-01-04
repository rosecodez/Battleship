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
import crosshair from "./images/crosshair.png";

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
const restartButton = document.getElementById("restart-button");

const crosshairImg = document.createElement("img");
crosshairImg.src = crosshair;
crosshairImg.style.width = "40px";
crosshairImg.style.pointerEvents = "none";

export default function gameLoop() {
  // access ai cells looping through all cells
  for (let i = 0; i < aiCells.length; i++) {
    const aiCell = aiCells[i];

    // crosshair logic
    aiCell.addEventListener("mouseover", (e) => {
      // ignore event if the cell was already attacked
      if (aiCell.classList.contains("attacked")) {
        return;
      }

      // clone crosshair image to ensure each cell has its own one
      const crosshairClone = crosshairImg.cloneNode(true);
      crosshairClone.classList.add("crosshair");
      e.target.appendChild(crosshairClone);
    });

    aiCell.addEventListener("mouseout", (e) => {
      const crosshair = e.target.querySelector(".crosshair");
      if (crosshair) {
        e.target.removeChild(crosshair);
      }
    });

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
      aiGameboard.receiveAttack(ship, coordinates);
      if (aiCell.dataset.hasShip === "true") {
        aiCell.textContent = "Hit";
        playerScore++;
        h2Ai.innerHTML = `Human score: ` + `${playerScore}`;
      } else {
        aiCell.textContent = "Miss";
      }

      // trigger a random attack for the AI when an aiCell is clicked by the user
      while (true) {
        const randomX = Math.floor(Math.random() * 9);
        const randomY = Math.floor(Math.random() * 9);
        const randomHumanCell = humanCells[randomX * 9 + randomY];

        if (!randomHumanCell.classList.contains("attacked")) {
          randomHumanCell.classList.add("attacked");

          const ship = playerGameboard.grid[randomX][randomY];
          const isHit = playerGameboard.receiveAttack(ship, [randomX, randomY]);

          if (isHit) {
            randomHumanCell.textContent = "Hit";
            aiScore++;
            h2Player.innerHTML = `AI score: ${aiScore}`;
          } else {
            randomHumanCell.textContent = "Miss";
          }

          break;
        }
      }

      // if player's or ai's all ships are sunk,
      if (playerGameboard.allSunk() || aiGameboard.allSunk()) {
        gameOver();
      }
    });
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
      if (aiGameboard.allSunk() || playerScore === 44) {
        console.log("player wins");
        dialogText.textContent = "Game over. Player wins";
      } else if (playerScore.allSunk() || computerScore === 44) {
        console.log("computer wins!");
        dialogText.textContent = "Game over. Ai wins";
      }

      restartButton.addEventListener("click", restartGame);
    }
  }
}

export function restartGame() {
  console.log(aiGameboard);
  console.log(playerGameboard);
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

  aiGrid.innerHTML = "";
  humanGrid.innerHTML = "";

  createTables();
  gameLoop();
}
