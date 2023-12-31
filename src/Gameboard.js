const Ship = require('./Ship');

class Gameboard {
  constructor() {
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(0));
  }

  // place ship at specific coordinates bt calling ship constructor
  placeShip(row, col) {

  }

  receiveAttack(row, col) {

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
const testGameboard = new Gameboard();
console.log(testGameboard);
