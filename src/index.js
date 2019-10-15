module.exports = function solveSudoku(matrix) {



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


