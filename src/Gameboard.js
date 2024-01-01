/* eslint-disable no-plusplus */
const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.ships = [];
    this.shipsSunk = [];
    this.missedShots = [];
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

  // take a pair of coordinates, determine if ship has taken damage,
  // then sends the hit function to the correct ship, or
  // records the coordinates of the missed shot
  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    this.grid[x][y] = 'x';

    const missedShot = coordinates;
    console.log(`missed shot is:${missedShot}`);
    this.missedShots.push(missedShot);
    console.log(this.missedShots);

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
console.log(newShip);
const testGameboard = new Gameboard();
testGameboard.placeShip(newShip, [0, 0]);
testGameboard.receiveAttack([6, 5]);
testGameboard.receiveAttack([0, 0]);
