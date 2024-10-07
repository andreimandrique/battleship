function randomDirection() {
  const random = Math.floor(Math.random() * 2);

  if (random == 0) {
    return "h";
  } else {
    return "v";
  }
}

function randomPosition() {
  const randomX = Math.floor(Math.random() * 10);
  const randomY = Math.floor(Math.random() * 10);

  return [randomX, randomY];
}

export { randomDirection, randomPosition };
