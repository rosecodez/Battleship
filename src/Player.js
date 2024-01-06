const Gameboard = require('./Gameboard');
const Ship = require('./Ship');

class Player {
  constructor(name) {
    this.name = name;
  }

  attack(coordinates) {
    this.grid = new Gameboard();
    return this.grid.receiveAttack(coordinates);
  }

  placeShip(ship, coordinates, direction) {
    this.grid = new Gameboard();
    return this.grid.placeShip(ship, coordinates, direction);
  }
}
module.exports = Player;

const testShip = new Ship(4);
console.log(testShip);

const john = new Player('John');

john.placeShip(testShip, [0, 0], 'vertical');
console.log(john.grid);
