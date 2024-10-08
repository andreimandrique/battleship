import { shipInformation, placeRandomShip } from "./randomShip.js";

shipInformation();
const randomShip = placeRandomShip();

console.log("random ship");
console.log(randomShip.length);

for (const ship of randomShip) {
  console.log(ship);
}
