// Your JavaScript goes here!

const container = document.querySelector('#container');
const p = document.createElement('p');
p.setAttribute('style', 'white-space: pre;');

container.appendChild(p);

const playRock = document.querySelector('#rock');
const playScissors = document.querySelector('#scissors');
const playPaper = document.querySelector('#paper');

let roundResult = "";
let roundCount = 0;
let winCount = 0;
let lossCount = 0;

console.log(playRock);

function computerPlay() {
    let move = Math.floor(Math.random() * 3);
    if (move == 0) {
        p.textContent += "computer chooses rock!\r\n";
        return "rock";
    }
    else if (move == 1) {
        p.textContent += "computer chooses paper!\r\n";
        return "paper";
    }
    else {
        p.textContent += "computer chooses scissors!\r\n";
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) p.textContent += "draw\r\n";

    else if ((playerSelection == "rock" && computerSelection == "scissors")
        || (playerSelection == "scissors" && computerSelection == "paper")
        || (playerSelection == "paper" && computerSelection == "rock")) {
        p.textContent += `you win the round! ${playerSelection} beats ${computerSelection}\r\n`;
        winCount++;
    }

    else {
        p.textContent += `you lose the round! ${computerSelection} beats ${playerSelection}\r\n`;
        lossCount++;
    }

    console.log(roundCount);

    if (roundCount % 5 == 0) {
        if (winCount > lossCount) p.textContent += `you won ${winCount} time(s) and lost ${lossCount}! you win the game!\r\n`;
        else if (winCount < lossCount) p.textContent += `you won ${winCount} time(s) and lost ${lossCount}! you lost the game.\r\n`;
        else p.textContent += "you drew the game!";
    }
}

playRock.addEventListener('click', e => {
    roundCount++;
    p.textContent += "you chose rock!\r\n";
    roundResult = playRound('rock', computerPlay());
});
playPaper.addEventListener('click', e => {
    roundCount++;
    p.textContent += "you chose paper!\r\n";
    roundResult = playRound('paper', computerPlay());
});
playScissors.addEventListener('click', e => {
    roundCount++;
    p.textContent += "you chose scissors!\r\n";
    roundResult = playRound('scissors', computerPlay());
});