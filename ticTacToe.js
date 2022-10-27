const prompt = require("prompt-sync")();
const menu = require("./menu"); // use it e.g. like menu.get_menu_option()
const board = require("./board");
const coordinate = require("./coordinates");
const { emptyBoard, boardCol1 } = require("./board");
let gameMode = menu.getMenuOption().valueOf();
let isGameRunning = true;
let userInput ='';

let playerX = "X";
let playerO = "O";
let currentPlayer = playerO;


if(gameMode != 5 ){

  isGameRunning = true;
}


function winningStates(){
  if(board.boardCol1[1] === "X" && board.boardCol1[3] === "X" && board.boardCol1[5] === "X"){
    console.log("Player X won");
    isGameRunning = false;
    }else if(board.boardCol2[1] === "X" && board.boardCol2[3] === "X" && board.boardCol2[5] === "X"){
      console.log("Player X won");
      isGameRunning = false;

    }else if(board.boardCol3[1] === "X" && board.boardCol3[3] === "X" && board.boardCol3[5] === "X"){
      console.log("Player X won");
      isGameRunning = false;
    }
}


function main() {
  while (isGameRunning) {
    let gameBoard = board.getEmptyBoard();
    userInput = prompt("Please enter coordinate where you want to move ").toUpperCase();

    
  
    if(userInput.toLowerCase() === "exit" ){
      break;
    }
 
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
  } else {
      currentPlayer = playerX;
  }
  


    coordinate.getPlayerMove(board,currentPlayer,userInput);

    winningStates();
  

      

    /* TODO
        in each new iteration of the while loop the program should 
        alternate the value of `currentPlayer` from `X` to `O`
        */
 
    /* TODO

        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
    // let humanCoord = coordinate.getPlayerMove(emptyBoard.join("\n"), currentPlayer);

    /* TODO 

        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */
    // let winningPlayer = board.getWinningPlayer(gameBoard);
    // let itsATie = board.isBoardFull(gameBoard);
  }
}

main();


// var winningStates = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];