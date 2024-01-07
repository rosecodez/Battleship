/* eslint-disable no-plusplus */
/* eslint-disable max-classes-per-file */
const Gameboard = require('./Gameboard');

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

  isLegal(coordinates) {
    return this.grid.isLegal(coordinates);
  }
}

class Ai extends Player {
  getRandomChoice() {
    const x = [Math.floor(Math.random() * 9)];
    const y = [Math.floor(Math.random() * 9)];
    const shipRandomSize = [Math.floor(Math.random() * 4)];
    console.log(`ship random size is: ${shipRandomSize}`);
    const direction = ['horizontal', 'vertical'];
    const directionChoice = direction[Math.floor(Math.random() * direction.length)];
    console.log(`direction choice is: ${directionChoice}`);

    const coordinates = [x, y];
    if (!this.isLegal(coordinates)) {
      console.log('random choice -> its not a legal move');
    }
    console.log('random choice -> legal move');

    this.attack(shipRandomSize, coordinates);
    this.placeShip(shipRandomSize, coordinates, direction);
  }
}

module.exports = Player;

const ai = new Ai('Ai');
ai.getRandomChoice();
console.log(ai.grid);
