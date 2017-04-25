const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var game = function() {
  var player = 'X'
  var storage = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  var displayBoard = function() {
    console.log('')
    console.log(storage[1] + ' ' + storage[2] + ' ' + storage[3])
    console.log(storage[4] + ' ' + storage[5] + ' ' + storage[6])
    console.log(storage[7] + ' ' + storage[8] + ' ' + storage[9])
    console.log('')
  }
  
  var endGame = function() {
      rl.close();
  }

  var promptMove = function() {
    rl.question('Player ' + player + ', Please enter the number to select a space: ', (answer) => {
      if (answer >= 1 && answer <= 9) {
        console.log("Valid Move") 
        storage[answer] = player;
        displayBoard();
        promptMove()
      } else {
        console.log("\nPlease enter a number from 1 - 9")
      }

    });
  }


      displayBoard();
      promptMove();
}

game();
