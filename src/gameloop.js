// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to
import Ship from './Ship';

export function createShips(grid) {
  // each player will have 4 ship x 1square,3 ship x 4square, 3 ship x 2square
  const oneSquareShip = new Ship(1);
  const oneSquareShipTwo = new Ship(1);
  const oneSquareShipThree = new Ship(1);
  const oneSquareShipFour = new Ship(1);

  const twoSquareShipOne = new Ship(2);
  const twoSquareShipTwo = new Ship(2);
  const twoSquareShipThree = new Ship(2);

  const fourSquareShipOne = new Ship(4);
  const fourSquareShipTwo = new Ship(4);
  const fourSquareShipThree = new Ship(4);

  // random placement
  // random coordinates
  const x = Math.floor(Math.random() * 9);
  const y = Math.floor(Math.random() * 9);
  const coordinates = [x, y];

  // random direction
  const directions = ['horizontal', 'vertical'];
  const direction = directions[Math.floor(Math.random() * directions.length)];

  grid.placeShip(oneSquareShip, coordinates, direction);
  grid.placeShip(oneSquareShipTwo, coordinates, direction);
  grid.placeShip(oneSquareShipThree, coordinates, direction);
  grid.placeShip(oneSquareShipFour, coordinates, direction);
  grid.placeShip(twoSquareShipOne, coordinates, direction);
  grid.placeShip(twoSquareShipTwo, coordinates, direction);
  grid.placeShip(twoSquareShipThree, coordinates, direction);
  grid.placeShip(fourSquareShipOne, coordinates, direction);
  grid.placeShip(fourSquareShipTwo, coordinates, direction);
  grid.placeShip(fourSquareShipThree, coordinates, direction);
}

export default function gameLoop() {
  const cell = document.querySelectorAll('td');
  console.log(cell);
  // game preparation
  // place ships
  // HTML Drag and Drop API for human player
  // start game
  // turn-based style, increment each turn
  // shots firing

  // game score
  // when all the ships of a player are sunk the other player wins

  // 3.
  // create conditions so that the game ends once one player's ships have all been sunk
  // this function is appropriate for the game modules

  // game ends
  // open module
  // restart / play again
}
