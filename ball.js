let randomize = () => {
  return Math.random() < 0.5 ? 1 : -1;
};

let ball = {
  xPos: 50,
  yPos: 15,
  xDir: randomize(),
  yDir: randomize(),
  point: false,
  counter: 0,
  player1: 0,
  player2: 0,
  isDelay: false
};

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

const delayUntilN = (ball, n) => {
  return ball.point === true && ball.counter < 30;
};

const delayedNTimes = (ball, n) => {
  return ball.point === true && ball.counter === 30;
};

let n = 30;
const delay = (ball) => {
  if (delayUntilN(ball, n)) {
    ball.counter++;
    ball.xDir = 0;
    ball.yDir = 0;
    ball.isDelay = true;
  } else if (delayedNTimes(ball, n)) {
    ball.point = false;
    ball.counter = 0;
    ball.xDir = randomize();
    ball.yDir = randomize();
    ball.isDelay = false;
  }
  return ball;
};

const moveBall = (ball, arr) => {
  ball = leftSide(ball, arr);
  ball = rightSide(ball, arr);
  ball = topBottom(ball, arr);
  ball = delay(ball);
  if (ball.isDelay) {
    return true;
  }
  ball.xPos += ball.xDir;
  ball.yPos += ball.yDir;

  return ball;
};

module.exports = { moveBall, ball };
