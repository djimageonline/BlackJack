let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// let newCardToPlay = "";

function getRandomCard() {
  return Math.floor(Math.random() * 10) + 1;
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let c = 0; c < cards.length; c++) {
    cardsEl.textContent += cards[c] + " ";
  }

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
  let newerCard = getRandomCard();
  sum += newerCard;
  cards.push(newerCard);
  console.log(newerCard);
  renderGame();
}
