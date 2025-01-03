import "./style.css";
import { restartGame } from "./gameloop";
import gameLoop from "./gameloop";

const Gameboard = require("./Gameboard");
const Ship = require("./Ship");
const Player = require("./Player");

export const humanGrid = document.getElementById("human-grid");
export const aiGrid = document.getElementById("ai-grid");

const resetGameBtn = document.getElementById("resetGameBtn");

const playerGameboard = new Gameboard();
const aiGameboard = new Gameboard();

// each player will have 4 ship x 1square, 3 ship x 4square, 3 ship x 2square
// functions to place ships for player and ai
export function createPlayerShips() {
  console.log("Grid before placing player ships:", playerGameboard.grid);
  const playerOneSquareShip = new Ship(1);
  const playerOneSquareShipTwo = new Ship(1);
  const playerOneSquareShipThree = new Ship(1);
  const playerOneSquareShipFour = new Ship(1);

  const playerTwoSquareShipOne = new Ship(2);
  const playerTwoSquareShipTwo = new Ship(2);
  const playerTwoSquareShipThree = new Ship(2);

  const playerFourSquareShipOne = new Ship(4);
  const playerFourSquareShipTwo = new Ship(4);
  const playerFourSquareShipThree = new Ship(4);

  playerGameboard.getRandomPlace(playerOneSquareShip);
  playerGameboard.getRandomPlace(playerOneSquareShipTwo);
  playerGameboard.getRandomPlace(playerOneSquareShipThree);
  playerGameboard.getRandomPlace(playerOneSquareShipFour);

  playerGameboard.getRandomPlace(playerTwoSquareShipOne);
  playerGameboard.getRandomPlace(playerTwoSquareShipTwo);
  playerGameboard.getRandomPlace(playerTwoSquareShipThree);

  playerGameboard.getRandomPlace(playerFourSquareShipOne);
  playerGameboard.getRandomPlace(playerFourSquareShipTwo);
  playerGameboard.getRandomPlace(playerFourSquareShipThree);
}

export function createComputerShips() {
  const aiOneSquareShip = new Ship(1);
  const aiOneSquareShipTwo = new Ship(1);
  const aiOneSquareShipThree = new Ship(1);
  const aiOneSquareShipFour = new Ship(1);

  const aiTwoSquareShipOne = new Ship(2);
  const aiTwoSquareShipTwo = new Ship(2);
  const aiTwoSquareShipThree = new Ship(2);

  const aiFourSquareShipOne = new Ship(4);
  const aiFourSquareShipTwo = new Ship(4);
  const aiFourSquareShipThree = new Ship(4);

  aiGameboard.getRandomPlace(aiOneSquareShip);
  aiGameboard.getRandomPlace(aiOneSquareShipTwo);
  aiGameboard.getRandomPlace(aiOneSquareShipThree);
  aiGameboard.getRandomPlace(aiOneSquareShipFour);

  aiGameboard.getRandomPlace(aiTwoSquareShipOne);
  aiGameboard.getRandomPlace(aiTwoSquareShipTwo);
  aiGameboard.getRandomPlace(aiTwoSquareShipThree);

  aiGameboard.getRandomPlace(aiFourSquareShipOne);
  aiGameboard.getRandomPlace(aiFourSquareShipTwo);
  aiGameboard.getRandomPlace(aiFourSquareShipThree);
}

// function that takes the 2D array created in Gameboard.js constructors as parameter
// and it renders it into a table and appends to the html

export function createTable({ tableData, grid, isPlayer }) {
  if (isPlayer === true) {
    createPlayerShips();
  } else if (isPlayer === false) {
    createComputerShips();
  }

  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  tableData.forEach((rowData) => {
    const row = document.createElement("tr");
    rowData.forEach((cellData) => {
      const cell = document.createElement("td");
      if (isPlayer === true) {
        cell.className = "human-cells";
        table.id = "human-table";
      } else if (isPlayer === false) {
        cell.className = "ai-cells";
        table.id = "ai-table";
      }
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  grid.appendChild(table);
}

export function createTables() {
  createTable({
    tableData: playerGameboard.grid,
    grid: humanGrid,
    isPlayer: true,
  });

  createTable({
    tableData: aiGameboard.grid,
    grid: aiGrid,
    isPlayer: false,
  });
}

createTables();
gameLoop();

resetGameBtn.addEventListener("click", restartGame);

export { playerGameboard, aiGameboard };
