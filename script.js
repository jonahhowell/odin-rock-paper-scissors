function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'Rock';
    if (choice === 1) return 'Paper';
    return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
    playerSelection = formatString(playerSelection);
    computerSelection = formatString(computerSelection);
    const status = matchResult(playerSelection, computerSelection);
    return resultToString(playerSelection, computerSelection, status);
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

function matchResult(player, computer) {
    if (player === computer) return 'tie';
    if (player === 'Rock') {
        if (computer === 'Scissors') return 'win';
        return 'lose';
    }
    if (player === 'Paper') {
        if (computer === 'Rock') return 'win';
        return 'lose';
    }
    if (player === 'Scissors') {
        if (computer === 'Paper') return 'win';
        return 'lose';
    }
    return 'lose';
}

function resultToString(playerSelection, computerSelection, status) {
    if (status === 'tie') return "Tie!";
    if (status === 'win') return "You win! " + playerSelection + 
                                 " beats " + computerSelection;
    return "You lose! " + playerSelection + " is beaten by " + computerSelection;
}

function formatString(str) {
    if (str.length == 0) return "";
    firstC = str.slice(0, 1).toUpperCase();
    remainder = str.slice(1, str.length).toLowerCase();
    return firstC + remainder;
}

const score = [0, 0];

const choices = document.querySelectorAll(".choice");
choices.forEach(choice => choice.addEventListener('click', (e) => {
    if ((score[0] >= 5) || (score[1] >= 5)) return;
    const playerSelection = choice.getAttribute('data-selection');
    const computerSelection = getComputerChoice();
    const status = matchResult(playerSelection, computerSelection);
    const roundText = resultToString(playerSelection, computerSelection, status);
    document.getElementById('display').textContent = roundText;
    if (status === 'win') {
        document.getElementById('playerscore').textContent = ++score[0];
        if (score[0] == 5) {
            document.getElementById('victorytext').style.display = 'block';
        }
    }
    else if (status === 'lose') {
        document.getElementById('computerscore').textContent = ++score[1];
        if (score[1] == 5) {
            document.getElementById('losetext').style.display = 'block';
        }
    }
}));