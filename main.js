let table = require('./matrix');
let ball = require('./ball');
let player = require('./player');
var keypress = require('keypress');
const key = () => {
  process.stdin.setRawMode(true);
  keypress(process.stdin);
  process.stdin.resume();
};

process.stdin.on('keypress', function (ch, key) {
  if (key) {
    if (key.name === 'w') player.movePlayer('w', player.player1);
    if (key.name === 's') player.movePlayer('s', player.player1);
    if (key.name === 'o') player.movePlayer('o', player.player2);
    if (key.name === 'l') player.movePlayer('l', player.player2);
    if (key.name === 'q') process.exit(1);
  }
});

(function () {
  let interval = 100;
  let timer = function () {
    console.clear();
    if (ball.moveBall(ball.ball, table.table()) === true) {
      interval = 100;
    }
    if (ball.ball.xPos === 1) {
      interval = interval * 0.95;
    }
    if (ball.ball.xPos === 98) {
      interval = interval * 0.95;
    }
    table.writeTable(table.table());
    setTimeout(timer, interval);
  };
  timer();
})();
key();
