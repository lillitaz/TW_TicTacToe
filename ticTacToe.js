const prompt = require("prompt-sync")();



let startMenu = true;
let playerVSplayer = false;
let playerVSKI = false;
let playerVSmasterKI = false;

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

//Menu
while (startMenu===true){
console.log(`<<<<TIC TAC TOE>>>>\n
1. Player vs. Player\n
2. Player vs. KI\n
3. Player vs. Master KI\n
4. Quit`);

let startGame = prompt('Choose your Game:');

switch (startGame){
    case '1': 
    playerVSplayer = true;
    startMenu=false;
    break;

    case '2': 
    playerVSKI = true;
    startMenu=false;
    break;

    case '3': 
    playerVSmasterKI = true;
    startMenu=false;
    break;

    case '4': 
    console.log('Maybe next time :-(');
    startMenu=false;
    break;

    default:
    console.log('Please chooose 1-5');
    break;
}
}

//Spielstart
console.log('WELCOME TO TIC TAC TOE');

console.log(`Player ${currentPlayer} - You start the Game`);

//Spiel
while (playerVSplayer===true){  
    let putStone = prompt('Choose your field:');
    if (gameBoardCoord.includes(putStone)){
        let answerIndex = gameBoardCoord.indexOf(putStone);
        gameBoardPattern.splice(answerIndex, 1, currentPlayer);
        gameBoardCoord.splice(answerIndex, 1, currentPlayer);
        checkWin();
        console.log(gameBoardPattern);
        console.log(checkWin());
        if (checkWin===true){
            console.log('WINNER');
            playerVSplayer = false;
        }
        if (putStone.toLowerCase()==='quit'){
            playerVSplayer = false;
            startMenu = true;
        }
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

}

//Siegbedingungen
function checkWin(){
    for (combi of winCombi){
        const gameWin = combi.every(function(pattern){
          return pattern.includes(currentPlayer);
        })
        
        if (gameWin === true){
            return true;
        }
    }
return false;
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