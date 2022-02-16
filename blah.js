let whiteQueen = [2, 1];
let blackQueen = [5, 4];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

function generateBoard(wQueen, bQueen) {
  let board = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
  ];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i === wQueen[0] && j === wQueen[1]) {
        board[i][j] = 1;
      } else if (i === bQueen[0] && j === bQueen[1]) {
        board[i][j] = 1;
      }
    }
  }
  return board;
}

function queenThreat(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let column = board.map(value => value[j]); // first attempt at arrow function and array.map method
      let diagon = diagonals(board, i, j);
      if (board[i][j] === 1) {
        if (queenCount(board[i]) === 2) {
          return true;
        } else if (queenCount(column) === 2) {
          return true;
        } else if (queenCount(diagon) === 2) {
          return true;
        }
      }
    }
  }
  return false;
}

function queenCount(arr) {
  return arr.reduce(function(a, b) {return a + b;}, 0);
}

function diagonals(board, x, y) {
  let newArr = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j === x + y) {
        newArr.push(board[i][j]);
      } else if (i - j === x - y) {
        newArr.push(board[i][j]);
      }
    }
  }
  return newArr
}