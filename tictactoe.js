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
  
  var changePlayers = function() {
    if (player === 'X') {
      player = 'O';
    } else {
      player = 'X';
    }
  }

  var checkForWin = function(currPlayer) {
    var checker = false;
    var help = function(arg1, arg2, arg3) {
      if (arg1 === currPlayer && arg2 === currPlayer && arg3 === currPlayer) {
        return true
      } else {
        return false
      }
    }

    if (help(storage[1], storage[2], storage[3]) || help(storage[4], storage[5], storage[6]) || help(storage[7], storage[8], storage[9]) 
    || help(storage[1], storage[4], storage[7]) || help(storage[2], storage[5], storage[8]) || help(storage[3], storage[6], storage[9]) 
    || help(storage[1], storage[5], storage[9]) || help(storage[7], storage[5], storage[3])) {
      return true
    } else {
      return false
    }
    
  }

  var promptMove = function() {
    rl.question('Player ' + player + ', Please enter the number to select a space: ', (answer) => {
      if (answer >= 1 && answer <= 9) {
        if (storage[answer] === 'X' || storage[answer] === 'O') {
          console.log("This space has already been taken, please try again\n")
          promptMove()
        } else {
        storage[answer] = player;
        if (checkForWin(player)) {
          rl.close();
          console.log(player, "Wins!!!!!!!!!!!")
          return;
        }
        displayBoard();
        changePlayers();
        promptMove()
        }
      } else {
        console.log("\nPlease enter a number from 1 - 9")
        promptMove()
      }

    });
  }


      displayBoard();
      promptMove();
}

game();
