import './style.css';
import boat from './images/boat.png';
// boat image for one square
const boatImg = new Image();
boatImg.src = boat;

console.log(boatImg);

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
        cell.style.cursor = 'pointer';
        // on click get the [x,y] coordinate for specific cell
        cell.addEventListener('click', (e) => {
          console.log(e);
          const x = e.target.parentElement.rowIndex;
          const y = e.target.cellIndex;
          const coordinates = [x, y];
          console.log(coordinates);
          // receive an attack
          playerGameboard.receiveAttack(newShip, coordinates);
          // append boat image inside cell
          cell.textContent = '';
          cell.appendChild(boatImg);
          console.log(playerGameboard);
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
// implement a system for allowing to place ships *later*

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
console.log(ai);

export { playerGameboard, aiGameboard };
