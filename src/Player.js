/* eslint-disable no-bitwise */
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

  isLegal(coordinates) {
    return this.grid.isLegal(coordinates);
  }
}

class Ai extends Player {
  getRandomPlace() {
    const ship = new Ship(4);

    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    const coordinates = [x, y];

    const directions = ['horizontal', 'vertical'];
    const directionChoice = directions[Math.floor(Math.random() * directions.length)];

    this.placeShip(ship, coordinates, directionChoice);
  }

  getRandomAttack() {
    const ship = new Ship(4);

    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    const coordinates = [x, y];
    this.attack(ship, coordinates);
  }
}

module.exports = Player;

const ai = new Ai('Ai');
ai.getRandomPlace();
ai.getRandomAttack();

console.log(ai.grid);
