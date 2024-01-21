import './style.css';
import { gameLoop } from './gameloop';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

const humanGrid = document.getElementById('human-grid');
const aiGrid = document.getElementById('ai-grid');

const playerGameboard = new Gameboard();
const aiGameboard = new Gameboard();

// function that takes the 2D array created in Gameboard.js constructors as parameter
// and it renders it into a table and appends to the html
function createTable({ tableData, grid }) {
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
