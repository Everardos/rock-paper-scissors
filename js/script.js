const playerRock = document.querySelector(".player-button.rock");
const playerPaper = document.querySelector(".player-button.paper");
const playerScissors = document.querySelector(".player-button.scissors");
const computerRock = document.querySelector(".computer-button.rock");
const computerPaper = document.querySelector(".computer-button.paper");
const computerScissors = document.querySelector(".computer-button.scissors");
const gameScore = document.querySelector(".game-score");
const results = document.querySelector(".results");

let score = 0;

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
    return "rock";
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
            score++;
            results.textContent = `You win! ${capitalize(playerChoice)} beats ${computerChoice}!`;
            break;
        case "lose":
            score--;
            results.textContent = `You lose! ${capitalize(computerChoice)} beats ${playerChoice}`;
            break;
        case "draw":
            results.textContent = `It's a tie! ${capitalize(playerChoice)} draws against ${computerChoice}`;
            break;
    }
}

let gameEnd = false;


function updateScore() {
    if (score < 5 && score > -5) {
        gameScore.textContent = score;
    } else if (score === -5) {
        gameScore.textContent = score;
        results.textContent = "Game over! Computer wins."
        gameEnd = true;
    } else {
        gameScore.textContent = score;
        results.textContent = "Congratulations! You won!"
        gameEnd = true;
    }

    if (gameEnd === true) {
        playerRock.removeEventListener("click", playRock);
        playerPaper.removeEventListener("click", playPaper);
        playerScissors.removeEventListener("click", playScissors);
    }
    
}


function playRock() {
    console.log(playRound("rock", getComputerChoice()));
    updateScore();
}

function playPaper() {
    console.log(playRound("paper", getComputerChoice()));
    updateScore();
}

function playScissors() {
    console.log(playRound("scissors", getComputerChoice()));
    updateScore();
}

playerRock.addEventListener("click", playRock);
playerPaper.addEventListener("click", playPaper);
playerScissors.addEventListener("click", playScissors);

