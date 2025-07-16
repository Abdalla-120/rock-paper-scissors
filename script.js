function getComputerChoice() {
    let n = Math.random()
    if (n <= 0.3) {
        return("rock");
    } else if (n <= 0.6) {
        return("paper");
    } else {
        return("scissors");
    }
}

function getHumanChoice() {
    let answer = prompt("Enter your answer: ");
    return(answer);
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        let winner;
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                winner = "computer";
            } else if (computerChoice == "scissors") {
                winner = "human"; 
            } else {
                winner = "draw";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "paper") {
                winner = "draw";
            } else if (computerChoice == "scissors") {
                winner = "computer"; 
            } else {
                winner = "human";
            }
        } else {
            if (computerChoice == "paper") {
                winner = "human";
            } else if (computerChoice == "scissors") {
                winner = "draw"; 
            } else {
                winner = "computer";
            }
        }

        if (winner == "human") {
            humanScore++;
            console.log(`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
        } else if (winner == "computer") {
            computerScore++;
            console.log(`You lose. ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`);
        } else {
            console.log("It's a draw.");
        }
    }
    for (let i = 1; i <=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(humanScore)
    console.log(computerScore)
}

playGame()