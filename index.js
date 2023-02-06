let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
// let newCardToPlay = "";

function getRandomCard() {
  let randomCardNumber = Math.floor(Math.random() * 13) + 1;

  //Need to fix last else for last choice to pick
  if (randomCardNumber === 1) {
    let userpick = Number(prompt("ACE! Use it as 1 or 11?"));
    if (userpick === 1) {
      randomCardNumber = userpick;
      return randomCardNumber;
    } else if (userpick === 11) {
      randomCardNumber = userpick;
      return randomCardNumber;
    } else {
      userpick = Number(prompt("Choose 1 or 11!!! Or else I will choose for you"));
      if (userpick !== 1 || userpick !== 11) {
        userpick = 11;
        randomCardNumber = userpick;
      } else {
        randomCardNumber = userpick;
        return randomCardNumber;
      }
      return (randomCardNumber = userpick);
    }
    // return 11;
  } else if (randomCardNumber === 11 || randomCardNumber === 12 || randomCardNumber === 13) {
    return 10;
  } else {
    return randomCardNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
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
    isAlive = false;
  }
  // messageEl.textContent = "Hi";
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newerCard = getRandomCard();
    sum += newerCard;
    cards.push(newerCard);
    renderGame();
  }
}
