import {
  randomShipPosition,
  carrierRandomPosition,
  shipInformation,
} from "./randomShip.js";

const computerContainer = document.querySelector(".computer-container");

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

const randomShip = carrierRandomPosition();
const computerShipPosition = new Set();

for (const ship of randomShip) {
  const x = ship[0];
  const y = ship[1];
  computerBoard[x][y] = 1;
  computerShipPosition.add([x, y].toString());
}

for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    const div = document.createElement("div");
    div.classList.add("cell");

    if (computerBoard[x][y] == 1) {
      div.classList.add("blue");
    }

    div.addEventListener("click", () => {
      if (computerShipPosition.has([x, y].toString())) {
        console.log("same");
      } else {
        console.log("not same");
      }

      console.log([x, y]);
    });

    computerContainer.append(div);
  }
}
