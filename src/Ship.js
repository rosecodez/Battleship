class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  // each time ship gets a hit, increment value of timesHit
  hit() {
    // eslint-disable-next-line no-plusplus
    return this.timesHit++;
  }

  isHit() {
    if (this.timesHit >= 0) {
      return true;
    }
    return false;
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
