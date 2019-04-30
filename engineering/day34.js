//Global variables.
var playerScore = 0;
var compScore = 0;

//Handles the click event when user selects a move. 
document.getElementById('giants').onclick=playgiants;
document.getElementById('wizards').onclick=playwizards;
document.getElementById('elves').onclick=playelves;
document.getElementById('reset').onclick=resetGame;


//Functions that govern what happens when user clicks appropriate icon 
function playgiants() {
  play('giants');
}

function playwizards() {
  play('wizards');
}

function playelves() {
  play('elves');
}

//Function that rndomizes the computer choice. All the options are stored in an array. 
function getCompChoice() {
  var choices = ['giants', 'wizards', 'elves'];
  var compChooses = choices[Math.floor(Math.random() * choices.length)];
  return compChooses;
}

//Runs the entire game after user selects a move.
function play(userPlay) {

 //Assigns a new variable to the function that randomizes the comp choice 
  var compChoice = getCompChoice();
  
  //Outputs the user and comp choices after user selects a move
  document.getElementById('playerResult').innerHTML = 'You played ' + userPlay + '.';
  document.getElementById('compResult').innerHTML = 'The computer played ' +  compChoice + '.';
   
  //Three sets of nested if-else statements for when user picks giants, wizards, or elves
  if (userPlay == 'giants') {
    if (compChoice == 'giants') {
    document.getElementById('winner').innerHTML = "It's a tie!"; 
    }
    
    else if (compChoice == 'wizards') {
      document.getElementById('winner').innerHTML = "Computer wins!"; 
      compScore++;
    }
    
    else if (compChoice == 'elves') {
      document.getElementById('winner').innerHTML = "You win!"; 
      playerScore++;
    }
    
  }
  
  else if (userPlay == 'wizards') {
    if (compChoice == 'wizards') {
    document.getElementById('winner').innerHTML = "It's a tie!";   
    }
    
    else if (compChoice == 'giants') {
      document.getElementById('winner').innerHTML = "You win!"; 
      playerScore++;
    }
    
    else if (compChoice == 'elves') {
      document.getElementById('winner').innerHTML = "Computer wins!"; 
      compScore++;
    }
  }
  
  else if (userPlay == 'elves') {
    if (compChoice == 'elves') { 
    document.getElementById('winner').innerHTML = "It's a tie!"; 
    }
    
    else if (compChoice == 'giants') {
      document.getElementById('winner').innerHTML = "Computer wins!"; 
      compScore++;
    }
    
    else if (compChoice == 'wizards') {
      document.getElementById('winner').innerHTML = "You win!"; 
      playerScore++;
    }
  }  
  
//Links the user and comp points in the HTML table to the global variables. This comes after the if-else statements, because we want the score to update only after the moves have been selected. 
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;  
  
};

//Reset game when player clicks 'reset' button
function resetGame () {
 playerScore = 0;
 compScore = 0;
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;  
};