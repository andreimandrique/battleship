import Ship from "./ship.js";

const board = [
  [, , , , , , , , ,], // 0
  [, , , , , , , , ,], // 1
  [, , , , , , , , ,], // 2
  [, , , , , , , , ,], // 3
  [, , , , , , , , ,], // 4
  [, , , , , , , , ,], // 5
  [, , , , , , , , ,], // 6
  [, , , , , , , , ,], // 7
  [, , , , , , , , ,], // 8
  [, , , , , , , , ,], // 9
];
//0 1 2 3 4 5 6 7 8 9

const carrier = new Ship("carrier", 5);

carrier.setPosition([1, 3]);
carrier.setDirection("horizontal");

const carrierPosition = carrier.getPosition();
const carrierDirection = carrier.getDirection();
const carrierLength = carrierPosition[0] + (carrier.hp - 1);

if (carrierDirection == "horizontal" && carrierLength > 9) {
  console.log("invalid");
} else {
  console.log("valid");
}

console.log(carrierLength);

console.log(board);
