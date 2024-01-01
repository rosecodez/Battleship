/* eslint-disable no-plusplus */
const { isObject } = require('lodash');
const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.shipsSunk = [];
    this.missedShots = [];
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(null));
  }

  // place ship at specific coordinates by calling ship constructor
  placeShip(ship, coordinates) {
    const [x, y] = coordinates;

    for (let i = 0; i < ship.length; i++) {
      this.grid[x][y + i] = ship;
    }

    this.ships.push(ship);
    return this.grid;
  }

  // take a pair of coordinates, determine if ship has taken damage,
  // then sends the hit function to the correct ship, or
  // records the coordinates of the missed shot
  receiveAttack(ship, coordinates) {
    const [x, y] = coordinates;

    // if the square is null
    if (this.grid[x][y] === null) {
      // overwrite it with 'x'
      this.grid[x][y] = 'x';
      // add it to missed shots array
      this.missedShots.push(this.grid[x][y]);
      console.log(`missed shots array is:${this.missedShots}`);
    } else {
      // else hit that ship
      ship.hit();
    }

    return this.grid;
  }

  allSunk() {
    if (shipsSunk.length === 0) {
      console.log('all ships were sunk');
      return true;
    }
    console.log('not all ships were sunk');
    return false;
  }
}
module.exports = Gameboard;

const newShip = new Ship(4);
const testGameboard = new Gameboard();
testGameboard.placeShip(newShip, [0, 0]);
testGameboard.receiveAttack(newShip, [0, 0]);
testGameboard.receiveAttack(newShip, [9, 9]);
console.log(testGameboard);
