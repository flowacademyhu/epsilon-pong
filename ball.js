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
  player2: 0
};
const moveBall = (ball, arr) => {
  if (ball.xPos === 1 && arr[ball.yPos][0] !== ' ') {
    ball.xDir = -1 * ball.xDir;
  } else if (ball.xPos === 1 && arr[ball.yPos][0] === ' ') {
    ball.xPos = 50;
    ball.yPos = 15;
    ball.xDir = randomize();
    ball.yDir = randomize();
    ball.point = true;
    ball.player2++;
  }
  if (ball.xPos === 98 && arr[ball.yPos][99] !== ' ') {
    ball.xDir = -1 * ball.xDir;
  } else if (ball.xPos === 98 && arr[ball.yPos][99] === ' ') {
    ball.xPos = 50;
    ball.yPos = 15;
    ball.xDir = randomize();
    ball.yDir = randomize();
    ball.point = true;
    ball.player1++;
  }
  if (ball.yPos === 1 || ball.yPos === 29) {
    ball.yDir = -1 * ball.yDir;
  }
  if (ball.point === true && ball.counter < 30) {
    ball.counter++;
    console.log('EZ SZÉP ÜTÉS VOLT!');
    console.log(`Az eredmeny ${ball.player1} : ${ball.player2}`);
  } else if (ball.point === true && ball.counter === 30) {
    ball.point = false;
    ball.counter = 0;
  } else {
    ball.xPos += ball.xDir;
    ball.yPos += ball.yDir;
  }
  return ball;
};
module.exports = { moveBall, ball };
