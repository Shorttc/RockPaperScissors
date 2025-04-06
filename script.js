//Reference the container
const container = document.querySelector("#container");

//Create div box called bContent
const bContent = document.createElement("div");

//Create buttons
const rock = document.createElement("rock");
const paper = document.createElement("paper");
const scissors = document.createElement("scissors");

//Add button text
rock.innerText = "Rock";
paper.innerText = "Paper";
scissors.innerText = "Scissors";

//Style the buttons
rock.setAttribute("Style", "width: 50px; height: 25px; background-color: blue; color: white; border: solid 3px; border-color: black;")
paper.setAttribute("Style", "width: 50px; height: 25px; background-color: blue; color: white; border: solid 3px; border-color: black;")
scissors.setAttribute("Style", "width: 50px; height: 25px; background-color: blue; color: white; border: solid 3px; border-color: black;")

//Add buttons to classes
bContent.classList.toggle("rock");
bContent.classList.toggle("paper");
bContent.classList.toggle("scissors");

//Add the buttongs to the div box
bContent.appendChild(rock);
bContent.appendChild(paper);
bContent.appendChild(scissors);

//Add the div box to the containter
container.appendChild(bContent);

//Create variables for scores
let hS = 0;
let cS = 0;

//Add event listeners to the buttons
rock.addEventListener('click', () => { 
    playRound(hS, cS, 0);
});
paper.addEventListener('click', () => { 
    playRound(hS, cS, 1);
});
scissors.addEventListener('click', () => { 
    playRound(hS, cS, 2);
});

//Functions
function getComputerChoice() {
    let a = Math.floor(Math.random() * 3)
    return a;
}

function win(){
    if (hS == 5 || cS == 5){
        alert("That's it. You're done. The final score is " + hS + " to " + cS + "!");
    }
    else{alert("You win! The current score is " + hS + " to " + cS + "!");
    }
}

function lose(){
    if (hS == 5 || cS == 5){
        alert("That's it. You're done. The final score is " + hS + " to " + cS + "!");
    }
    else{alert("You lose! The current score is " + hS + " to " + cS + "!");
    }
    
}

function tie(){
    alert("Tie! No score change! The current score is " + hS + " to " + cS + "!");
}

function playRound(scoreH, scoreC, choice){
    let sH = scoreH;
    let sC = scoreC;
    let pc = choice
    let cc = getComputerChoice();
    if (pc == 0) {
        if (cc == 0){tie();}
        else if (cc == 1){
            cS += 1;
            lose();}
        else {
            hS += 1;
            win();}
        
    }
    else if (pc == 1){   
        if (cc == 0) {
            hS += 1;
            win();}
        else if (cc == 1) {tie();}
        else {
            cS += 1;
            lose();}
    }
    else {
        if (cc == 0){
            cS += 1;
            lose();}
        else if (cc == 1) {
            hS += 1;
            win();}
        else {tie();}
    }
    
}
