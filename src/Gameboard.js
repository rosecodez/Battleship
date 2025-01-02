/* eslint-disable no-console */
/* eslint-disable no-plusplus */

const Ship = require("./Ship");

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
      return this.grid;
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

  reset() {
    this.shipsSunk = [];
    this.missedShots = [];
    this.grid = new Array(10).fill(0).map(() => new Array(10).fill(""));

    this.ships.forEach((ship) => {
      ship.timesHit = 0;
      ship.sunk = false;
    });
  }
}

module.exports = Gameboard;
