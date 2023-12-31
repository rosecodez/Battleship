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

  isLegalCoordinates(coordinates) {
    const [x, y] = coordinates;
    if (x >= 0 && x < 9 && y >= 0 && y < 9) {
      return true;
    }
    return false;
  }

  shipOutOfBounds(ship, coordinates, direction) {
    const [x, y] = coordinates;

    if (direction === 'horizontal') {
      const maxLeftAndRightValue = coordinates[1] + (ship.length - 1);
      if (this.isLegalCoordinates([x, maxLeftAndRightValue])) {
        return true;
      }
    }

    if (direction === 'vertical') {
      const maxUpAndDownValue = coordinates[0] + (ship.length - 1);
      if (this.isLegalCoordinates([maxUpAndDownValue, y])) {
        return true;
      }
    }
    return false;
  }

  placeShip(ship, coordinates, direction) {
    if (!this.isLegalCoordinates(coordinates)
      && !this.shipOutOfBounds(ship, coordinates, direction)) {
      throw new Error('coordinates are higher than board row/column ');
    } else {
      const [x, y] = coordinates;
      if (direction === 'vertical') {
        for (let i = 0; i < ship.length; i++) {
          this.grid[x + i][y] = ship;
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
  }

  alreadyShot(coordinates) {
    const [x, y] = coordinates;

    if (this.grid[x][y] === 'x') {
      console.log('coordinate has an x already');
      return true;
    }
    console.log('coordinate doesnt have an x ');
    return false;
  }

  receiveAttack(ship, coordinates) {
    const [x, y] = coordinates;
    if (this.alreadyShot(coordinates)) {
      throw new Error('already shot');
    }
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
const newShip = new Ship(4);
const testGameboard = new Gameboard();
testGameboard.placeShip(newShip, [6, 0], 'vertical');
testGameboard.receiveAttack(newShip, [0, 0]);
testGameboard.receiveAttack(newShip, [0, 1]);
console.log(testGameboard);
