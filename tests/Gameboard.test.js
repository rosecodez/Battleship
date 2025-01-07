const Ship = require("../src/Ship");
const Gameboard = require("../src/Gameboard");

const shipObject = {
  length: 4,
  sunk: false,
  timesHit: 0,
};

test("create a 10x10 array board with empty string in each square", () => {
  const testGameboard = new Gameboard();

  // check the length of the grid array
  expect(testGameboard.grid.length).toBe(10);
  // check if every child of grid is an array
  expect(testGameboard.grid.every(Array.isArray)).toBe(true);
  // check if every child of grid has a length of 10
  expect(testGameboard.grid.every((array) => array.length === 10)).toBe(true);
  // check if every element of every array in .grid is an empty string
  expect(
    testGameboard.grid.every((array) =>
      array.every((element) => element === "")
    )
  ).toBe(true);
});

test("place a 4 square ship on first row", () => {
  const newShip = new Ship(4);
  const testGameboard = new Gameboard();
  testGameboard.placeShip(newShip, [0, 0], "horizontal");
  console.log(testGameboard);
  expect(testGameboard.grid[0][0]).toEqual(shipObject);
  expect(testGameboard.grid[0][1]).toEqual(shipObject);
  expect(testGameboard.grid[0][2]).toEqual(shipObject);
  expect(testGameboard.grid[0][3]).toEqual(shipObject);
});

test("receive attack on first square of the ship", () => {
  const testGameboard = new Gameboard();
  const newShip = new Ship(4);
  testGameboard.placeShip(newShip, [0, 0], "horizontal");
  expect(testGameboard.receiveAttack(newShip, [0, 0])).toBeTruthy();
});

test("all ships sunk", () => {
  const testGameboard = new Gameboard();
  const newShip = new Ship(4);
  testGameboard.placeShip(newShip, [0, 0]);
  newShip.hit();
  expect(newShip.timesHit).toBe(1);
  newShip.hit();
  expect(newShip.timesHit).toBe(2);
  newShip.hit();
  expect(newShip.timesHit).toBe(3);
  newShip.hit();
  expect(newShip.timesHit).toBe(4);
  newShip.isSunk();
  expect(newShip).toBeTruthy();
  expect(testGameboard.allSunk()).toBeTruthy();
});

test("place a 4 square ship on first row, horizontally", () => {
  const newShip = new Ship(4);
  const testGameboard = new Gameboard();
  // expect the grid to be returned
  expect(testGameboard.placeShip(newShip, [0, 2], "horizontal")).toBeTruthy();

  // expect the spot we placed the ship not to be empty string
  expect(testGameboard.grid[0][2]).not.toBe("");

  // expect the other spots the ship will fill not to be empty string
  expect(testGameboard.grid[0][3]).not.toBe("");
  expect(testGameboard.grid[0][4]).not.toBe("");
  expect(testGameboard.grid[0][5]).not.toBe("");

  // expect the spot right after the ship to still be empty string
  expect(testGameboard.grid[0][7]).toBe("");
});

test("place a 4 square ship on first row, vertically", () => {
  const newShip = new Ship(4);
  const testGameboard = new Gameboard();

  // expect the grid to be returned
  expect(testGameboard.placeShip(newShip, [0, 2], "vertical")).toBeTruthy();

  // expect the spot we placed the ship not to be empty string
  expect(testGameboard.grid[0][2]).not.toBe("");

  // expect the other spots the ship will fill not to be empty string
  expect(testGameboard.grid[1][2]).not.toBe("");
  expect(testGameboard.grid[2][2]).not.toBe("");
  expect(testGameboard.grid[3][2]).not.toBe("");

  // expect the spot right after the ship to still be empty string
  expect(testGameboard.grid[4][2]).toBe("");
});

test("ai random ship placements", () => {
  const testGameboard = new Gameboard();

  const oneSquareShip = new Ship(1);
  const twoSquareShip = new Ship(2);
  const fourSquareShip = new Ship(4);

  testGameboard.getRandomPlace(oneSquareShip);
  testGameboard.getRandomPlace(twoSquareShip);
  testGameboard.getRandomPlace(fourSquareShip);

  const totalShipCells =
    oneSquareShip.length + twoSquareShip.length + fourSquareShip.length;

  const occupiedCells = testGameboard.grid.flat().filter((cell) => cell !== "");

  expect(occupiedCells.length).toBe(totalShipCells);
});
