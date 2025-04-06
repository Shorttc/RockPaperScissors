function getHumanChoice() {
    let uI = prompt("Let's play Rock, Paper, Scissors!  Please type one of those three options to begin the round!").toLowerCase()
    if (uI == "rock") {return 0}
    else if (uI == "paper") {return 1}
    else if (uI == "scissors") {return 2}
    else {
        console.log("Try that again and type one of the three items listed...");
        getHumanChoice();
    }
}

function getComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    return a;
}

function win(){
    console.log("You win!");
    return 1;
}

function lose(){
    console.log("You lose!");
    return 1;
}

function tie(){
    console.log("Tie! No score change!")
}

function playRound(scoreH, scoreC, count){
    let sH = scoreH;
    let sC = scoreC;
    let c = count + 1;
    let pc = getHumanChoice();
    let cc = getComputerChoice();
    if (pc == 0) {
        if (cc == 0){tie();}
        else if (cc == 1){sC += lose();}
        else {sH += win();}
    }
    else if (pc == 1){   
        if (cc == 0) {sH += win();}
        else if (cc == 1) {tie();}
        else {sC += lose();}
    }
    else {
        if (cc == 0){sC += lose();}
        else if (cc == 1) {sH += win();}
        else {tie();}
    }
    if (c < 5){
        console.log("The current score is " + sH + " to " + sC + ".");
        playRound(sH, sC, c);
    }
    else {
        console.log("The final score is " + sH + " to " + sC + ".");
    }
}

playRound(0, 0, 0);