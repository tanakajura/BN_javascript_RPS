//global variables
let cpu_Score = 0;
let p1_Score = 0;
let playerSelection = prompt("Enter Rock, Paper or Scissors: ", "").toLowerCase().trim();
let computerSelection = computerPlay();  
let play = playRound(playerSelection,computerSelection);  


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
                return "You Win!";
                break;
            case "rock":
                return "Draw!";
                break;
            case "scissors":
                return "You Lose!";
                break;
        }
    }else{
        if(computerSelection == "paper"){
            switch(playerSelection){
                case "paper":
                    return "Draw!";
                    break;
                case "rock":
                    return "You Lose!";
                    break;
                case "scissors":
                    return "You Win!";
                    break;
            }
        }else{
            if(computerSelection == "scissors"){
                switch(playerSelection){
                    case "paper":
                        return "You Lose!";
                        break;
                    case "rock":
                        return "You Win!";
                        break;
                    case "scissors":
                        return "Draw!";
                        break;
                }
            }
        }
    }
}

function game(){        
    if(play == "Draw!"){
        return console.log("Draw!" + "\nYou: " + p1_Score + "\nCPU: " + cpu_Score);
    }else{
        if(play == "You Win!"){
            p1_Score++;
            return console.log("You Win " + playerSelection + " beats " + computerSelection + "\nYou: " + p1_Score + "\nCPU: " + cpu_Score);
        }else{
            if(play == "You Lose!"){
                cpu_Score++;
                return console.log("You Lose " + computerSelection + " beats " + playerSelection + "\nYou: " + p1_Score + "\nCPU: " + cpu_Score);
            }
        }
    }
}

for(let i = 0; i < 5; i++){
    game();
}

if (cpu_Score > p1_Score) {
    console.log("Computer WINs! Try again next time");
}else{
    if(p1_Score > cpu_Score){
        Console.log("GREAT JOB! You WIN");
    }else{
        console.log("WOW! Its a Draw");
    }
}
