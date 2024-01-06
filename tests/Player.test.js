const Ship = require('../src/Ship');
const Gameboard = require('../src/Gameboard');
const Player = require('../src/Player');

test('create player "john" ', () => {
  const john = new Player('John');
  expect(john).toBeTruthy();
});

test('create player "ai" ', () => {
  const ai = new Player('ai');
  expect(ai).toBeTruthy();
});

test('john places a vertical ship on first square of the board ', () => {
  const john = new Player('John');
  const testShip = new Ship(4);
  john.placeShip(testShip, [0, 0], 'vertical');
  expect(john.placeShip(testShip, [0, 0])).toBeTruthy();
});
