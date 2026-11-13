const btns = document.querySelectorAll("button");
const container = document.querySelector(".container");
const containerText = document.createElement("div");
containerText.classList.add("containerText");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)+1

    if(choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else if(choice === 3) {
        return "scissors";
    }
};


function playRound(computerChoice, humanChoice){

    if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore += 1;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore += 1;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore += 1;
    }
    else if(computerChoice === "rock" && humanChoice === "scissors"){
        computerScore += 1;
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        computerScore += 1;
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        computerScore += 1;
    }
    else{
        computerScore += 0;
        humanScore += 0;
    }
};

function getWinner(){
    if(humanScore == 5 && humanScore > computerScore){
        const humanWins = document.createElement("div");
        humanWins.textContent = "Human wins!";
        containerText.appendChild(humanWins);
    }
    else if(computerScore == 5 && computerScore > humanScore){
        const computerWins = document.createElement("div");
        computerWins.textContent = "Computer wins";
        containerText.appendChild(computerWins);
    }
}

function getScores(choice, computerChoice){
    const result = document.createElement("div");
    const score =  document.createElement("div");
    result.textContent = `human ${choice} || PC ${computerChoice}`;
    score.textContent = `Score= ${humanScore} || ${computerScore}`;
    containerText.append(result, score);
}

function playAgain() {
  const button = document.createElement("button");
  button.textContent = "Play Again!";
  containerText.append(button);
  button.addEventListener("click", (e) => {
    humanScore = 0;
    computerScore = 0;
    containerText.textContent = "";
    listener();
  });
};


var handleClick = function(e){
    let choice = e.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    
    playRound(computerChoice, choice);

    if(humanScore === 5 || computerScore === 5){
        containerText.textContent = "";
        getWinner();
        getScores(choice, computerChoice)
        btns.forEach(function(btn){
            btn.removeEventListener("click", handleClick);
        });
        playAgain();
    }else{
        getScores(choice, computerChoice)
    };
};

function listener(){
    btns.forEach(function(btn){
    btn.addEventListener("click", handleClick);
})
};

listener();


container.appendChild(containerText);


