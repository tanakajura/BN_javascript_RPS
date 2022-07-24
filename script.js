function computerPlay(){
    let cpuChoice;
    switch(cpuChoice = Math.floor(Math.random() * 3) + 1){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){  
    if(computerSelection == "rock"){
        switch(playerSelection){
            case "paper":
                return "You Win! Paper beats Rock";
                break;
            case "rock":
                return "Draw!";
                break;
            case "scissors":
                return "You Lose! Rock beats Scissors";
                break;
        }
    }else{
        if(computerSelection == "paper"){
            switch(playerSelection){
                case "paper":
                    return "Draw!";
                    break;
                case "rock":
                    return "You lose! Paper beats Rock";
                    break;
                case "scissors":
                    return "You Win! Scissors beats Rock";
                    break;
            }
        }else{
            if(computerSelection == "scissors"){
                switch(playerSelection){
                    case "paper":
                        return "You Lose! Scissors beats paper";
                        break;
                    case "rock":
                        return "You win! Rock beats Scissors";
                        break;
                    case "scissors":
                        return "Draw!";
                        break;
                }
            }
        }
    }
}

const playerSelection = prompt("Enter Rock, Paper or Scissors: ", "").toLowerCase().trim();
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));




