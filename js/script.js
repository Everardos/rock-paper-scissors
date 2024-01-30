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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let roundOutcome;
    if (playerSelection === computerSelection) {
        roundOutcome = "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        roundOutcome = "lose";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        roundOutcome = "win";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        roundOutcome = "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        roundOutcome = "lose";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        roundOutcome = "lose";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        roundOutcome = "win";
    }

    switch (roundOutcome) {
        case "win":
            return `You win! ${capitalize(playerSelection)} beats ${computerSelection}!`;
            break;
        case "lose":
            return `You lose! ${capitalize(computerSelection)} beats ${playerSelection}`;
            break;
        case "draw":
            return `It's a tie! ${capitalize(playerSelection)} draws against ${computerSelection}`;
    }
}

/*

*/