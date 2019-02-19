let table = require('./matrix');
let ball = require('./ball');
const inc = () => {
  console.clear();
  table.writeTable(table.table());
  ball.moveBall(ball.ball, table.table());
};

setInterval(inc, 50);
