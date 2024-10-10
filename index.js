import { makeRandomShipPosition } from "./randomShip.js";
import { randomPosition } from "./random.js";

function makeRandomShip() {
  const { randomShipPosition } = makeRandomShipPosition();

  return randomShipPosition;
}

const computerContainer = document.querySelector(".computer-container");
const playerContainer = document.querySelector(".player-container");
const btn = document.querySelector("button");

let playerHealth = 17;
let computerHealth = 17;

function checkWin() {
  if (playerHealth == 0) {
    alert("computer win");
    console.log("computer win");
  }

  if (computerHealth == 0) {
    alert("player win");
    console.log("player win");
  }
}

const computerBoard = [
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

function renderComputerBoard() {
  const computerRandomShip = makeRandomShip();
  const computerShipPosition = new Set();
  const computerAllMoves = new Set();

  function placeComputerShip() {
    for (const ship of computerRandomShip) {
      const x = ship[0];
      const y = ship[1];
      computerBoard[x][y] = "b";
      computerShipPosition.add([x, y].toString());
    }
  }
  placeComputerShip();

  computerContainer.textContent = "";
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const div = document.createElement("div");
      div.classList.add("cell");

      if (computerBoard[x][y] == "b") {
        //when testing add this blue class to see the computer board
        // div.classList.add("blue");
      }

      div.addEventListener("click", () => {
        if (computerShipPosition.has([x, y].toString())) {
          if (computerAllMoves.has([x, y].toString())) {
            // console.log("cannot attack the same position twice");
            attackPlayer(false);
          } else {
            div.classList.add("red");
            // console.log("hit");
            computerHealth--;
            attackPlayer(true);
          }
        } else {
          if (computerAllMoves.has([x, y].toString())) {
            attackPlayer(false);
          } else {
            div.classList.add("green");
            // console.log("miss");
            attackPlayer(true);
          }
        }

        computerAllMoves.add([x, y].toString());
      });

      computerContainer.append(div);
    }
  }
}
renderComputerBoard();

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

const playerAllMoves = new Set();
const playerAllShipPosition = new Set();

function placePlayerShip() {
  const playerRandomShip = makeRandomShip();

  for (const ship of playerRandomShip) {
    const x = ship[0];
    const y = ship[1];
    playerBoard[x][y] = "b";
    playerAllShipPosition.add([x, y].toString());
  }
}
placePlayerShip();

function renderPlayerBoard() {
  playerContainer.textContent = "";
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const div = document.createElement("div");
      div.classList.add("cell");

      switch (playerBoard[x][y]) {
        case "b":
          div.classList.add("blue");
          break;
        case "g":
          div.classList.add("green");
          break;
        case "r":
          div.classList.add("red");
          break;
      }

      playerContainer.append(div);
    }
  }
}
renderPlayerBoard();

function attackPlayer(valid) {
  if (valid === true) {
    let x, y;
    do {
      [x, y] = randomPosition();
    } while (playerAllMoves.has([x, y].toString()));

    if (playerAllShipPosition.has([x, y].toString())) {
      // console.log("hit");
      playerBoard[x][y] = "r";
      playerHealth--;
    } else {
      // console.log("miss");
      playerBoard[x][y] = "g";
    }

    renderPlayerBoard();
    playerAllMoves.add([x, y].toString());
    checkWin();
  }
}

btn.addEventListener("click", () => {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      computerBoard[x][y] = 0;
    }
  }

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      playerBoard[x][y] = 0;
    }
  }

  playerAllMoves.clear();
  playerAllShipPosition.clear();
  placePlayerShip();
  renderPlayerBoard();

  renderComputerBoard();
});
