/* eslint-disable no-plusplus */
const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.shipsSunk = [];
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(0));
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

  // method to check if coordinates are on board range
  //
  isVaild() {

  }

  // take a pair of coordinates, determine if ship has taken damage,
  // then sends the hit function to the correct ship, or
  // records the coordinates of the missed shot
  receiveAttack(coordinates) {

  }

  allSunk() {
    if (shipsSunkArray.length !== 0) {
      console.log('all ships were sunk');
      return true;
    }
    console.log('not all ships were sunk');
    return false;
  }
}
module.exports = Gameboard;
const newShip = new Ship(4);
console.log(newShip);
const testGameboard = new Gameboard();
testGameboard.placeShip(newShip, [0, 0]);
console.log(testGameboard);
