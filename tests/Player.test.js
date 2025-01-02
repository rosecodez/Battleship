const Ship = require("../src/Ship");
const Player = require("../src/Player");
const Ai = require("../src/Player");

test('create player "john" ', () => {
  const john = new Player("John");
  expect(john).toBeTruthy();
});

test('create player "ai" ', () => {
  const ai = new Player("ai");
  expect(ai).toBeTruthy();
});

test("john places a vertical ship on first square of the board ", () => {
  const john = new Player("John");
  const testShip = new Ship(4);
  john.placeShip(testShip, [0, 0], "vertical");
  expect(john.placeShip(testShip, [0, 0])).toBeTruthy();
});

test("john attacks a square on board", () => {
  const john = new Player("John");
  const testShip = new Ship(4);
  john.placeShip(testShip, [0, 0], "vertical");
  john.attack(testShip, [0, 0]);
  expect(john.attack(testShip, [0, 0])).toBeTruthy();
});

test("ai places a random ship on board ", () => {
  const ai = new Ai("Ai");
  ai.getRandomPlace();
  expect(ai.getRandomPlace()).toBeTruthy();
});

test("ai attacks a random square on board ", () => {
  const ai = new Ai("Ai");
  ai.getRandomAttack();
  expect(ai.getRandomAttack()).toBeTruthy();
});
