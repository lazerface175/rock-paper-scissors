const array = [
    "rock",
    "paper",
    "scissors"
];

function getComputerChoice(array){
    const randomIndex = Math.floor(Math.random()*array.length);
    const item = array[randomIndex];
    return item;
}

const result = getComputerChoice(array);
console.log(result)