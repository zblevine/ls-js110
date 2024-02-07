/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

/*
Data structure for deck: array of cards
Data structure for each hand: array of cards
*/

const rlSync = require('readline-sync');

const CARD_SCORES = {
  Ace: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  Jack: 10,
  Queen: 10,
  King: 10
};

function prompt(str) {
  console.log(`==> ${str}`);
}

function initializeDeck() {
  let deck = [];
  let cardValues = ['Ace', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  for (let num = 0; num < 4; num++) {
    deck.push(...cardValues);
  }
  shuffle(deck);
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}


function calcScore(hand) {
  let numAces = hand.filter(card => card === 'Ace').length;
  let handScore = hand.reduce((acc, card) => acc + CARD_SCORES[card], 0);

  for (let num = 0; num < numAces.length; num++) {
    if (handScore + 10 > 21) break;
    handScore += 10;
  }

  return handScore;
}

function playerPrompt() {
  prompt('Hit or stay?');
  let response = rlSync.question();
  while (!(['hit', 'stay'].includes(response.toLowerCase()))) {
    prompt('Please enter hit or stay.');
    prompt('Hit or stay?');
    response = rlSync.question();
  }
  return response.toLowerCase();
}

function arrDisplay(arr) {
  if (arr.length < 3) return arr.join(' and ');
  let lastEle = arr[arr.length - 1];
  return arr.slice(0, arr.length - 1).join(', ') + `, and ${lastEle}`;
}

function dealCards(hand, deck, num) {
  for (let idx = 0; idx < num; idx++) {
    hand.push(deck.shift());
  }
}

function getInitialDeal(deck) {
  let playerHand = [];
  let dealerHand = [];
  dealCards(playerHand, deck, 2);
  dealCards(dealerHand, deck, 2);
  return [playerHand, dealerHand];
}

function busted(hand) {
  return calcScore(hand) > 21;
}

function noBust(playerHand, dealerHand) {
  return !(busted(playerHand) || busted(dealerHand));
}

function playerTurn(playerHand, dealerHand, deck) {
  while (true) {
    prompt(`You have: ${arrDisplay(playerHand)}`);
    prompt(`Dealer has: ${dealerHand[0]} and unknown card`);
    let answer = playerPrompt();
    if (busted(playerHand) || answer === 'stay') break;
    dealCards(playerHand, deck, 1);
  }
}

function dealerTurn(dealerHand, deck) {
  while (true) {
    prompt(`Dealer has: ${arrDisplay(dealerHand)}`);
    if (calcScore(dealerHand) >= 17) break;
    dealCards(dealerHand, deck, 1);
    if (busted(dealerHand)) break;
  }
}

function declareWinner(playerHand, dealerHand) {
  if (calcScore(playerHand) > calcScore(dealerHand)) {
    prompt('You win!');
  } else if (calcScore(dealerHand) > calcScore(playerHand)) {
    prompt('Dealer wins!');
  } else {
    prompt('Push!');
  }
}

function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let response = rlSync.question();
  while (!(['y', 'n'].includes(response))) {
    prompt('Please enter y or n.');
    prompt('Would you like to play again? (y/n)');
    response = rlSync.question();
  }
  return response;
}

while (true) {
  let deck = initializeDeck();
  let [playerHand, dealerHand] = getInitialDeal(deck);
  playerTurn(playerHand, dealerHand, deck);

  if (busted(playerHand)) {
    prompt(`You busted with: ${arrDisplay(playerHand)}`);
  } else {
    dealerTurn(dealerHand, deck);
  }

  if (busted(dealerHand)) {
    prompt(`Dealer busted with: ${arrDisplay(dealerHand)}`);
  }

  if (noBust(playerHand, dealerHand)) {
    declareWinner(playerHand, dealerHand);
  }

  if (playAgain() === 'n') break;
  console.clear();
}
