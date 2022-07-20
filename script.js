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
    let allocatePoint = 0; //if 1 its PC if 2 is player if 0 its a draw
    
    computerSelection = computerPlay().toLowerCase().trim();
    playerSelection = prompt("Enter \"Rock\", \"Paper\" or \"Scissors\"", "").toLowerCase().trim();

    if (!((playerSelection == "rock") || (playerSelection == "paper") || (playerSelection == "scissors"))){
        return console.log("Wrong input! \n Insert Rock Paper or Scissors \n GOOD LUCK!")
    }else{
        if(computerSelection == playerSelection){
            allocatePoint = 0;
            return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Its a Draw!");
        }else{
            if((computerSelection == "rock") && (playerSelection == "Scissors")){
                allocatePoint = 1;
                return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Computer Wins!");
            }else{
                if((computerSelection == "Scissors") && (playerSelection == "Rock")){
                    allocatePoint = 2;
                    return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " You Win!");
                }else{
                    if((computerSelection == "rock") && (playerSelection == "Paper")){
                        allocatePoint = 2;
                        return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " You Win!");
                    }else{
                        if((computerSelection == "Paper") && (playerSelection == "Scissors")){
                            allocatePoint = 2;
                            return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " You Win!");
                        }else{
                            if((computerSelection == "Paper") && (playerSelection == "Rock")){
                                allocatePoint = 1;
                                return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Computer Wins!");
                            }else{
                                if((computerSelection == "Scissors") && (playerSelection == "Paper")){
                                    allocatePoint = 1;
                                    return console.log("CPU Selected: " + computerSelection + "You Selected: " + playerSelection + " Computer Wins!");
                            }
                        }
                    }
                }      
            }
        }
        }
    }
    
}


playRound();



/*
let computerScore = 0;
let playerScore = 0;
for(let i = 0; i <=5; i++){
    playRound();
    if(playRound().allocatePoint = 1){
        computerScore = computerScore + 1;
    }else{
        if(playRound().allocatePoint = 2){
            playerScore = playerScore + 1;
        }else{
            i++;
        }
    }
    i++;
}
*/
