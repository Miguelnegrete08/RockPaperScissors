const btns = document.querySelectorAll("button")

let humanScore = 0;
let computerScore = 0;



function getHumanChoice(){
    btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let choice = btn.textContent;
        return choice;
    })
})
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


// function playRound(computerChoice, humanChoice){
//     humanChoice = humanChoice.toLowerCase();

//     if(humanChoice === "rock" && computerChoice === "scissors"){
//         humanScore += 1
//     }
//     else if(humanChoice === "paper" && computerChoice === "rock"){
//         humanScore += 1
//     }
//     else if(humanChoice === "scissors" && computerChoice === "paper"){
//         humanScore += 1
//     }
//     else if(computerChoice === "rock" && humanChoice === "scissors"){
//         computerScore += 1
//     }
//     else if(computerChoice === "paper" && humanChoice === "rock"){
//         computerScore += 1
//     }
//     else if(computerChoice === "scissors" && humanChoice === "paper"){
//         computerScore += 1
//     }
//     else{
//         computerScore += 0
//         humanScore += 0
//     }
//     console.log("human: " + humanChoice)
//     console.log("pc: " + computerChoice)
//     console.log("human score: " + humanScore)
//     console.log("computer score: " + computerScore)

// }



// function playGame(){
//     for (let i=5; i>0; i--){
//         const humanChoice = getHumanChoice()
//         const computerChoice = getComputerChoice()

//         playRound(computerChoice, humanChoice)
//     }

//     if(humanScore > computerScore){
//         console.log("Human wins!")
//     }
//     else if(computerScore > humanScore){
//         console.log("Computer Wins!")
//     }
//     else{
//         console.log("It's a Tie!")
//     }
// }



// playGame()