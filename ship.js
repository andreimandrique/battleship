function Ship(name, hp) {
  this.name = name;
  this.hp = hp;

  this.hit = function () {
    this.hp--;
  };

  this.isSunk = function () {
    if (this.hp == 0) return true;
  };

  this.position = function ([x, y]) {
    this.position = [x, y];
    return this.position;
  };

  this.path = function (dir) {
    if (dir == "h") {
      const startPosition = this.position;
      const x = this.position[0] + (this.hp - 1);
      const y = this.position[1];
      const endPosition = [x, y];
      const fullPath = [];

      while (startPosition[0] != endPosition[0]) {
        const path = [];
        const pathingX = startPosition[0]++;
        const pathingY = startPosition[1];
        path.push(pathingX, pathingY);
        fullPath.push(path);
      }

      fullPath.push(endPosition);
      return { endPosition, fullPath };
    } else if (dir == "v") {
      const startPosition = this.position;
      const x = this.position[0];
      const y = this.position[1] + (this.hp - 1);
      const endPosition = [x, y];
      const fullPath = [];

      while (startPosition[1] != endPosition[1]) {
        const path = [];
        const pathingX = startPosition[0];
        const pathingY = startPosition[1]++;
        path.push(pathingX, pathingY);
        fullPath.push(path);
      }

      fullPath.push(endPosition);
      return { endPosition, fullPath };
    }
  };
}

export default Ship;
