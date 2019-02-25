let table = require('../lib/matrix');
let ball = require('../lib/ball');
let player = require('../lib/player');
var keypress = require('keypress');
let p1Up = 'w';
let p1Down = 's';
let p2Up = 'o';
let p2Down = 'l';
let exit = 'q';

const key = () => {
  process.stdin.setRawMode(true);
  keypress(process.stdin);
  process.stdin.resume();
};

process.stdin.on('keypress', function (ch, key) {
  if (key) {
    if (key.name === p1Up) player.movePlayer(p1Up, player.player1);
    if (key.name === p1Down) player.movePlayer(p1Down, player.player1);
    if (key.name === p2Up) player.movePlayer(p2Up, player.player2);
    if (key.name === p2Down) player.movePlayer(p2Down, player.player2);
    if (key.name === exit) process.exit(1);
  }
});

(function () {
  let interval = 100;
  let timer = () => {
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
