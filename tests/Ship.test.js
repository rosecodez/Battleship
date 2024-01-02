const Ship = require('../src/Ship');

test('attacking ship 4 times leads to sinking it', () => {
  const testShip = new Ship(4);
  testShip.hit();
  testShip.hit();
  testShip.hit();
  testShip.hit();
  testShip.isSunk();
  expect(testShip.isSunk()).toBeTruthy();
});
test('ship is attacked once', () => {
  const testShip = new Ship(4);
  testShip.hit();
  expect(testShip.isHit()).toBeTruthy();
});
