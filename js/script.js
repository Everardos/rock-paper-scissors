const playerRock = document.querySelector("#player-rock");
const playerPaper = document.querySelector("#player-paper");
const playerScissors = document.querySelector("#player-scissors");
const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerScoreDisplay = document.querySelector("#player-score");
const results = document.querySelector(".results");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice;
    computerRock.classList.add("greyed");
    computerPaper.classList.add("greyed");
    computerScissors.classList.add("greyed");
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            computerRock.classList.remove("greyed");
            choice = "rock";
            break;
        case 2:
            computerPaper.classList.remove("greyed");
            choice = "paper";
            break;
        case 3:
            computerScissors.classList.remove("greyed");
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
            playerScore++;
            results.textContent = `You win! ${capitalize(playerChoice)} beats ${computerChoice}!`;
            break;
        case "lose":
            computerScore++;
            results.textContent = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}`;
            break;
        case "draw":
            results.textContent = `It's a tie! ${capitalize(playerChoice)} draws against ${computerChoice}`;
            break;
    }
}

let gameEnd = false;


function updateScore() {
    playerScoreDisplay.textContent = "SCORE: " + playerScore;
    computerScoreDisplay.textContent = "SCORE: " + computerScore;
    if (computerScore === 5) {
        results.textContent = "Game over! Computer wins."
        gameEnd = true;
    } else if (playerScore === 5) {
        results.textContent = "Congratulations! You won!"
        gameEnd = true;
    }

    if (gameEnd === true) {
        playerRock.removeEventListener("click", playRock);
        playerPaper.removeEventListener("click", playPaper);
        playerScissors.removeEventListener("click", playScissors);
    }
    
}

function resetGreyed() {
    playerRock.classList.add("greyed");
    playerPaper.classList.add("greyed");
    playerScissors.classList.add("greyed");
}

function playRock() {
    resetGreyed();

    console.log(playRound("rock", getComputerChoice()));
    updateScore();
    playerRock.classList.remove("greyed");
}

function playPaper() {
    resetGreyed();

    console.log(playRound("paper", getComputerChoice()));
    updateScore();
    playerPaper.classList.remove("greyed");
}

function playScissors() {
    resetGreyed();

    console.log(playRound("scissors", getComputerChoice()));
    updateScore();

    playerScissors.classList.remove("greyed");
}

playerRock.addEventListener("click", playRock);
playerPaper.addEventListener("click", playPaper);
playerScissors.addEventListener("click", playScissors);

