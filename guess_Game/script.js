#!/usr/bin/node

"use strict";

// Declaring of variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// checks if the player's guess is correct or not
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("⚠️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When the guess is not correct
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When the guess is low or when the player looses
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "🙀 Too High!" : "🤪 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😢 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // When Guess is greater than secrectNumber
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '🙀 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😢 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is less than secretNumber
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = '🤪 Too low!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else {
  //   document.querySelector('.message').textContent = '😢 You lost the game!';
  //   document.querySelector('.score').textContent = 0;
  // }
});

// Restarts the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
