let table = require('./table');
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
    ball.xDir = table.randomize();
    ball.yDir = table.randomize();
    ball.isDelay = false;
  }
  return ball;
};

module.exports = { delay };
