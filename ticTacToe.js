const prompt = require("prompt-sync")();
const menu = require("./menu"); // use it e.g. like menu.get_menu_option()
const board = require("./board");
const coordinate = require("./coordinates");
const { getEmptyBoard, playerWon } = require("./board");
let gameMode = menu.getMenuOption();
let userInput ='';



if(gameMode != 5 ){
console.log(getEmptyBoard());
  board.isGameRunning = true;
}




function main() {
  while ( board.isGameRunning) {

    if(gameMode === "1"){
      userInput = prompt("Please enter coordinate where you want to move ").toUpperCase();

      coordinate.getPlayerMove(board,userInput);


    }else if(gameMode === "2"){
      coordinate.getRandomAiCoordinates(board);

    }else if (gameMode === "3"){

      coordinate.getHumanVsRandom(board);

    }else{
      break;
    }
    if(userInput.toLowerCase() === "exit" ){
      break;
    }
    
    board.getWinningPlayer(board);


    if(playerWon === 1){
      break;

    }
   

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

