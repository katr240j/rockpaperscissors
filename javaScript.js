//debugging
"use strict";

//variable for the computer and the user
let userChoice = "";
let computerChoice = "";

//variable for rock paper and scissors to make it easier for the computer to rembember
const userRock = document.querySelector(".rock");
const userPaper = document.querySelector(".paper");
const userScissors = document.querySelector(".scissors");

//making sure that html document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMLoaded");

    playerChoice();
});
//what the user decides to choose add evenet listener to the variables made earlier so the computer can go to the next function
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

// the computer makes a random choice beetween 0 and 2 since we will give each variable a number later
function makeRandomComputerChoice(){
    console.log("makeRandomComputerChoice");

   

computerChoice = Math.round(Math.random() * 2);

console.log("makeRandomComputerChoice");
console.log("plaeyr choice");

showAnimations();
}
//starting the animations both hand get the shake animation from css
function showAnimations(){
    console.log("showAnimations");
    document.querySelector("#player1").classList.add("shake");
    document.querySelector("#player2").classList.add("shake");

//hide the text results
    document.querySelector("#draw").classList = "hidden";
    document.querySelector("#win").classList = "hidden";
    document.querySelector("#lose").classList = "hidden";
//adding eventlistener to the animation when it stopes and go to the next function that determinds the results
    document.querySelector("#player1").addEventListener("animationend", determineWinner);

}
//rock=0 paper=1 scissors=2 
function determineWinner() {
    console.log("determineWinner");
//animationend- stopping the animation 
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player2").classList.remove("shake");
// if the user chooses rock we add the class rock to  player1 (the user)
    if (userChoice === "rock") {

        document.querySelector("#player1").classList.add("rock");
// if the computer chooses rock its a draw
        if (computerChoice === 0) {

            document.querySelector("#player2").classList.add("rock");

            showDraw();
//if the computer chooses paper we add the class to player2 (the computer player) and the user looses
        } else if (computerChoice === 1) {

            document.querySelector("#player2").classList.add("paper");

            showLoser();
//if the computer chooses scissors player2 ( the user) wins
        } else {

            document.querySelector("#player2").classList.add("scissors");

            showWin();

        }
// if the user chooses paper we add the class to player1 ( the user)
    } else if (userChoice === "paper") {

        document.querySelector("#player1").classList.add("paper");
// if the computer chooses rock the user wins with paper
        if (computerChoice === 0) {

            document.querySelector("#player2").classList.add("rock");

            showWin();
//if the computer chooses paper its a draw since the user choice paper 
        } else if (computerChoice === 1) {

            document.querySelector("#player2").classList.add("paper");

            showDraw();
//the computer chooses scissors and then the user looses with their choice of paper
        } else {

            document.querySelector("#player2").classList.add("scissors");

            showLoser();

        }
// the user chooses scissors
    } else {

        document.querySelector("#player1").classList.add("scissors");
//the computer chooses rock and then the user looses with their choice of scissors
        if (computerChoice === 0) {

            document.querySelector("#player2").classList.add("rock");

            showLoser();
// the computer chooses paper then the user wins with their choice of scissors
        } else if (computerChoice === 1) {

            document.querySelector("#player2").classList.add("paper");

            showWin();
// the computer chooses scissors then it is a draw
        } else {

            document.querySelector("#player2").classList.add("scissors");
            

            showDraw();

        }

    }

}

// showing win on screen by removing the class hidden 
function showWin(){
    console.log("showWin");
    document.querySelector("#win").classList.remove("hidden");
}
// showing loose on screen by removing the class hidden 
function showLoser(){
    console.log("showLoser");
    document.querySelector("#lose").classList.remove("hidden");
}
// showing draw on screen by removing the class hidden 
function showDraw() {

    document.querySelector("#draw").classList.remove("hidden");

    console.log("showDraw");

}