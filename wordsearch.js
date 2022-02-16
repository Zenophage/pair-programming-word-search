const transpose = function(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArr.push([]);
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let h = 0; h < matrix[i].length; h++) {
      newArr[h][i] = (matrix[i][h]);
  
    }
  }
  return newArr;
};
  



const wordSearch = (letters, word) => {
  if (letters.length === 0 || word.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const veritcalJoin = transpose(letters).map(ls => ls.join(''));
  for (const l of veritcalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch;

