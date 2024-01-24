import './style.css';
import gameLoop from './gameloop';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

const humanGrid = document.getElementById('human-grid');
const aiGrid = document.getElementById('ai-grid');

const playerGameboard = new Gameboard();
const aiGameboard = new Gameboard();

function createShips() {
  // each player will have 4 ship x 1square,3 ship x 4square, 3 ship x 2square
  const oneSquareShip = new Ship(1);
  const oneSquareShipTwo = new Ship(1);
  const oneSquareShipThree = new Ship(1);
  const oneSquareShipFour = new Ship(1);

  const twoSquareShipOne = new Ship(2);
  const twoSquareShipTwo = new Ship(2);
  const twoSquareShipThree = new Ship(2);

  const fourSquareShipOne = new Ship(4);
  const fourSquareShipTwo = new Ship(4);
  const fourSquareShipThree = new Ship(4);

  playerGameboard.placeShip(oneSquareShip, [0, 0], 'vertical');
  playerGameboard.placeShip(oneSquareShipTwo, [6, 8], 'vertical');
  playerGameboard.placeShip(oneSquareShipThree, [3, 2], 'vertical');
  playerGameboard.placeShip(oneSquareShipFour, [0, 6], 'vertical');

  playerGameboard.placeShip(twoSquareShipOne, [2, 4], 'horizontal');
  playerGameboard.placeShip(twoSquareShipTwo, [1, 8], 'horizontal');
  playerGameboard.placeShip(twoSquareShipThree, [7, 1], 'horizontal');

  playerGameboard.placeShip(fourSquareShipOne, [8, 4], 'horizontal');
  playerGameboard.placeShip(fourSquareShipTwo, [4, 0], 'horizontal');
  playerGameboard.placeShip(fourSquareShipThree, [3, 6], 'vertical');

  console.log(playerGameboard);
}

// function that takes the 2D array created in Gameboard.js constructors as parameter
// and it renders it into a table and appends to the html
function createTable({ tableData, grid }) {
  createShips();
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  tableData.forEach((rowData) => {
    const row = document.createElement('tr');

    rowData.forEach((cellData) => {
      const cell = document.createElement('td');
      cell.className = 'cell';
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  grid.appendChild(table);
}

createTable({
  tableData: playerGameboard.grid,
  grid: humanGrid,
});
createTable({
  tableData: aiGameboard.grid,
  grid: aiGrid,
});
gameLoop();
export { playerGameboard, aiGameboard };
