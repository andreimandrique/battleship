import Ship from "./ship.js";

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

const carrier = new Ship("carrier", 5);
carrier.position([1, 4]);
const path = carrier.path("v");
const endPosition = path.slice(-1);
console.log(endPosition);
console.log(path);
