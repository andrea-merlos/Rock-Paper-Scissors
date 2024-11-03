// ************ All of my vales some refer back to html for score and randomizing display **********

const choice = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const robotDisplay = document.getElementById("robotDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const robotScoreDisplay = document.getElementById("robotScoreDisplay");
let playerScore = 0;
let robotScore = 0;
//  ************************************************ function to play the game ******************
function playGame(playerChoice) {
  const robotChoice = choice[Math.floor(Math.random() * 3)];
  // geenerats a random choice for robot ***********
  let result = "";

  // ********************************************** start to check if it's a tie *****************
  if (playerChoice === robotChoice) {
    result = "IT'S A TIE!";
  } else {
    // ***************************** determines thee winner based on the player's choice **********
    switch (playerChoice) {
      case "rock":
        result = robotChoice === "scissors" ? "You Win!" : "Robot wins!";
        break;
      case "paper":
        result = robotChoice === "rock" ? "You Win!" : "Robot wins!";
        break;
      case "scissors":
        result = robotChoice === "paper" ? "You Win!" : "Robot wins!";
        break;
    }
  }
  // *********************************  this code below displays the updated choice made ************
  playerDisplay.textContent = `Player: ${playerChoice}`;
  robotDisplay.textContent = `Robot: ${robotChoice}`;
  resultDisplay.textContent = result;

  //  removes black syling and addes the green and red styling ***************************************
  resultDisplay.classList.remove("greenText", "redText");

  // shows result of player/robot winning based on the result******************************************
  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      // update scorer display elemnt
      break;
    case "Robot wins!":
      resultDisplay.classList.add("redText");
      robotScore++;
      robotScoreDisplay.textContent = robotScore;
      // update scorer display elemnt
      break;
  }
}
// The End Thank you for checking my code :) *****************************************************
