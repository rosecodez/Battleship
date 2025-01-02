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
export const oneSquareShip = new Ship(1);
export const oneSquareShipTwo = new Ship(1);
export const oneSquareShipThree = new Ship(1);
export const oneSquareShipFour = new Ship(1);

export const twoSquareShipOne = new Ship(2);
export const twoSquareShipTwo = new Ship(2);
export const twoSquareShipThree = new Ship(2);

export const fourSquareShipOne = new Ship(4);
export const fourSquareShipTwo = new Ship(4);
export const fourSquareShipThree = new Ship(4);

// functions to place ships for player and ai
export function createPlayerShips() {
  playerGameboard.placeShip(oneSquareShip, [0, 0], "vertical");
  playerGameboard.placeShip(oneSquareShipTwo, [6, 8], "vertical");
  playerGameboard.placeShip(oneSquareShipThree, [2, 2], "vertical");
  playerGameboard.placeShip(oneSquareShipFour, [0, 6], "vertical");

  playerGameboard.placeShip(twoSquareShipOne, [2, 4], "horizontal");
  playerGameboard.placeShip(twoSquareShipTwo, [1, 8], "horizontal");
  playerGameboard.placeShip(twoSquareShipThree, [7, 1], "horizontal");

  playerGameboard.placeShip(fourSquareShipOne, [8, 4], "horizontal");
  playerGameboard.placeShip(fourSquareShipTwo, [4, 0], "horizontal");
  playerGameboard.placeShip(fourSquareShipThree, [3, 6], "vertical");
}

export function createComputerShips() {
  aiGameboard.placeShip(oneSquareShip, [0, 4], "vertical");
  aiGameboard.placeShip(oneSquareShipTwo, [9, 1], "vertical");
  aiGameboard.placeShip(oneSquareShipThree, [1, 2], "vertical");
  aiGameboard.placeShip(oneSquareShipFour, [1, 1], "vertical");

  aiGameboard.placeShip(twoSquareShipOne, [2, 4], "horizontal");
  aiGameboard.placeShip(twoSquareShipTwo, [1, 8], "horizontal");
  aiGameboard.placeShip(twoSquareShipThree, [7, 1], "horizontal");

  aiGameboard.placeShip(fourSquareShipOne, [8, 4], "horizontal");
  aiGameboard.placeShip(fourSquareShipTwo, [3, 3], "vertical");
  aiGameboard.placeShip(fourSquareShipThree, [5, 6], "horizontal");
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
