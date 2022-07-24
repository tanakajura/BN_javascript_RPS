function computerPlay(){
    let cpuChoice = Math.floor(Math.random() * 4);
    switch(cpuChoice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
for(let i = 0; i <= 5; i++){
    console.log(computerPlay());
    i++;
}
/*function playRound(playerSelection, computerSelection){

} */





