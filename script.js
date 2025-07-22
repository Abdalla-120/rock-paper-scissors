function getComputerChoice() {
    let n = Math.random()
    if (n <= 0.3) {
        return("rock");
    } else if (n <= 0.6) {
        return("paper");
    } else {
        return("scissors");
    }
};

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

const results = document.querySelector("#results");

const list = document.querySelector("ul");

let humanScore = 0;
let computerScore = 0;

const para = document.querySelector("p");

function updateScore() {
    para.textContent = (`Human Score = ${(humanScore)} Computer Score = ${computerScore}`)
};

function playRound(humanChoice, computerChoice) {
    let winner;
    humanChoice = humanChoice.toLowerCase();
    let item = document.createElement("li");

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
        item.textContent = (`You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.`);
    } else if (winner == "computer") {
        computerScore++;
        item.textContent = (`You lose. ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.`);
    } else {
        item.textContent = ("It's a draw.");
    }

    list.appendChild(item);
    updateScore();

    if (humanScore === 5) {
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
    }

    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", () =>{
    choice = getComputerChoice();
    playRound("rock", choice);
});

paper.addEventListener("click", () =>{
    choice = getComputerChoice();
    playRound("paper", choice);
});

scissors.addEventListener("click", () =>{
    choice = getComputerChoice();
    playRound("scissors", choice);
});

