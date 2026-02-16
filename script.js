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


function getHumanChoice(option){
    let choice = prompt("rock / paper / sissors ?")
    return choice.toLowerCase();
}


function playGame(){
    let humanScore = 0
    let computerScore =0

    function playRound(humanChoice, computerChoice){
        if ((humanChoice === "rock" && computerChoice === "scissors")
            || (humanChoice === "paper" && computerChoice === "rock")
            || (humanChoice === "scissors" && computerChoice === "paper")){
                humanScore++
        }else{
            computerScore++
        }
        }

        for (let i=1; i<=5; i++){
            const humanSelection = getHumanChoice()
            const computerSelection = getComputerChoice()
            playRound(humanSelection,computerSelection)
        }
        console.log("final score : ")
        console.log("human score : ",humanScore,"computer score : ",computerScore)

        if (humanScore > computerScore){
            console.log("youu wonnn!!!")
        }else if (computerScore > humanScore){
            console.log("computer won")
        }else{
            console.log("it's a tie")
        }
}

playGame()







