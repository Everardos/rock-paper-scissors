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
        default:
            choice = "shoot";
    }
    return choice;
}

