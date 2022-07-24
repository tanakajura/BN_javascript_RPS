function computerPlay(){
    let cpuChoice;
    switch(cpuChoice = Math.floor(Math.random() * 3) + 1){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

for(let i = 1; i <= 5; i++){
    console.log(computerPlay());
}
/*function playRound(playerSelection, computerSelection){

} */





