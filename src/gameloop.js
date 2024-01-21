// game loop should step through the game turn by turn
// using only methods from other objects
// if at any point i am tempted to write a new function inside the game loop
// step back and figure out which class or module that function should belong to
import playerGameboard from '.';
import { aiGameboard } from '.';
import Ship from './Ship';

function createShips(grid) {
  // each player will have 4shipx1square,3shipx4square, 3shipx2square
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
  grid.placeShip(oneSquareShip, [6, 0], 'vertical');
}

export default function gameLoop() {
  const cell = document.getElementById('cell');
  // game preparation
  // place ships
  createShips(playerGameboard);
  createShips(aiGameboard);

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
