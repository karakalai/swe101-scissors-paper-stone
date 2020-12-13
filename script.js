// FUNCTION 1: generate a random number to represent scissors, paper or stone.
var genRandomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomIntegar = Math.floor(randomDecimal);
  var randomNumber = randomIntegar + 1;
  return randomNumber;
};

// FUNCTION 2: generate a random gesture to represent the computer gesture.
var genRandomGesture = function () {
  var computerGesture = genRandomNumber();

  if (computerGesture == 1) {
    computerGesture = 'scissors';
  }
  if (computerGesture == 2) {
    computerGesture = 'paper';
  }
  if (computerGesture == 3) {
    computerGesture = 'stone';
  }
  return computerGesture;
};

// create game count.
var gameCount = 0;
// create win record.
var userWin = 0;
var computerWin = 0;
// create lose record.
var userLose = 0;
var computerLose = 0;
// create number of draw record.
var numberOfDraw = 0;

var main = function (input) {
  var userName = input;
  var myOutputValue = 'Welcome ' + userName + '!! <br><br> Type in "scissors", "paper" or "stone" to play. <br><br> Are we ready?';

  //   myOutputValue = 'Oooopppssss! <br><br> please only type in "scissors", "paper" or "stone" to play! <br><br> Please try again!';
  // }

  var computerGesture = genRandomGesture();

  // assign a number to each scissors, paper and stone.
  if (input == 'scissors') {
    var userGesture = 1;
    userGesture = 'scissors';
  }
  if (input == 'paper') {
    var userGesture = 2;
    userGesture = 'paper';
  }
  if (input == 'stone') {
    var userGesture = 3;
    userGesture = 'stone';
  }
  console.log('user gesture:' + userGesture);
  console.log('computer gesture:' + computerGesture);

  // set a draw condition
  if (userGesture == computerGesture) {
    gameCount = gameCount + 1;
    numberOfDraw = numberOfDraw + 1;
    myOutputValue = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> Its a draw! <br> <br> We played ' + gameCount + ' turns, and there have been ' + numberOfDraw + ' draws. <br> That is ' + ((100 * numberOfDraw) / gameCount) + '%.';
  }
  // set winning conditions
  if ((userGesture == 'scissors' && computerGesture == 'paper')
    || (userGesture == 'paper' && computerGesture == 'stone')
    || (userGesture == 'stone' && computerGesture == 'scissors')) {
    gameCount = gameCount + 1;
    userWin = userWin + 1;
    myOutputValue = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You won! <br> <br> We played ' + gameCount + ' turns, and you have been winning ' + userWin + ' turns. <br> That is ' + ((100 * userWin) / gameCount) + '%. Keep it up!';
  }
  // set losing conditions
  if ((userGesture == 'scissors' && computerGesture == 'stone')
    || (userGesture == 'paper' && computerGesture == 'scissors')
    || (userGesture == 'stone' && computerGesture == 'paper')) {
    gameCount = gameCount + 1;
    userLose = userLose + 1;
    myOutputValue = 'The computer chose ' + computerGesture + '.<br> You chose ' + input + '. <br> <br> You lost! <br> <br> We played ' + gameCount + ' turns, and you have been losing ' + userLose + ' turns. <br> That is ' + ((100 * userLose) / gameCount) + '%. Try again!';
  }

  return myOutputValue;
};
