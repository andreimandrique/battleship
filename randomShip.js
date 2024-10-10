import Ship from "./ship.js";
import { randomPosition, randomDirection } from "./random.js";

function makeRandomShipPosition() {
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

  function placeRandomCruiser() {
    while (true) {
      const randomP = randomPosition();
      const randomD = randomDirection();

      const battleship = new Ship("cruiser", 3);
      const startPosition = battleship.position(randomP);
      const { endPosition, fullPath } = battleship.path(randomD);

      if (endPosition[0] < 10 && endPosition[1] < 10 && isPathClear(fullPath)) {
        return fullPath;
      }
    }
  }

  const randomCruiser = placeRandomCruiser();
  randomCruiser.forEach((pos) => occupied.add(positionToString(pos)));

  function placeRandomSubmarine() {
    while (true) {
      const randomP = randomPosition();
      const randomD = randomDirection();

      const battleship = new Ship("submarine", 3);
      const startPosition = battleship.position(randomP);
      const { endPosition, fullPath } = battleship.path(randomD);

      if (endPosition[0] < 10 && endPosition[1] < 10 && isPathClear(fullPath)) {
        return fullPath;
      }
    }
  }

  const randomSubmarine = placeRandomSubmarine();
  randomSubmarine.forEach((pos) => occupied.add(positionToString(pos)));

  function placeRandomDestroyer() {
    while (true) {
      const randomP = randomPosition();
      const randomD = randomDirection();

      const battleship = new Ship("destroyer", 2);
      const startPosition = battleship.position(randomP);
      const { endPosition, fullPath } = battleship.path(randomD);

      if (endPosition[0] < 10 && endPosition[1] < 10 && isPathClear(fullPath)) {
        return fullPath;
      }
    }
  }

  const randomDestroyer = placeRandomDestroyer();
  randomDestroyer.forEach((pos) => occupied.add(positionToString(pos)));

  return {
    randomCarrier,
  };
}

export { makeRandomShipPosition };
