console.log ("Hello World");

const humanScore = 0;
const computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function getComputerChoice(){

const number = Math.floor(Math.random() * 3);
if (number === 0) return "rock";
else if (number === 1) return "paper";
else return "scissors";

}


function getHumanChoice(){

const choice = prompt( "Please enter your choice: Rock, paper or scissors");
return choice;

}
function game(){

 let humanScore = 0;
 let computerScore = 0;

}

function playRound(humanChoice, computerChoice){
    
 const humanChoice = humanChoice.toLowerCase();
 
}

