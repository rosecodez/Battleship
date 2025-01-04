/* eslint-disable no-console */
/* eslint-disable no-plusplus */

const Ship = require("./Ship");
const Player = require("./Player");
class Gameboard {
  constructor() {
    this.ships = [];
    this.shipsSunk = [];
    this.missedShots = [];
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(""));
  }

  isLegalCoordinates(coordinates) {
    const [x, y] = coordinates;
    if (x >= 0 && x <= 9 && y >= 0 && y <= 9) {
      return true;
    }
    return false;
  }

  shipOutOfBounds(ship, coordinates, direction) {
    const [x, y] = coordinates;

    if (direction === "horizontal") {
      const maxY = y + (ship.length - 1);
      return maxY > 9;
    }

    if (direction === "vertical") {
      const maxX = x + (ship.length - 1);
      return maxX > 9;
    }
    return false;
  }

  isOverlapping(ship, coordinates, direction) {
    const [x, y] = coordinates;

    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (
          !this.isLegalCoordinates([x, y + i]) ||
          this.grid[x][y + i] !== ""
        ) {
          return true;
        }
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        if (
          !this.isLegalCoordinates([x + i, y]) ||
          this.grid[x + i][y] !== ""
        ) {
          return true;
        }
      }
    }
    return false;
  }

  validateCoordinates(ship, coordinates, direction) {
    if (this.shipOutOfBounds(ship, coordinates, direction)) {
      throw new Error("ship placement is out of bounds");
    }
    if (this.isOverlapping(ship, coordinates, direction)) {
      throw new Error("ship placement is overlapping");
    }
  }

  placeShip(ship, coordinates, direction) {
    this.validateCoordinates(ship, coordinates, direction);

    const [x, y] = coordinates;
    if (direction === "vertical") {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x + i][y] = ship;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        this.grid[x][y + i] = ship;
      }
    }
    this.ships.push(ship);
    return this.grid;
  }

  alreadyShot(coordinates) {
    const [x, y] = coordinates;
    if (this.grid[x][y] === "x") {
      return true;
    }
    return false;
  }

  receiveAttack(ship, coordinates) {
    const [x, y] = coordinates;

    if (this.alreadyShot(coordinates)) {
      return false;
    }

    if (this.grid[x][y] instanceof Ship) {
      this.grid[x][y].hit();
      this.grid[x][y] = "x";
      return true;
    } else {
      this.grid[x][y] = "";
      this.missedShots.push(coordinates);
      return false;
    }
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  getRandomPlace(ship) {
    let attempts = 0;
    while (attempts < 50) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const coordinates = [x, y];
      const directions = ["horizontal", "vertical"];

      const directionChoice =
        directions[Math.floor(Math.random() * directions.length)];

      try {
        this.placeShip(ship, coordinates, directionChoice);
        return;
      } catch (error) {
        attempts++;
      }
    }
    throw new Error("get random place fail");
  }

  reset() {
    this.ships.forEach((ship) => {
      ship.timesHit = 0;
      ship.sunk = false;
    });

    this.ships = [];
    this.shipsSunk = [];
    this.missedShots = [];
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(""));
  }
}

module.exports = Gameboard;
