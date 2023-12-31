class Gameboard {
  constructor(row, col) {
    const shipsSunkArray = [];
    const grid = new Array(row).fill(new Array(col).fill(0));
    return grid;
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
const testGameboard = new Gameboard(10, 10);
console.log(testGameboard);
