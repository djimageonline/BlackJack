let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// let newCardToPlay = "";

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumEl.textContent = "Sum:" + sum;

  if (sum <= 20) {
    message = "Do you want to hit?";
  } else if (sum === 21) {
    message = "BlackJack! You won!";
    hasBlackJack = true;
  } else {
    message = "Ouch, Maybe next time.  You Lost!";
    let isAlive = false;
  }
  // messageEl.textContent = "Hi";
  messageEl.textContent = message;
}

function newCard() {
  let newerCard = 5;
  sum += newerCard;
  renderGame();
}
