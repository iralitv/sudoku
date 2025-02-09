module.exports = function solveSudoku(matrix) {

  const emptySpaces = emptySpace(matrix);
  return solvePuzzle(matrix, emptySpaces);

};

const checkValue = function(matrix, column, row, value){
  if(checkRow(matrix, row, value) && checkColumn(matrix, column, value) && checkSquare(matrix, column, row, value)){
    return true;
  } else {
    return false;
  }
};

const checkRow = function(matrix, row, value) {
  for(let i = 0; i < matrix[row].length; i++){
    if(matrix[row][i] === value){
      return false;
    }
  }
  return true;
};

const checkColumn = function(matrix, col, value) {
  for(let i = 0; i < matrix.length; i++){
    if(matrix[i][col] === value){
      return false;
    }
  }
  return true;
};

const checkSquare = function(matrix, column, row, value) {
  for(let i = Math.floor(row / 3) * 3; i < Math.floor(row / 3) * 3 + 3; i++) {
    for(let j = Math.floor(column / 3) * 3; j < Math.floor(column / 3) * 3 + 3; j++) {
      if(matrix[i][j] === value) {
        return false;
      }
    }
  }
  return true;
};

const emptySpace = function(matrix){
  let emptySpaces = [];
  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col++){
      if(matrix[row][col] === 0){
        emptySpaces.push([row, col]);
      }
    }
  }
  return emptySpaces;
};

const solvePuzzle = function(matrix, emptySpace){
  let limit = 9;
  let i, row, col, value, match;

  for(i = 0; i < emptySpace.length;) {
    row = emptySpace[i][0];
    col = emptySpace[i][1];
    value = matrix[row][col] + 1;
    match = false;

    while(!match && value <= limit){
      if(checkValue(matrix, col, row, value)){
        match = true;
        matrix[row][col] = value;
        i++;
      } else {
        value++;
      }
    }
    if(!match) {
      matrix[row][col] = 0;
      i--;
    }
  }
  return matrix;
};
