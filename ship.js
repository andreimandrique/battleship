function Ship(name, size) {
  this.name = name;
  this.size = size;

  this.hit = function () {
    this.size--;
  };

  this.isSunk = function () {
    if (this.size == 0) return true;
  };

  this.position = function ([x, y]) {
    this.position = [x, y];
    return this.position;
  };

  this.path = function (dir) {
    if (dir == "h") {
      const startPosition = this.position;
      const x = this.position[0] + (this.size - 1);
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
      const y = this.position[1] + (this.size - 1);
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
