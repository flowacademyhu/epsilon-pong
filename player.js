
let player1 = [12, 13, 14, 15, 16, 17, 18];
let player2 = [12, 13, 14, 15, 16, 17, 18];
const playerUp = (arr) => {
  if (arr[6] === 29) {
  } else {
    arr.push(arr[6] + 1);
    arr.shift();
  }
  return arr;
};

const playerDown = (arr) => {
  if (arr[0] === 0) {
  } else {
    arr.unshift(arr[0] - 1);
    arr.pop();
  }
  return arr;
};

const isThereRacket = (i, player) => {
  for (let x = 0; x < 6; x++) {
    if (player[x] === i) {
      return true;
    }
  }
  return false;
};

const movePlayer = (caracter, arr) => {
  if (caracter === 'w' || caracter === '8') {
    return playerUp(arr);
  } else if (caracter === 's' || caracter === '2') {
    return playerDown(arr);
  }
}
;

module.exports = { movePlayer, player1, player2, isThereRacket }
;
