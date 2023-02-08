let player = {
  name: "Jake",
  chips: 150,
};

let dealer = {
  name: "Jack the Dealer",
  years: 42,
};

// Dealer needs to show his/her card
// Dealer goes first but cannot go again until after player gets black jack or decides to stay
// Dealer can then go until black jack or until he stays
// At the end of game if player is Alive and player sum is greater than dealer card but not more than 21, player wins, otherwise Dealer wins

// Dealer
let dealerCards = [];
let dealerSum = 0;
let dealerHasBlackJack = false;
let dealerIsAlive = false;
let dealerCardsEl = document.getElementById("dealer-cards-el");
let dealerSumEl = document.getElementById("dealer-sum-el");

// Player
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

console.log(player);
playerEl.textContent = `${player.name}: $${player.chips}`;

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
      userpick = Number(prompt("Dealer: Choose 1 or 11!!! Or else I will choose for you"));
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

function dealerRandomCard() {
  let randomDealerCardNumber = Math.floor(Math.random() * 13) + 1;
  if (randomDealerCardNumber === 1) {
    randomDealerCardNumber = 11;
    return randomDealerCardNumber;
  } else if (randomDealerCardNumber === 11 || randomDealerCardNumber === 12 || randomDealerCardNumber === 13) {
    randomDealerCardNumber = 10;
    return randomDealerCardNumber;
  } else {
    return randomDealerCardNumber;
  }
}

function startGame() {
  //Dealer
  dealerIsAlive = true;
  let dealerFirstCard = dealerRandomCard();
  let dealerSecondCard = dealerRandomCard();
  dealerCards = [dealerFirstCard, dealerSecondCard];
  dealerSum = dealerFirstCard + dealerSecondCard;
  dealerCardsEl.textContent = "Dealer Cards: ";

  for (let c = 0; c < dealerCards.length; c++) {
    dealerCardsEl.textContent += dealerCards[c] + " | ";
  }
  dealerSumEl.textContent = "Dealer Sum:" + dealerSum;

  if (dealerSum === 21) {
    messageEl.textContent = "Dealer: You Lost, Dealer got BlackJack, Start Game again";
    resetGame();
  }

  //Player
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function dealerRenderGame() {
  dealerCardsEl.textContent = "Dealer Cards: ";
  for (let c = 0; c < dealerCards.length; c++) {
    dealerCardsEl.textContent += dealerCards[c] + " | ";
  }

  if (dealerSum <= 20) {
    dealerNewCard();
    message = "Dealer hits";
  } else if (dealerSum === 21) {
    message = "---->    BlackJack! Dealer won and you LOST!    <------";
    dealerHasBlackJack = true;
  } else {
    message = "Dealer:  I Lost! Nooooo";
    dealerIsAlive = false;
  }
  messageEl.textContent = message;
  dealerSumEl.textContent = "Dealer Sum:" + dealerSum;
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let c = 0; c < cards.length; c++) {
    cardsEl.textContent += cards[c] + " | ";
  }

  sumEl.textContent = "Sum:" + sum;

  if (sum <= 20) {
    message = "Dealer: Do you want to hit?";
  } else if (sum === 21) {
    message = "---->    BlackJack! You won!    <------";
    hasBlackJack = true;
  } else {
    message = "Dealer: Ouch, Maybe next time.  You Lost!";
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

function dealerNewCard() {
  if (dealerIsAlive === true && hasBlackJack === false) {
    if (dealerSum < sum) {
      let newerDealerCard = dealerRandomCard();
      dealerSum += newerDealerCard;
      dealerCards.push(newerDealerCard);
    }
  }
  dealerRenderGame();
}

function endGame() {
  dealerNewCard();

  if (isAlive === true && hasBlackJack === false) {
    if (sum <= 21) {
      message = "Awesome! You Won!";
    } else if (sum === 21) {
      message = "BlackJack! You won!";
      hasBlackJack = true;
    } else {
      message = "Ouch, Maybe next time.  You Lost!";
      isAlive = false;
    }
    messageEl.textContent = message + " Start the game again!";
  }
  resetGame();
}

function resetGame() {
  cards = [];
  sum = 0;
  hasBlackJack = false;
  isAlive = false;
  message = "";
}
