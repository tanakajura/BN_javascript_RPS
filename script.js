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
    computerSelection = computerPlay();
    playerSelection = prompt("Enter \"Rock\", \"Paper\" or \"Scissors\"", "");
}

let player;
let computer;
playRound(player,computer);
