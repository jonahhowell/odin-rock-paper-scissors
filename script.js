function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'Rock';
    if (choice === 1) return 'Paper';
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatString(playerSelection);
    computerSelection = formatString(computerSelection);
    if (playerSelection === computerSelection) return "Tie!";
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') return winText(playerSelection, computerSelection);
        return loseText(playerSelection, computerSelection);
    }
    if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') return winText(playerSelection, computerSelection);
        return loseText(playerSelection, computerSelection);
    }
    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') return winText(playerSelection, computerSelection);
        return loseText(playerSelection, computerSelection);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = formatString(prompt("Enter (rock|paper|scissors)"));
        console.log(playRound(playerChoice, getComputerChoice()));
    }
}

function winText(player, computer) {
    return "You win! " + player + " beats " + computer + "!";
}

function loseText(player, computer) {
    return "You lose! " + player + " is beaten by " + computer + "!";
}

function formatString(str) {
    if (str.length == 0) return "";
    firstC = str.slice(0, 1).toUpperCase();
    remainder = str.slice(1, str.length).toLowerCase();
    return firstC + remainder;
}

const choices = document.querySelectorAll(".choice");
choices.forEach(choice => choice.addEventListener('click', (e) => {
    const playerSelection = choice.getAttribute('data-selection');
    const roundResult = playRound(playerSelection, getComputerChoice());
    document.getElementById('display').textContent = roundResult;
}));