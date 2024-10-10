import { makeRandomShipPosition } from "./randomShip.js";
import { randomPosition } from "./random.js";

function makeRandomShip() {
  const { randomCarrier } = makeRandomShipPosition();

  return randomCarrier;
}

// const computerContainer = document.querySelector(".computer-container");
const playerContainer = document.querySelector(".player-container");
const btn = document.querySelector("button");

// const computerBoard = [
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4   Y
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
// ];

// const computerRandomShip = makeRandomShip();
// const computerShipPosition = new Set();
// const computerAllMoves = new Set();

// for (const ship of computerRandomShip) {
//   const x = ship[0];
//   const y = ship[1];
//   computerBoard[x][y] = "b";
//   computerShipPosition.add([x, y].toString());
// }

// for (let y = 0; y < 10; y++) {
//   for (let x = 0; x < 10; x++) {
//     const div = document.createElement("div");
//     div.classList.add("cell");

//     if (computerBoard[x][y] == "b") {
//       div.classList.add("blue");
//     }

//     div.addEventListener("click", () => {
//       if (computerShipPosition.has([x, y].toString())) {
//         if (computerAllMoves.has([x, y].toString())) {
//           // console.log("cannot attack the same position twice");
//           attackRandomPosition(false);
//         } else {
//           div.classList.add("red");
//           // console.log("hit");
//           attackRandomPosition(true);
//         }
//       } else {
//         if (computerAllMoves.has([x, y].toString())) {
//           attackRandomPosition(false);
//         } else {
//           div.classList.add("green");
//           // console.log("miss");
//           attackRandomPosition(true);
//         }
//       }

//       computerAllMoves.add([x, y].toString());
//     });

//     computerContainer.append(div);
//   }
// }

const playerBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 0
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 4   Y
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 9
];

const playerRandomShip = makeRandomShip();
const playerAllShipPosition = new Set();
const playerAllMoves = new Set();

for (const ship of playerRandomShip) {
  const x = ship[0];
  const y = ship[1];
  playerBoard[x][y] = "b";
  playerAllShipPosition.add([x, y].toString());
}

function renderPlayerBoard() {
  playerContainer.textContent = "";
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const div = document.createElement("div");
      div.classList.add("cell");

      if (playerBoard[x][y] == "b") {
        div.classList.add("blue");
      } else if (playerBoard[x][y] == "g") {
        div.classList.add("green");
      } else if (playerBoard[x][y] == "r") {
        div.classList.add("red");
      }

      playerContainer.append(div);
    }
  }
}

renderPlayerBoard();

function attackRandomPosition(valid) {
  const [x, y] = randomPosition();

  if (valid === true) {
  } else {
    console.log("invalid");
  }

  console.log("valid");
  if (playerAllShipPosition.has([x, y].toString())) {
    if (playerAllMoves.has([x, y].toString())) {
      // console.log("cannot hit twice");
    } else {
      playerBoard[x][y] = "r";
      // console.log("hit");
    }
  } else {
    playerBoard[x][y] = "g";
    // console.log("miss");
  }

  renderPlayerBoard();
  playerAllMoves.add([x, y].toString());
}
