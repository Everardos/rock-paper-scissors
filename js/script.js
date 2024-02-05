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

function getPlayerChoice() {
    let choice = prompt("Type rock, paper, or scissors: ");

    while (choice.toLowerCase() != "rock" && choice.toLowerCase() != "paper" && choice.toLowerCase() != "scissors") {
        choice = prompt("Sorry, invalid input! Type rock, paper, or scissors: ");
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


function playRound(playerChoice, computerChoice, roundOutcome) {
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


function playGame() {
    let score = 0;
    for (let round = 0; round <5; round++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let roundOutcome = evaluateRound(playerChoice, computerChoice);
        let round = playRound(playerChoice, computerChoice, roundOutcome);
        if (roundOutcome === "win") {
            score++;
        } else if (roundOutcome === "lose") {
            score--;
        }
        alert(round);
    }
    if (score > 0) {
        alert("You win the game!");
    } else if (score < 0) {
        alert("You lose the game!");
    } else {
        alert("The game was a tie.");
    }
    console.log(score)
}

playGame()