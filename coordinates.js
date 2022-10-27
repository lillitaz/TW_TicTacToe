const prompt = require("prompt-sync")();
const positions = ["1A","2A","3A","1B","2B","3B","1C","2C","3C"];

function getPlayerMove(board, currentPlayer,userInput) {


if(positions.includes(userInput)){
  switch(userInput){
    case "1A":
      if(board.boardCol1[1] === " ."  ){
        board.boardCol1[1] =currentPlayer;
        console.log(board.displayBoard());
        break;
      }else{
        console.log("that position is already taken");
        break;
      }
    case "2A":
      if(board.boardCol1[3] === " ."  ){
        board.boardCol1[3] =currentPlayer;
        console.log(board.displayBoard());
        break;
      }else{
        console.log("that position is already taken");
        break;
      }
    case "3A":
        if(board.boardCol1[5] === ". " ){
          board.boardCol1[5] =currentPlayer;
          console.log(board.displayBoard());
          break;
        }else{
          console.log("that position is already taken");
          break;
        }
    case "1B":
          if(board.boardCol2[1].toUpperCase() === " ." ){
            board.boardCol2[1] =currentPlayer;
            console.log(board.displayBoard());
            break;
          }else{
            console.log("that position is already taken");
            break;
          } 
    case "2B":
          if(board.boardCol2[3].toUpperCase() === " ."   ){
            board.boardCol2[3] =currentPlayer;
            console.log(board.displayBoard());
            break;
          }else{
            console.log("that position is already taken");
            break;
          }
    case "3B":
              if(board.boardCol2[5].toUpperCase() === ". " ){
                board.boardCol2[5] =currentPlayer;
                console.log(board.displayBoard());
                break;
              }else{
                console.log("that position is already taken");
                break;
              }

    case "1C":
                if(board.boardCol3[1].toUpperCase() === " ."  ){
                  board.boardCol3[1] =currentPlayer;
                  console.log(board.displayBoard());
                  break;
                }else{
                  console.log("that position is already taken");
                  break;
                }

    case "2C":
                  if(board.boardCol3[3].toUpperCase() === " ."  ){
                    board.boardCol3[3] =currentPlayer;
                    console.log(board.displayBoard());
                    break;
                  }else{
                    console.log("that position is already taken");
                    break;
                  }
    case "3C":
                  if(board.boardCol3[5].toUpperCase() === ". "){
                      board.boardCol3[5] =currentPlayer;
                      console.log(board.displayBoard());
                      break;
                    }else{
                      console.log("that position is already taken");
                      break;
                    }
      

    
      
      
  }
}

    
  /*
      Should return the read coordinates for the tic tac toe board from the terminal.
      The coordinates should be in the format  letter, number where the letter is 
      A, B or C and the number 1, 2 or 3.
      If the user enters an invalid coordinate (like Z0 or 1A, A11, sadfdsaf) 
      than a warning message should appear and the coordinates reading process repeated.
      If the user enters a coordinate that is already taken on the board.
      than a warning message should appear and the coordinates reading process repeated.
      If the user enters the word "quit" in any format of capitalized letters the program
      should stop.
      */

}

function getRandomAiCoordinates(board, current_player) {


  Math.floor(Math.random() * 4);
  /*
      Should return a tuple of 2 numbers. 
      Each number should be between 0-2.
      The chosen number should be only a free coordinate from the board.
      If the board is full (all spots taken by either X or O) than "None"
      should be returned.
      */
}

function getUnbeatableAiCoordinates(board, current_player) {
  /*
      Should return an array of 2 numbers. 
      Each number should be between 0-2.
      The chosen number should be only a free coordinate from the board.
      The chosen coordinate should always stop the other player from winning or
      maximize the current player's chances to win.
      If the board is full (all spots taken by either X or O) than "None"
      should be returned.
      */
}
module.exports = {
  getUnbeatableAiCoordinates:getUnbeatableAiCoordinates,
  getRandomAiCoordinates:getRandomAiCoordinates,
  getPlayerMove:getPlayerMove

};

// run this function to test whether you have correctly implemented the other functions
function checkCoordinates() {
  board_1 = [
    ["X", "X", "."],
    ["X", ".", "."],
    ["X", "X", "."],
  ];
  console.log(
    "It should console.log the coordinates selected by the human player"
  );
  coordinates = getPlayerMove(board_1, "X");
  console.log(coordinates);

  board_2 = [
    ["O", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));
  console.log("The console.loged coordinate should be only (0,2) or (1,2)");
  console.log(getRandomAiCoordinates(board_2));

  board_3 = [
    ["O", "X", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
  ];
  console.log("The console.loged coordinate should be None");
  console.log(getRandomAiCoordinates(board_3));

  board_4 = [
    [".", "O", "."],
    ["X", "O", "."],
    ["X", "X", "O"],
  ];
  console.log("The console.loged coordinate should always be (0, 0)");
  console.log(getUnbeatableAiCoordinates(board_4, "X"));

  board_5 = [
    ["X", "O", "."],
    ["X", ".", "."],
    ["O", "O", "X"],
  ];
  console.log("The console.loged coordinate should always be (1, 1)");
  console.log(getUnbeatableAiCoordinates(board_5, "O"));

  board_6 = [
    ["O", "O", "."],
    ["O", "X", "."],
    [".", "X", "."],
  ];
  console.log("The console.loged coordinate should either (0, 2) or (2, 0)");
  console.log(getUnbeatableAiCoordinates(board_6));
}
