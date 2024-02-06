const playerRock = document.querySelector(".player-button.rock");
const playerPaper = document.querySelector(".player-button.paper");
const playerScissors = document.querySelector(".player-button.scissors");
const computerRock = document.querySelector(".computer-button.rock");
const computerPaper = document.querySelector(".computer-button.paper");
const computerScissors = document.querySelector(".computer-button.scissors");

function getComputerChoice() {
    let choice;
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

function evaluateRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "draw";
    const winConditions = ["rock scissors", "scissors paper", "paper rock"];
    if (winConditions.includes(playerChoice + " " + computerChoice)) {
        return "win";
    } else {
        return "lose";
    }
}


function playRound(playerChoice, computerChoice) {
    let roundOutcome = evaluateRound(playerChoice, computerChoice);
    switch (roundOutcome) {
        case "win":
            return `You win! ${capitalize(playerChoice)} beats ${computerChoice}!`;
            break;
        case "lose":
            return `You lose! ${capitalize(computerChoice)} beats ${playerChoice}`;
            break;
        case "draw":
            return `It's a tie! ${capitalize(playerChoice)} draws against ${computerChoice}`;
    }
}

playerRock.addEventListener("click", function () {
    console.log(playRound("rock", getComputerChoice()))
})

playerPaper.addEventListener("click", function () {
    console.log(playRound("paper", getComputerChoice()))
})

playerScissors.addEventListener("click", function () {
    console.log(playRound("scissors", getComputerChoice()))
})

