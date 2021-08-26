//debugging
"use strict";


let userChoice = "";
let computerChoice = "";


const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissors = document.querySelector(".scissors");


window.addEventListener("load", start);

function start(){
    console.log("start");
    
 
    playerChoice();
    
}

function playerChoice(){
    console.log("playerChoice");

    userRock.addEventListener("click", function() {
        console.log("user choice rock");
        userChoice = "rock";
        makeRandomComputerChoice();
 
 
    });
    userPaper.addEventListener("click", function() {
        console.log("user choice paper");
        userChoice = "paper";
        makeRandomComputerChoice();
    });
    userScissors.addEventListener("click", function() {
        console.log("user choice scissors");
        userChoice = "scissor";
        makeRandomComputerChoice();
    });


}


function makeRandomComputerChoice(){
    console.log("makeRandomComputerChoice");

   

computerChoice = Math.round(Math.random() *2);

console.log("makeRandomComputerChoice");
console.log("plaeyr choice");

showAnimations();
}

function showAnimations(){
    console.log("showAnimations");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");


    //document.querySelector("#lose").classList.
    determinWinner();
}

function determinWinner(){
    console.log("determinWinner");
if (winner =="computer"){
    showLose();

}else if (winner =="user"){
    showWin();
} else{ showDraw};


}

function showWin(){
    console.log("showWin");
}

function showLose(){
    console.log("showLose");
}