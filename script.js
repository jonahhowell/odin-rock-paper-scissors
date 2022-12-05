function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'Rock';
    if (choice === 1) return 'Paper';
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatString(playerSelection);
    computerSelection = formatString(computerSelection);
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') return winText(playerSelection, computerSelection);
        if (computerSelection === 'Paper') return loseText(playerSelection, computerSelection);
        return 'Tie!';
    }
    if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') return winText(playerSelection, computerSelection);
        if (computerSelection === 'Scissors') return loseText(playerSelection, computerSelection);
        return 'Tie!';
    }
    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') return winText(playerSelection, computerSelection);
        if (computerSelection === 'Rock') return loseText(playerSelection, computerSelection);
        return 'Tie!';
    }
}

function winText(player, computer) {
    return "You win! " + player + " beats " + computer + "!";
}

function loseText(player, computer) {
    return "You lose! " + computer + " beats " + player + "!";
}

function formatString(str) {
    if (str.length == 0) return "";
    firstC = str.slice(0, 1).toUpperCase();
    remainder = str.slice(1, str.length).toLowerCase();
    return firstC + remainder;
}

console.log(playRound(getComputerChoice(), getComputerChoice()));