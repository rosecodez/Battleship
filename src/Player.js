/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
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
class Ai extends Player {
  getRandomChoice(ship, coordinates) {
    const [x, y] = coordinates;
    if (!this.isLegal(ship, this.grid[x][y])) {
      console.log('its not a legal move');
    }
    console.log('legal move');
    // code to get random choice
  }
}
module.exports = Player;

const testShip = new Ship(4);

const ai = new Ai('Ai');
ai.placeShip(testShip, [0, 0], 'horizontal');
ai.attack(testShip, [0, 0]);
ai.getRandomChoice();
console.log(ai.grid);
console.log(testShip);
