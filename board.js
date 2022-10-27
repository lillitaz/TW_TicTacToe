
let boardCol1 = [ "A  "," ." ,  " |"," ." ,"| " , ". "];
let boardCol2 = [ "B  "," ." ,  " |"," ." ,"| " , ". "];
let boardCol3 = [ "C  "," ." ,  " |"," ." ,"| " , ". "];
let emptyBoard = [];
let displayedBoard = [];
function getEmptyBoard() {
  emptyBoard = [
  
    ["    1  "," 2   ","3 "].join(''),
  
    boardCol1.join(" "),
    ["   ---+","---+","-----"].join(''),
    boardCol2.join(" "),
    ["   ---+","---+","-----"].join(''),
    boardCol3.join(" ")
  
  ];
  
    /*
      Should return a list with 3 sublists.
      Each sublist should contain 3 time the "." character
      */
   
     return emptyBoard.join('\n');
}


function displayBoard() {
   
   
  
displayedBoard = [
  ["    1  "," 2   ","3 "].join(''),
  boardCol1.join(" "),
  ["   ---+","---+","-----"].join(''),
  boardCol2.join(" "),
  ["   ---+","---+","-----"].join(''),
  boardCol3.join(" ")

].join("\n");

return displayedBoard;
}



function isBoardFull(board) {

  if(!board.includes(".")){
    console.log(`board is full`);
  }
  /*
      should return True if there are no more empty place on the board,
      otherwise should return False
 
      */
}

function getWinningPlayer(board) {

  
  /*
    Should return the player that wins based on the tic tac toe rules.
    If no player has won, than "None" is returned.
    */
}



module.exports = {
  boardCol1: boardCol1,
  boardCol2: boardCol2,
  boardCol3: boardCol3,
  displayedBoard:displayedBoard,

  getEmptyBoard: getEmptyBoard,
  displayBoard: displayBoard,
  getWinningPlayer: getWinningPlayer,
  isBoardFul:isBoardFull,

 



};
// run this function to test whether you have correctly implemented the other function
function checkBoards() {
  let board = getEmptyBoard();
  console.log(board);

  board = [["X", "O", "."], ["X", "O", "."],["0", "X", "."]];

  console.log(`Should give out:"

        1   2   3
    A   X | O | . 
       ---+---+---
    B   X | O | .
       ---+---+---
    C   0 | X | . 
       ---+---+---`);
  displayBoard(board);

  board_1 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return False");
  console.log(isBoardFull(board_1));

  board_2 = [
    [".", "O", "O"],
    [".", "O", "X"],
    [".", "X", "X"],
  ];
  console.log("Should return False");
  console.log(isBoardFull(board_2));

  board_3 = [
    ["O", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"],
  ];
  console.log("Should return True");
  console.log(isBoardFull(board_3));

  board_4 = [
    ["X", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("Should return X");
  console.log(getWinningPlayer(board_4));

  board_5 = [
    ["X", "O", "O"],
    ["X", "O", "."],
    ["O", "X", "X"],
  ];
  console.log("Should return O");
  console.log(getWinningPlayer(board_5));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("Should return None");
  console.log(getWinningPlayer(board_6));
}
