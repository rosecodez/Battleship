// 1.
// set up a new game
// create players and gameboards
// populate each gameboard with predetermined coordinates
// implement a system for allowing to place ships *later*

// 2.
// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to

// 3.
// create conditions so that the game ends once one player's ships have all been sunk
// this function is appropriate for the game modules
import './style.css';

const Gameboard = require('./Gameboard');
const Ship = require('./Ship');
const Player = require('./Player');

const humanGrid = document.getElementById('human-grid');
const aiGrid = document.getElementById('ai-grid');
const content = document.getElementById('content');


const john = new Player('John');
console.log(john.grid)
const ai = new Player('ai');


function createTable({tableData, grid, boolean}) {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  tableData.forEach((rowData) => {
    const row = document.createElement('tr');

    rowData.forEach((cellData) => {
      const cell = document.createElement('td');
      
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
      // override cell content - the initial "null" 
      cell.innerHTML = '';
      if(boolean === true) {
        cell.style.cursor = "pointer";
        //on click return the [x,y] coordinate for specific cell
        cell.addEventListener('click', function(evt) {
          console.log(cell.innerHTML);
          const x = evt.target.parentElement.rowIndex;
          const y = evt.target.cellIndex;
          const coordinates = [x,y];
          console.log(coordinates);
          playerGameboard.receiveAttack(newShip, coordinates);
        })
      }
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  grid.appendChild(table);
  
}

const newShip = new Ship(4);
const playerGameboard = new Gameboard();
const aiGameboard = new Gameboard();
console.log(playerGameboard)

//playerGameboard.placeShip(newShip, [6, 0], 'vertical');

//aiGameboard.placeShip(newShip, [0, 0], 'horizontal');
//aiGameboard.receiveAttack(newShip, [0, 9]);

createTable({
  tableData: playerGameboard.grid, 
  grid: humanGrid,
  boolean: true
});
createTable({
  tableData: aiGameboard.grid,
  grid: aiGrid,
  boolean: false
});
