const playerRock = document.querySelector("#player-rock");
const playerPaper = document.querySelector("#player-paper");
const playerScissors = document.querySelector("#player-scissors");
const computerRock = document.querySelector("#computer-rock");
const computerPaper = document.querySelector("#computer-paper");
const computerScissors = document.querySelector("#computer-scissors");
const computerScoreDisplay = document.querySelector("#computer-score");
const playerScoreDisplay = document.querySelector("#player-score");
const results = document.querySelector(".results");

let playerHP = 20;
let computerHP = 20;

const typeWins = {
    "normal": [],
    "fire": ["grass", "ice", "bug"],
    "water": ["fire", "ground", "rock"],
    "electric": ["water", "flying"],
    "grass": ["water", "ground", "rock"],
    "ice": ["grass", "ground", "dragon"],
    "fighting": ["normal", "ice", "rock"],
    "poison": ["grass", "bug"],
    "ground": ["fire", "electric", "poison", "rock"],
    "flying": ["grass", "fighting", "bug"],
    "psychic": ["fighting", "poison"],
    "bug": ["grass", "poison", "psychic"],
    "rock": ["fire", "ice", "flying", "bug"],
    "ghost": ["ghost"],
    "dragon": ["dragon"],
}

const typeLosses = {
    "normal": ["rock"],
    "fire": ["fire", "water", "rock", "dragon"],
    "water": ["water", "grass", "dragon"],
    "electric": ["electric", "grass", "dragon"],
    "grass": ["fire", "grass", "poison", "flying", "bug", "dragon"],
    "ice": ["water", "ice"],
    "fighting": ["poison", "flying", "psychic", "bug"],
    "poison": ["poison", "ground", "rock", "ghost"],
    "ground": ["grass", "bug"],
    "flying": ["electric", "rock"],
    "psychic": ["psychic"],
    "bug": ["fire", "fighting", "flying", "ghost"],
    "rock": ["fighting", "ground"],
    "ghost": [],
    "dragon": [],
}

const typeNoEffect = {
    "normal": ["ghost"],
    "fire": [],
    "water": [],
    "electric": ["ground"],
    "grass": [],
    "ice": [],
    "fighting": ["ghost"],
    "poison": [],
    "ground": ["flying"],
    "flying": [],
    "psychic": [],
    "bug": [],
    "rock": [],
    "ghost": [],
    "dragon": [],
}

let typesInPlay = ["fire", "water", "grass"]
let typesNotInPlay = [
    "electric", 
    "ground", 
    "flying",
    "bug",
    "normal",
    "rock",
    "fighting",
    "poison",
    "ghost",
    "psychic",
    "ice",
    "dragon"
]

function getRandomIndex(arrayLength) {
    // Return int from 0 to the max index of the array
    return Math.floor(Math.random() * arrayLength)
}

function getComputerChoice() {
    return typesInPlay[getRandomIndex(typesInPlay.length)]
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
}

function getDamage(attackerChoice, defenderChoice) {
    let damage = 2;
    if (typeWins[attackerChoice].includes(defenderChoice)) {
        damage = 4;
    } else if (typeLosses[attackerChoice].includes(defenderChoice)) {
        damage = 1;
    } else if (typeNoEffect[attackerChoice].includes(defenderChoice)) {
        damage = 0
    }
    return damage;
}

function getAttackMessage(player, choice) {
    return `${capitalize(player)} used ${choice}.`
}

function getRoundOutcomeMessage(damageDifferential, opponentChoice) {
    switch (damageDifferential) {
        case 0:
            return `It didn't affect ${opponentChoice}!`;
        case 1:
            return "It's not very effective";
        case 2:
            return "";
        case 4:
            return "It's super effective!"
    }
}

function evaluateRound(playerChoice, computerChoice) {
    const damageToPlayer = getDamage(computerChoice, playerChoice);
    const damageToComputer = getDamage(playerChoice, computerChoice);
    playerHP -= damageToPlayer;
    computerHP -= damageToComputer;
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

