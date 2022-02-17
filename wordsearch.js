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

const wordSearch = (letters, word) => {
  if (letters.length === 0 || word.length === 0) {
    return undefined;
  }
  const reversedWord = word.split('').reverse().join('');
  for (let i = 0; i < letters.length; i++) {
    const row = letters[i].join('');
    if (row.includes(word) || row.includes(reversedWord)) return true;
    for (let j = 0; j < letters[i].length; j++) {
      const column = letters.map(x => x[j]).join('');
      const diagons = diagonals(letters, i, j).join('');
      if (column.includes(word) || column.includes(reversedWord)) return true;
      if (diagons.includes(word) || diagons.includes(reversedWord)) return true;
    }
  }
  return false;
};

module.exports = wordSearch;
