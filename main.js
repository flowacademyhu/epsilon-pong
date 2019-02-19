let table = require('./matrix');
let ball = require('./ball');
let player = require('./player');
let char;
let readlineSync = require('readline-sync');
const inc = () => {
  let char = readlineSync.question('nyomd meg!');
  let char1 = readlineSync.question('nyomd meg!');
  console.clear();
  table.writeTable(table.table());
  player.movePlayer(char, player.player1);
  player.movePlayer(char1, player.player2);
  ball.moveBall(ball.ball, table.table());
};

setInterval(inc, 50);
