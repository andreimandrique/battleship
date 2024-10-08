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

const occupied = new Set();

function positionToString(position) {
  return `${position[0]},${position[1]}`;
}

function isPathClear(path) {
  for (const position of path) {
    if (occupied.has(positionToString(position))) {
      return false;
    }
  }
  return true;
}

function placeRandomCarrier() {
  while (true) {
    const randomP = randomPosition();
    const randomD = randomDirection();

    const carrier = new Ship("carrier", 5);
    const startPosition = carrier.position(randomP);
    const { endPosition, fullPath } = carrier.path(randomD);

    if (endPosition[0] < 10 && endPosition[1] < 10 && isPathClear(fullPath)) {
      return fullPath;
    }
  }
}

const randomCarrier = placeRandomCarrier();
randomCarrier.forEach((pos) => occupied.add(positionToString(pos)));

function placeRandomBattleship() {
  while (true) {
    const randomP = randomPosition();
    const randomD = randomDirection();

    const battleship = new Ship("battleship", 4);
    const startPosition = battleship.position(randomP);
    const { endPosition, fullPath } = battleship.path(randomD);

    if (endPosition[0] < 10 && endPosition[1] < 10 && isPathClear(fullPath)) {
      return fullPath;
    }
  }
}

const randomBattleship = placeRandomBattleship();
randomBattleship.forEach((pos) => occupied.add(positionToString(pos)));

console.log("Carrier");
for (const element of randomCarrier) {
  console.log(element);
}

console.log("Battleship");
for (const element of randomBattleship) {
  console.log(element);
}
