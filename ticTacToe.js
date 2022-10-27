const prompt = require("prompt-sync")();

const board = require ('./board')

let playerVSplayer = true;

let player1 = 'x';
let player2 = 'o';
let currentPlayer = player1;

let gameBoardCoord = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']; 
let gameBoardPattern = [' ',' ',' ',' ',' ',' ',' ',' ',' ',];

let winCombi = [
    [gameBoardPattern[0],gameBoardPattern[1],gameBoardPattern[2]],
    [gameBoardPattern[3],gameBoardPattern[4],gameBoardPattern[5]],
    [gameBoardPattern[6],gameBoardPattern[7],gameBoardPattern[8]],
    [gameBoardPattern[0],gameBoardPattern[3],gameBoardPattern[6]],    
    [gameBoardPattern[1],gameBoardPattern[4],gameBoardPattern[7]],
    [gameBoardPattern[2],gameBoardPattern[5],gameBoardPattern[8]],    
    [gameBoardPattern[0],gameBoardPattern[4],gameBoardPattern[8]],
    [gameBoardPattern[2],gameBoardPattern[4],gameBoardPattern[6]],
];


//Spielstart
console.log('WELCOME TO TIC TAC TOE');
board.showEmptyBoard();
console.log(`Player ${currentPlayer} - You start the Game`);

//Spiel
while (playerVSplayer===true){
    let putStone = prompt('Choose your field:');
    if (gameBoardCoord.includes(putStone)){
        let correctAnswerIndex = gameBoardCoord.indexOf(putStone);
        gameBoardPattern.splice(correctAnswerIndex, 1, currentPlayer);
        gameBoardCoord.splice(correctAnswerIndex, 1, currentPlayer);
        if (currentPlayer===player1){
        currentPlayer = player2;
        }else{
            currentPlayer = player1;
        }
    }else {
        console.log("Choose a valid field");
    }

//Spielanzeige
console.log(`  --1---2---3--
A | ${gameBoardPattern[0]} | ${gameBoardPattern[1]} | ${gameBoardPattern[2]} | 
  -------------
B | ${gameBoardPattern[3]} | ${gameBoardPattern[4]} | ${gameBoardPattern[5]} | 
  -------------
C | ${gameBoardPattern[6]} | ${gameBoardPattern[7]} | ${gameBoardPattern[8]} | 
  -------------`);
console.log(`Player ${currentPlayer}, now is your turn`);
/*
//Siegbedingungen
function checkWin(){
    for (combi of winCombi){
        combi.every(function (gameBoardPattern){
            gameBoardPattern.contains(currentPlayer);
        })
    }

}
*/

}


/*
while(playerVSplayer===true){
let putStone = prompt('Choose your field:');
for (const correctAnswer of gameBoardCoord){
    if (correctAnswer===putStone){
        let correctAnswerIndex = gameBoardCoord.indexOf(correctAnswer);
        gameBoardPattern.splice(correctAnswerIndex, 1, player1)
    }else if(correctAnswer!==putStone){
        console.log('Choose a valid field');
        break;
    }
}
*/