import Ship from "./ship.js";
import { randomPosition, randomDirection } from "./random.js";

const board = [
  [, , , , , , , , ,], // 0
  [, , , , , , , , ,], // 1
  [, , , , , , , , ,], // 2
  [, , , , , , , , ,], // 3
  [, , , , , , , , ,], // 4   Y
  [, , , , , , , , ,], // 5
  [, , , , , , , , ,], // 6
  [, , , , , , , , ,], // 7
  [, , , , , , , , ,], // 8
  [, , , , , , , , ,], // 9
];
//0 1 2 3 4 5 6 7 8 9         X

function placeCarrier() {
  while (true) {
    const randomP = randomPosition();
    const randomD = randomDirection();

    const carrier = new Ship("carrier", 5);
    const startPosition = carrier.position(randomP);
    const { endPosition, fullPath } = carrier.path(randomD);

    if (endPosition[0] < 10 && endPosition[1] < 10) {
      return fullPath;
    }
  }
}
