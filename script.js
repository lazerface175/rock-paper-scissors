const choices = [
    "rock",
    "paper",
    "scissors"
];

let promtChoice = prompt("pick rock, paper, or scissors");
let playerChoice = promtChoice.toLocaleLowerCase();
let playerScore = 0
let computerScore = 0

function getComputerChoice(){ //I dont know what the (array) paramater is used for
    const randomIndex = Math.floor(Math.random()*choices.length);
    const item = choices[randomIndex];
    return item;
}

function singleRound(playerSeletion, computerSelection){
    if (playerSeletion === computerSelection){
        gameResult = "TIE!";
    } else if (playerSeletion === "rock" && computerSelection === "scissors"){
        gameResult = "You win!"
        playerScore = playerScore + 1;
    } else if (playerSeletion === "rock" && computerSelection === "paper"){
        gameResult = "You lose!"
        computerScore = computerScore + 1;
    } else if (playerSeletion === "paper" && computerSelection === "rock"){
        gameResult = "You win!"
        playerScore = playerScore + 1;
    } else if (playerSeletion === "paper" && computerSelection === "scissors"){
        gameResult = "You lose!"
        computerScore = computerScore + 1;
    } else if (playerSeletion === "scissors" && computerSelection === "paper"){
        gameResult = "You win!"
        playerScore = playerScore + 1;
    } else if (playerSeletion === "scissors" && computerSelection === "rock"){
        gameResult = "You lose!"
        computerScore = computerScore + 1
    }
}

const computerResult = getComputerChoice(); //I dont know what the (array) argument is used for
console.log(computerResult)
singleRound(playerChoice, computerResult)
console.log(gameResult)
console.log("player: " + playerScore)
console.log("computer: " + computerScore)
//console.log(singleRound(playerChoice, computerResult))