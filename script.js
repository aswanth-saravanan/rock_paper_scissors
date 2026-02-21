function getComputerChoice(){
    let random = Math.random();
    if (random < 0.33){
        return "rock";
    }else if (random < 0.66){
        return "paper"
    }else{
        return "scissors"
    }
}


let humanScore = 0
let computerScore =0

const roundResult = document.querySelector(".round");
const scorText = document.querySelector(".score");
const winnerText = document.querySelector(".winner");

const rockbtn = document.querySelector(".btn-rock");
const paperbtn = document.querySelector(".btn-paper");
const scissorsbtn = document.querySelector(".btn-scissors");

function endGame(message){
    winnerText.textContent = message

    rockbtn.disabled = true;
    paperbtn.disabled = true;
    scissorsbtn.disabled = true;
}

function playRound(humanChoice, computerChoice){
    if (humanScore === 5 || computerScore === 5) return;

    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++
        roundResult.textContent = `you win! ${humanChoice} beats ${computerChoice}` 
    }else if (humanChoice === computerChoice){
        roundResult.textContent = `it's a tie you both choose ${humanChoice}`
    }else{
        computerScore++;
        roundResult.textContent = `computer wins ${computerChoice} beats ${humanChoice}`
    }
    scorText.textContent = ` score => human: ${humanScore} computer: ${computerScore}`

    if (humanScore === 5){
        endGame("you won the game")
    }else if(computerScore === 5){
        endGame("computer won")
    }
}




rockbtn.addEventListener("click", () =>{
    playRound("rock",getComputerChoice());
});
paperbtn.addEventListener("click", () =>{
    playRound("paper",getComputerChoice());
});
scissorsbtn.addEventListener("click", () =>{
    playRound("scissors",getComputerChoice());
});

      







