const Gameboard = require('./Gameboard');
const Ship = require('./Ship');

class Player {
  constructor(name) {
    this.name = name;
    this.grid = new Gameboard();
  }

  attack(ship, coordinates) {
    return this.grid.receiveAttack(ship, coordinates);
  }

  placeShip(ship, coordinates, direction) {
    return this.grid.placeShip(ship, coordinates, direction);
  }
}
module.exports = Player;

const testShip = new Ship(4);

const john = new Player('John');

john.placeShip(testShip, [0, 0], 'vertical');
john.attack(testShip, [0, 0]);
console.log(john.grid);
console.log(testShip);
