const leftSide = (ball, arr) => {
  if (ball.xPos === 1 && arr[ball.yPos][0] !== ' ') {
    ball.xDir = -1 * ball.xDir;
  } else if (ball.xPos === 1 && arr[ball.yPos][0] === ' ') {
    pointEvent(ball, arr, ball.player2);
  }
  return ball;
};

const rightSide = (ball, arr) => {
  if (ball.xPos === arr[0].length - 2 && arr[ball.yPos][arr[0].length - 1] !== ' ') {
    ball.xDir = -1 * ball.xDir;
  } else if (ball.xPos === arr[0].length - 2 && arr[ball.yPos][arr[0].length - 1] === ' ') {
    pointEvent(ball, arr, ball.player1);
  }
  return ball;
};

const topBottom = (ball, arr) => {
  if (ball.yPos === 1 || ball.yPos === arr.length - 1) {
    ball.yDir = -1 * ball.yDir;
  }
  return ball;
};

const pointEvent = (ball, arr, player) => {
  ball.xPos = 50;
  ball.yPos = 15;
  ball.xDir = randomize();
  ball.yDir = randomize();
  ball.point = true;
  if (ball.player1 === player) {
    ball.player1++;
  } else {
    ball.player2++;
  }
  return ball;
};

let randomize = () => {
  return Math.random() < 0.5 ? 1 : -1;
};

module.exports = { leftSide, rightSide, topBottom, pointEvent, randomize };
