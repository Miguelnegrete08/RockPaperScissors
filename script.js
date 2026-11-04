function getHumanChoice(){
    let choice = prompt("Rock Paper or Scissors!!!")
    return choice
}

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1

    if(choice === 1) {
        return "rock"
    }
    else if (choice === 2) {
        return "paper"
    }
    else if(choice === 3) {
        return "scissors"
    }
}


function playRound(computerChoice, humanChoice){
    let humanScore = 0;
    let computerScore = 0;
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1
    }
    else if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore += 1
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore += 1
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore += 1
    }
    else{
        computerScore += 0
        humanScore += 0
    }
    console.log("human: " + humanChoice)
    console.log("pc: " + computerChoice)
    console.log("human score: " + humanScore)
    console.log("computer score: " + computerScore)
}



const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

playRound(computerChoice, humanChoice)
