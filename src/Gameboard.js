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
