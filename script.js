function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return 'Rock';
    if (choice === 1) return 'Paper';
    return 'Scissors';
}

function formatString(str) {
    if (str.length == 0) return "";
    firstC = str.slice(0, 1).toUpperCase();
    remainder = str.slice(1, str.length).toLowerCase();
    return firstC + remainder;
}

console.log(formatString("r"));