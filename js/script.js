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

function evaluateRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "draw";
    const winConditions = ["rock scissors", "scissors paper", "paper rock"];
    if (winConditions.includes(playerSelection + " " + computerSelection)) {
        return "win";
    } else {
        return "lose";
    }
}


function playRound(playerSelection, computerSelection, roundOutcome) {
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


function playGame() {
    let score = 0;
    for (let round = 0; round <5; round++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundOutcome = evaluateRound(playerSelection, computerSelection);
        let round = playRound(playerSelection, computerSelection, roundOutcome);
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