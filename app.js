let userScore = 0;
let computerScore= 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertTwoWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function wins(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertTwoWord(userChoice)}${smallUserWord} beats ${convertTwoWord(computerChoice)}${smallCompWord} You win!`;
}
function loses(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertTwoWord(userChoice)}${smallUserWord} loses to ${convertTwoWord(computerChoice)}${smallCompWord} You lost.`;
}
function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertTwoWord(userChoice)}${smallUserWord} is tied to ${convertTwoWord(computerChoice)}${smallCompWord} Try again!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            loses(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}

function main (){
rock_div.addEventListener('click', function() {
    game("r");
})
paper_div.addEventListener('click', function() {
    game("p");
})
scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();