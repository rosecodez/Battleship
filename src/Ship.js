class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  // each time ship gets a hit, increment value of timesHit
  hit() {
    return this.timesHit++;
  }

  /* calculate whether a ship is considered sunk based on difference between length
  and the numbers of hits it has received */
  isSunk() {
    if (this.length === this.timesHit) {
      return true;
    }
    return false;
  }
}

module.exports = Ship;
