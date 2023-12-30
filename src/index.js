class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  getLength() {
    return this.length;
  }

  // each time ship gets a hit, increment value of timesHit
  hit() {
    return this.timesHit++;
  }

  /* calculate whether a ship is considered sunk based on length
  and the numbers of hits it has received */
  isSunk() {
    if (this.length === this.timesHit) {
      console.log('ship was sunk!');
    }
  }
}
const testShip = new Ship(4);
testShip.hit();
testShip.hit();
testShip.hit();
testShip.hit();
testShip.isSunk();
console.log(testShip);
