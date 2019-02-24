let table = require('./table');
let delay = require('./delay');
let ball = {
  xPos: 50,
  yPos: 15,
  xDir: table.randomize(),
  yDir: table.randomize(),
  point: false,
  counter: 0,
  player1: 0,
  player2: 0,
  isDelay: false
};

const moveBall = (ball, arr) => {
  ball = table.leftSide(ball, arr);
  ball = table.rightSide(ball, arr);
  ball = table.topBottom(ball, arr);
  ball = delay.delay(ball);
  if (ball.isDelay) {
    return true;
  }
  ball.xPos += ball.xDir;
  ball.yPos += ball.yDir;

  return ball;
};

module.exports = { moveBall, ball };
