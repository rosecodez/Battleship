import './style.css';
import { createShips } from './gameloop';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

const humanGrid = document.getElementById('human-grid');
const aiGrid = document.getElementById('ai-grid');
const content = document.getElementById('content');

const john = new Player('John');
const ai = new Player('ai');

const newShip = new Ship(4);

const playerGameboard = new Gameboard();
const aiGameboard = new Gameboard();

// function that takes the 2D array created in Gameboard.js constructors as parameter
// and it renders it into a table and appends to the html
function createTable({ tableData, grid, boolean }) {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  tableData.forEach((rowData) => {
    const row = document.createElement('tr');

    rowData.forEach((cellData) => {
      const cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
      // if boolean is true as parameter,
      // these code blocks are only intended for human player,
      // ai will automatically make its move if boolean is false
      if (boolean === true) {
        // on click get the [x,y] coordinate for specific cell
        cell.addEventListener('click', (e) => {
          console.log(e);
          const x = e.target.parentElement.rowIndex;
          const y = e.target.cellIndex;
          const coordinates = [x, y];
          console.log(coordinates);
          // receive an attack
          playerGameboard.receiveAttack(newShip, coordinates);
          cell.textContent = '';
          cell.style.backgroundColor = 'black';
        });
      }
      // if boolean is false, code belongs to ai table
      if (boolean === false) {
        //
      }
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  grid.appendChild(table);
}

createTable({
  tableData: playerGameboard.grid,
  grid: humanGrid,
  boolean: true,
});
createTable({
  tableData: aiGameboard.grid,
  grid: aiGrid,
  boolean: false,
});
createShips(playerGameboard);
createShips(aiGameboard);
console.log(playerGameboard);
console.log(playerGameboard);
export { playerGameboard, aiGameboard };
