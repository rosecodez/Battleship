/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.shipsSunk = [];
    this.missedShots = [];
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(null));
  }

  isLegal(coordinates) {
    const [x, y] = coordinates;
    if (x >= 0 && x < 9 && y >= 0 && y < 9) {
      console.log('move is on board');
    } else {
      console.log('move is not on board');
    }
  }

  // place ship at specific coordinates by calling ship constructor
  placeShip(ship, coordinates, direction) {
    if (!this.isLegal(coordinates)) {
      throw new Error('Move is not on board');
    }
    const [x, y] = coordinates;
    if (direction === 'vertical') {
      console.log('vertical');
      for (let i = 0; i < ship.length; i++) {
        this.grid[y + i][x] = ship;
      }
      this.ships.push(ship);
    } else {
      console.log('horizontal');
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
      this.ships.push(ship);
    }
    return this.grid;
  }

  // take a pair of coordinates, determine if ship has taken damage,
  // then sends the hit function to the correct ship, or
  // records the coordinates of the missed shot
  receiveAttack(ship, coordinates) {
    const [x, y] = coordinates;
    this.grid[x][y] = 'x';
    // if the square is null
    if (this.grid[x][y] === null) {
      // add it to missed shots array
      this.missedShots.push(coordinates);
      console.log(`missed shots array is:${this.missedShots}`);
    } else {
      // else hit that ship
      ship.hit();
    }
    return this.grid;
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
module.exports = Gameboard;

const testGameboard = new Gameboard();
const newShip = new Ship(4);
testGameboard.isLegal([100, 100]);
testGameboard.isLegal([1, 1]);

// testGameboard.placeShip(newShip, [10, 10], 'vertical');
// testGameboard.receiveAttack(newShip, [0, 0]);
// testGameboard.receiveAttack(newShip, [9, 9], 'horizontal');
console.log(testGameboard);
