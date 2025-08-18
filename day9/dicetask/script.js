// Get the necessary DOM elements
const gameHeader = document.getElementById("game-header");
const dice1Image = document.getElementById("dice1");
const dice2Image = document.getElementById("dice2");
const rollButton = document.getElementById("roll-button");

// Array of dice image URLs.
// You can replace these with your own image URLs.
const diceImages = [
  "https://placehold.co/120x120/4f46e5/ffffff?text=1", // Index 0 -> Dice roll 1
  "https://placehold.co/120x120/4f46e5/ffffff?text=2", // Index 1 -> Dice roll 2
  "https://placehold.co/120x120/4f46e5/ffffff?text=3", // Index 2 -> Dice roll 3
  "https://placehold.co/120x120/4f46e5/ffffff?text=4", // Index 3 -> Dice roll 4
  "https://placehold.co/120x120/4f46e5/ffffff?text=5", // Index 4 -> Dice roll 5
  "https://placehold.co/120x120/4f46e5/ffffff?text=6", // Index 5 -> Dice roll 6
];
// Update the dice images
// document.querySelectorAll(".dice")[0].src = images/dice${player1Dice}.png;
// document.querySelectorAll(".dice")[1].src = images/dice${player2Dice}.png;
// Function to handle the dice roll logic
function rollDice() {
  // Generate random numbers for both players (1-6)
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  // Update the dice images based on the random numbers.
  // We subtract 1 from the roll to get the correct array index (0-5).
  dice1Image.src = diceImages[roll1 - 1];
  dice2Image.src = diceImages[roll2 - 1];

  // Determine the winner and update the header text
  if (roll1 > roll2) {
    gameHeader.textContent = "🎉 Player 1 Wins!";
    gameHeader.classList.remove("text-purple-400", "text-gray-400");
    gameHeader.classList.add("text-indigo-400");
  } else if (roll2 > roll1) {
    gameHeader.textContent = "Player 2 Wins! 🎉";
    gameHeader.classList.remove("text-indigo-400", "text-gray-400");
    gameHeader.classList.add("text-purple-400");
  } else {
    gameHeader.textContent = "It's a Draw!";
    gameHeader.classList.remove("text-indigo-400", "text-purple-400");
    gameHeader.classList.add("text-gray-400");
  }
}

// Add a click event listener to the button
rollButton.addEventListener("click", rollDice);
