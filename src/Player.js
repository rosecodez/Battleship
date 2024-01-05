const Gameboard = require('./Gameboard');
const Ship = require('./Ship');

class Player {
  constructor(name) {
    this.name = name;
    this.grid = new Gameboard();
  }

  attack(coordinates) {
    return this.grid.receiveAttack(coordinates);
  }

  placeShip(ship, coordinates) {
    return this.grid.placeShip(ship, coordinates);
  }
}
module.exports = Player;

const testShip = new Ship(4);
console.log(testShip);

const john = new Player('John');
console.log(john.grid);

john.placeShip(testShip, [0, 0]);
