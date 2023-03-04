const choices = [
    "rock",
    "paper",
    "scissors"
];

let promtChoice = "scissors"
let playerChoice = promtChoice.toLocaleLowerCase();

function getComputerChoice(){ //I dont know what the (array) paramater is used for
    const randomIndex = Math.floor(Math.random()*choices.length);
    const item = choices[randomIndex];
    return item;
}

function singleRound(playerSeletion, computerSelection){
    if (playerSeletion === computerSelection){
        return "TIE!";
    } else if (playerSeletion === "rock" && computerSelection === "scissors"){
        return "You win!"
    } else if (playerSeletion === "rock" && computerSelection === "paper"){
        return "You lose!"
    } else if (playerSeletion === "paper" && computerSelection === "rock"){
        return "You win!"
    } else if (playerSeletion === "paper" && computerSelection === "scissors"){
        return "You lose!"
    } else if (playerSeletion === "scissors" && computerSelection === "paper"){
        return "You win!"
    } else if (playerSeletion === "scissors" && computerSelection === "rock"){
        return "You lose!"
    }
}

const computerResult = getComputerChoice(); //I dont know what the (array) argument is used for
console.log(computerResult)
console.log(singleRound(playerChoice, computerResult))