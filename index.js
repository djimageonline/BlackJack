let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
  if (sum <= 20) {
    message = "Do you want to hit?";
  } else if (sum === 21) {
    message = "BlackJack! You won!";
    hasBlackJack = true;
  } else {
    message = "Ouch, Maybe next time.  You Lost!";
    let isAlive = false;
  }
  console.log(message);
}
