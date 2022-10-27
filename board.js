let gameBoardPattern = [' ',' ',' ',' ',' ',' ',' ',' ',' ',];
function showEmptyBoard(){
console.log(
  `  --1---2---3--
A | ${gameBoardPattern[0]} | ${gameBoardPattern[1]} | ${gameBoardPattern[2]} | 
  -------------
B | ${gameBoardPattern[3]} | ${gameBoardPattern[4]} | ${gameBoardPattern[5]} | 
  -------------
C | ${gameBoardPattern[6]} | ${gameBoardPattern[7]} | ${gameBoardPattern[8]} | 
  -------------`);
}

module.exports = {
    showEmptyBoard: showEmptyBoard,
}
