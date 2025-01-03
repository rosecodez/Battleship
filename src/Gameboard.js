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
      const maxLeftAndRightValue = coordinates[1] + (ship.length - 1);
      if (this.isLegalCoordinates([x, maxLeftAndRightValue])) {
        return true;
      }
    }

    if (direction === "vertical") {
      const maxUpAndDownValue = coordinates[0] + (ship.length - 1);
      if (this.isLegalCoordinates([maxUpAndDownValue, y])) {
        return true;
      }
    }
    return false;
  }

  isOverlapping(ship, coordinates, direction) {
    const [x, y] = coordinates;

    if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x][y + 1] !== "") {
          return true;
        }
      }
    } else if (direction === "horizontal") {
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x + i][y] !== "") {
          return true;
        }
      }
    }
    return false;
  }
  placeShip(ship, coordinates, direction) {
    if (
      !this.isLegalCoordinates(coordinates) &&
      !this.shipOutOfBounds(ship, coordinates, direction)
    ) {
      throw new Error("coordinates are higher than board row/column ");
    } else {
      const [x, y] = coordinates;
      if (direction === "vertical") {
        for (let i = 0; i < ship.length; i++) {
          this.grid[x + i][y] = ship;
        }
        this.ships.push(ship);
      } else {
        for (let i = 0; i < ship.length; i++) {
          this.grid[x][y + i] = ship;
        }
        this.ships.push(ship);
      }
      return this.grid;
    }
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
      console.error("Already shot");
      return this.grid.coordinates;
    }

    if (this.grid[x][y] === "") {
      this.grid[x][y] = "x";
      this.missedShots.push(this.grid[x][y]);
    } else if (ship instanceof Ship) {
      this.shipsSunk.push(this.grid[x][y]);
      ship.hit();
    } else {
      console.error("Invalid parameter for receive attack");
      return this.grid;
    }

    return this.grid;
  }

  allSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }

  getRandomPlace(ship) {
    const x = Math.floor(Math.random() * 9);
    const y = Math.floor(Math.random() * 9);
    const coordinates = [x, y];
    const directions = ["horizontal", "vertical"];

    const directionChoice =
      directions[Math.floor(Math.random() * directions.length)];

    if (
      this.isLegalCoordinates(coordinates) &&
      this.shipOutOfBounds(ship, coordinates, directionChoice)
    ) {
      return this.placeShip(ship, coordinates, directionChoice);
    }
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
