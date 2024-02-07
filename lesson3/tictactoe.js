const rlSync = require('readline-sync');
const PLAYER_CHAR = 'X';
const COMPUTER_CHAR = 'O';
const WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function prompt(str) {
  console.log(`==> ${str}`);
}

/*
initializeBoard should take in nothing and return an object:
  keys 1-9, values all spaces
*/

function initializeBoard() {
  let board = {};

  for (let num = 1; num <= 9; num++) {
    board[String(num)] = ' ';
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === ' ');
}

function playerTurn(board) {
  displayBoard(board);
  prompt('Your turn! Which square would you like to play? (1-9)');
  let square = rlSync.question();
  let empties = emptySquares(board);

  while (!(empties.includes(square))) {
    prompt('Please enter a valid empty square.');
    prompt('Your turn! Which square would you like to play?');
    square = rlSync.question();
  }

  board[square] = PLAYER_CHAR;
}

//TODO: better AI!

function computerTurn(board) {
  displayBoard(board);
  let empties = emptySquares(board);
  let square = empties[Math.floor(Math.random() * empties.length)];
  board[square] = COMPUTER_CHAR;
}

function isBoardFull(board) {
  return !(emptySquares(board).length);
}

function isWinningLine(line, char, board) {
  return line.every(square => board[String(square)] === char);
}

function didPlayerWin(board) {
  return WINNING_LINES.some(line => isWinningLine(line, PLAYER_CHAR, board));
}

function didComputerWin(board) {
  return WINNING_LINES.some(line => isWinningLine(line, COMPUTER_CHAR, board));
}

function someoneWon(board) {
  return didPlayerWin(board) || didComputerWin(board);
}

function getEndGameStatus(board) {
  if (didPlayerWin(board)) return 'You win!';
  if (didComputerWin(board)) return 'Computer wins!';
  return "It's a tie!";
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

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

/*
Main flow:
Display the initial empty 3x3 board.
Whoever's turn it is marks a square.
  If it's player's turn, prompt for player to select square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, empty board and go to #1
Goodbye!
*/

while (true) {
  let board = initializeBoard();

  while (true) {
    playerTurn(board);
    if (someoneWon(board) || isBoardFull(board)) break;

    computerTurn(board);
    if (someoneWon(board) || isBoardFull(board)) break;
  }

  displayBoard(board);
  prompt(getEndGameStatus(board));
  if (playAgain() === 'n') break;
  console.clear();
}