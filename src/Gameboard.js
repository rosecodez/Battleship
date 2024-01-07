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
      return true;
    }
    return false;
  }

  // place ship at specific coordinates by calling ship constructor
  placeShip(ship, coordinates, direction) {
    if (!this.isLegal(coordinates)) {
      throw new Error('move is not on board ');
    }
    const [x, y] = coordinates;
    if (direction === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        this.grid[y + i][x] = ship;
      }
      this.ships.push(ship);
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
      this.ships.push(ship);
    }
    return this.grid;
  }

  receiveAttack(ship, coordinates) {
    const [x, y] = coordinates;
    if (this.grid[x][y] === null) {
      this.grid[x][y] = 'x';
      this.missedShots.push(this.grid[x][y]);
    } else {
      ship.hit();
    }

    return this.grid;
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
module.exports = Gameboard;
