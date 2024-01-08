/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const { max } = require('lodash');
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
      console.log('coordinate is true');
      return true;
    }
    console.log('coordinate is false');
    return false;
  }

  shipOutOfBonds(ship, coordinates, direction) {
    const [x, y] = coordinates;

    if (direction === 'horizontal') {
      const maxLeftAndRightValue = coordinates[1] + (ship.length - 1);
      console.log(`max left right value horizontal: ${maxLeftAndRightValue}`);
      if (this.isLegalCoordinates([x, maxLeftAndRightValue])) {
        console.log('horizontal coordinate is true');
        return true;
      }
    }

    if (direction === 'vertical') {
      const maxLeftAndRightValueV = coordinates[1] + (ship.length - 1);
      console.log(`max left right value vertical: ${maxLeftAndRightValueV}`);
      if (this.isLegalCoordinates([y, maxLeftAndRightValueV])) {
        console.log('vertical coordinate is true');
        return true;
      }
    }
    console.log('coordinate is false');
    return false;
  }

  placeShip(ship, coordinates, direction) {
    if (!this.isLegalCoordinates(coordinates)) {
      throw new Error('coordinates are higher than board row/column ');
    } else if (!this.shipOutOfBonds(ship, coordinates, direction)) {
      throw new Error('ship out of bounds ');
    } else {
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
