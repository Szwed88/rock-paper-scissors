


// 1 Computer choice//


function getComputerChoice(){
    const computer = Math.floor(Math.random() * 3);
    return computer === 0 ? "rock" : computer === 1 ? "paper" : "scissors";
}
    console.log(getComputerChoice());


// 2 User choice//


function getHumanChoice(){

    const human = prompt("Please enter your choice: Rock, paper or scissors").toLowerCase();
    return human;

}
    console.log(getHumanChoice());

    let humanScore = 0;
    let computerScore = 0;

 //3 game logic//

 function playRound(computerChoice, humanChoice){

    if (humanChoice === computerChoice)
        { alert(`It's a tie! Both chose ${humanChoice}.`); }

    else if 
        (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        )
        { alert(`You won! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;        
        }

    else {
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
        }
    }

 // 4 scores//

function playGame(){
    for (let i = 0; i < 5; i++) {
      /* ATTEMPTING RETURN RESULTS AND UNNECESSARY ALERT. GAME NOT WORKING!
    
    {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            let roundResult = playRound(computerChoice, humanChoice);
            alert(roundResult);
        }  version below work fine :-) */   
        
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
    }
   

    if (computerScore > humanScore) {
        alert("Sorry! The computer won the game.");
    } else if (humanScore > computerScore) {
        alert("Congratulations! You won the game!");
    } else {
        alert("It's a tie!");
    }
    
    console.log(`Final Scores - You: ${humanScore} Computer: ${computerScore}.`);
}
//GAME ON //
 playGame();

        
 