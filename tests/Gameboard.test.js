const Ship = require('../src/Ship');
const Gameboard = require('../src/Gameboard');

test('create a 10x10 array board with null in each square', () => {
  const testGameboard = new Gameboard();

  // check the length of the grid array
  expect(testGameboard.grid.length).toBe(10);
  // check if every child of grid is an array
  expect(testGameboard.grid.every(Array.isArray)).toBe(true);
  // check if every child of grid has a length of 10
  expect(testGameboard.grid.every((array) => array.length === 10)).toBe(true);
  // check if every element of every array in .grid is `0`
  expect(testGameboard.grid.every((array) => array.every((element) => element === null))).toBe(true);
});

test('place a 4 square ship on first row', () => {
  const newShip = new Ship(4);
  const testGameboard = new Gameboard();
  testGameboard.placeShip(newShip, [0, 0]);
  expect(testGameboard.placeShip(newShip, [0, 0])).toBeTruthy();
});

test('receive attack on last square of the ship', () => {
  const testGameboard = new Gameboard();
  const newShip = new Ship(4);
  testGameboard.placeShip(newShip, [0, 0]);
  expect(testGameboard.receiveAttack(newShip, [0, 0])).toBeTruthy();
});
