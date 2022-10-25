const prompt = require("prompt-sync")();
const menu = require("./menu"); // use it e.g. like menu.get_menu_option()
const board = require("./board");
const coordinate = require("./coordinates");

function main() {
  let gameMode = menu.getMenuOption().valueOf();
  let isGameRunning = false;

  if(gameMode != 5 ){

    isGameRunning = true;
  }
  
  while (isGameRunning) {
    let gameBoard = board.getEmptyBoard();

    board.displayBoard(board);

    /* TODO

        in each new iteration of the while loop the program should 
        alternate the value of `currentPlayer` from `X` to `O`
        */
    let currentPlayer = "X";

    /* TODO

        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
    let humanCoord = coordinate.getPlayerMove(board, currentPlayer);

    gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;

    /* TODO 

        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */
    let winningPlayer = board.getWinningPlayer(gameBoard);
    let itsATie = board.isBoardFull(gameBoard);
  }
}

main();
