const choices = [
    "rock",
    "paper",
    "scissors"
];

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const chatBox = document.querySelector(".chatBox");
let computerChoice;
let playerD;
let playerCounter = 0; 
let computerCounter = 0;
//rock.addEventListener("click", () => playerScore.innerHTML=("1"));


rock.addEventListener("click", () => {playerD = 'rock'; gameStart()});  
paper.addEventListener("click", () => {playerD = 'paper'; gameStart()});
scissors.addEventListener("click", () => {playerD = 'scissors'; gameStart()});


function gameStart() {
    const randomIndex = Math.floor(Math.random()*choices.length);     
    computerChoice = choices[randomIndex];     
    console.log(computerChoice);

    if (computerChoice === playerD) {
        playerCounter = playerCounter; 
        computerCounter = computerCounter;
        chatBox.innerHTML = ("Its a tie"); 
    } else if (computerChoice === "rock" && playerD === "scissors") {
        computerCounter = computerCounter + 1;
        computerScore.innerHTML = (computerCounter);
        chatBox.innerHTML = (`The computer chose ${computerChoice}. The computer wins!`);
    } else if (computerChoice === "rock" && playerD === "paper") {
        playerCounter = playerCounter + 1;
        playerScore.innerHTML = (playerCounter);
        chatBox.innerHTML = (`The computer chose ${computerChoice}. The player wins!`);
    } else if (computerChoice === "paper" && playerD === "rock") {
        computerCounter = computerCounter + 1;
        computerScore.innerHTML = (computerCounter);
        chatBox.innerHTML = (`The computer chose ${computerChoice}. The computer wins!`);
    } else if (computerChoice === "paper" && playerD === "scissors") {
        playerCounter = playerCounter + 1;
        playerScore.innerHTML = (playerCounter);
        chatBox.innerHTML = (`The computer chose ${computerChoice}. The player wins!`);
    } else if (computerChoice === "scissors" && playerD === "rock") {
        playerCounter = playerCounter + 1;
        playerScore.innerHTML = (playerCounter);
        chatBox.innerHTML = (`The computer chose ${computerChoice}. The player wins!`);
    } else if (computerChoice === "scissors" && playerD === "paper") {
        computerCounter = computerCounter + 1;
        computerScore.innerHTML = (computerCounter);
        chatBox.innerHTML = (`The computer chose ${computerChoice}. The computer wins!`);
    }; 

    if (playerCounter === 5) {
        chatBox.innerHTML = (`THE PLAYER WINS THE GAME PLEASE REFRESH THE PAGE`); 
        const choices = document.getElementById("choices");
        const text = document.getElementById("text");
        text.remove();
        choices.remove(); 
    } else if (computerCounter === 5) {
        chatBox.innerHTML = (`THE COMPUTER WINS THE GAME PLEASE REFRESH THE PAGE`);
        const choices = document.getElementById("choices");
        const text = document.getElementById("text");
        text.remove();
        choices.remove();
    }; 
};


//let playerScore = 0
//let computerScore = 0

// for( i = 0; i < 5; i ++){

//     let promtChoice = prompt("pick rock, paper, or scissors");
//     let playerChoice = promtChoice.toLocaleLowerCase();
//     let computerResult = getComputerChoice();


//     function getComputerChoice(){    //I dont know what the (array) paramater is used for
//         const randomIndex = Math.floor(Math.random()*choices.length);    //math.Floor rounds (whatever is in here) down. Math.random picks a number between 0 and 1. and choices.length is how many items are in the choices array 
//         const computerChoice = choices[randomIndex];    //sets const item as the element from the choices array at the [randomIndex] possition 
//         return computerChoice;
//     }

//     playFiveRounds(playerChoice, computerResult);
    
//     function playFiveRounds(playerSeletion, computerSelection){

//         if (playerSeletion === computerSelection){
//             gameResult = "TIE!";
//             alert(`I picked ${computerSelection}\nIt's a ${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         } else if (playerSeletion === "rock" && computerSelection === "scissors"){
//             gameResult = "You win!"
//             playerScore = playerScore + 1;
//             alert(`I picked ${computerSelection}\n${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         } else if (playerSeletion === "rock" && computerSelection === "paper"){
//             gameResult = "You lose!"
//             computerScore = computerScore + 1;
//             alert(`I picked ${computerSelection}\n${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         } else if (playerSeletion === "paper" && computerSelection === "rock"){
//             gameResult = "You win!"
//             playerScore = playerScore + 1;
//             alert(`I picked ${computerSelection}\n${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         } else if (playerSeletion === "paper" && computerSelection === "scissors"){
//             gameResult = "You lose!"
//             computerScore = computerScore + 1;
//             alert(`I picked ${computerSelection}\n${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         } else if (playerSeletion === "scissors" && computerSelection === "paper"){
//             gameResult = "You win!"
//             playerScore = playerScore + 1;
//             alert(`I picked ${computerSelection}\n${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         } else if (playerSeletion === "scissors" && computerSelection === "rock"){
//             gameResult = "You lose!"
//             computerScore = computerScore + 1
//             alert(`I picked ${computerSelection}\n${gameResult}\nYour score is: ${playerScore}\nMy score is: ${computerScore}`);
//         }
//     }


//     console.log(computerResult)
//     console.log(gameResult)
//     console.log("player: " + playerScore)
//     console.log("computer: " + computerScore)
//     //const computerResult = getComputerChoice(); //I dont know what the (array) argument is used for
//     //singleRound(playerChoice, computerResult)
//     //console.log(singleRound(playerChoice, computerResult))
// };




// function endGame(){
//     if (playerScore === computerScore){
//         alert(`Your score was: ${playerScore}\nAnd my score was: ${computerScore}\nIt's a TIE!\nRefresh the page to play again!`);
//     } else if(playerScore > computerScore){
//         alert(`Your score was: ${playerScore}\nAnd my score was: ${computerScore}\nYou WIN!\nRefresh the page to play again!`);
//     } else if(playerScore < computerScore){
//         alert(`Your score was: ${playerScore}\nAnd my score was: ${computerScore}\nYou LOST\nRefresh the page to play again!`);
//     }
// }
// endGame();