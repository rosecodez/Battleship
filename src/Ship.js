class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
    this.sunk = false;
  }

  // each time ship gets a hit, increment value of timesHit
  hit() {
    // eslint-disable-next-line no-plusplus
    this.timesHit++;
    if (this.timesHit >= this.length) {
      // if all ships are sunk and true, player wins
      this.sunk = true;
    }
  }

  isHit() {
    return this.timesHit > 0;
  }

  /* calculate whether a ship is considered sunk based on difference between length
  and the numbers of hits it has received */
  isSunk() {
    return this.sunk;
  }
}

module.exports = Ship;
