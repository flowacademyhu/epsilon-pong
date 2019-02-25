let player1 = [12, 13, 14, 15, 16, 17, 18];
let player2 = [12, 13, 14, 15, 16, 17, 18];
const playerDown = (arr) => {
  if (arr[6] === 29) {
  } else {
    arr.push(arr[6] + 1);
    arr.shift();
  }
  return arr;
};

const playerUp = (arr) => {
  if (arr[0] === 1) {
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

const movePlayer = (character, arr) => {
  if (character === 'w' || character === 'o') {
    playerUp(arr);
  } else if (character === 's' || character === 'l') {
    return playerDown(arr);
  }
}
;

module.exports = { movePlayer, player1, player2, isThereRacket }
;
