function Ship(shipName, hp) {
  this.shipName = shipName;
  this.hp = hp;

  this.setPosition = function ([x, y]) {
    this.position = [x, y];
  };

  this.getPosition = function () {
    const position = this.position;
    console.log(position);
    return position;
  };

  this.setDirection = function (direction) {
    this.direction = direction;
  };

  this.getDirection = function () {
    const direction = this.direction;
    console.log(direction);
    return direction;
  };

  this.hit = function () {
    this.hp--;
  };

  this.isSunk = function () {
    if (this.hp == 0) {
      console.log(`${this.shipName} sunk`);
      return true;
    }
  };
}

export default Ship;
