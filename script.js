function computerPlay(){
    let pcChoice = Math.floor(Math.random() * 31); 
    
    if (pcChoice <= 10){
        return "Rock";
    }else{
        if (pcChoice >= 20){
            return "Paper"; 
        }else{
            return "Scissors"
        }
    }
}

function playRound(playerSelection, computerSelection){

    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Enter \"Rock\", \"Paper\" or \"Scissors\"", "").toLowerCase();

    if(computerSelection == playerSelection){
        return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Its a Draw!";
    }else{
        if((computerSelection == "rock") && (playerSelection == "Scissors")){
            return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Computer Wins!";
        }else{
            if((computerSelection == "Scissors") && (playerSelection == "Rock")){
                return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " You Win!";
            }else{
                if((computerSelection == "rock") && (playerSelection == "Paper")){
                    return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " You Win!";
                }else{
                    if((computerSelection == "Paper") && (playerSelection == "Scissors")){
                        return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " You Win!";
                    }else{
                        if((computerSelection == "Paper") && (playerSelection == "Rock")){
                            return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Computer Wins!";
                        }else{
                            if((computerSelection == "Scissors") && (playerSelection == "Paper")){
                                return "CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Computer Wins!";
                        }
                    }
                }
            }      
        }
    }
    }
}


let player = " ";
let computer = " ";
console.log(playRound(player,computer));


