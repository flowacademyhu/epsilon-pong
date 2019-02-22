let b = require('./ball');
let player = require('./player');
var ctx = require('axel');
let length = 30;
let width = 100;
let arr = new Array(length);

for (let i = 0; i < length; i++) {
  arr[i] = new Array(width);
}
const table = () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0) {
        arr[i][j] = '=';
      } else if (i === arr.length - 1) {
        arr[i][j] = '=';
      } else if (j === b.ball.xPos && i === b.ball.yPos) {
        arr[i][j] = '*';
      } else if (j === 0 && player.isThereRacket(i, player.player1)) {
        arr[i][j] = '║';
      } else if (j === 99 && player.isThereRacket(i, player.player2)) {
        arr[i][j] = '║';
      } else {
        arr[i][j] = ' ';
      }
    }
  }
  ctx.bg(0, 0, 0);
  ctx.fg(25, 160, 255);
  return arr;
};
let write;
const writeTable = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      write = 'Eredmény: ' + b.ball.player1 + ' : ' + b.ball.player2;
      for (let x = 0; x < 20 - write.length + 4; x++) {
        write += ' ';
      }
    } else {
      write = '                    ';
    }
    for (let j = 0; j < arr[i].length; j++) {
      write += arr[i][j];
    }
    process.stdout.write(`${write}\n`);
  }
};

module.exports = { table, writeTable };
