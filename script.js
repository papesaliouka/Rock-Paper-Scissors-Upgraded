
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// reset All selected Icons
function resetSelectedIcons(){
  allGameIcons.forEach(icon=> {
    icon.classList.remove('selected')
  })
}

// Reset Score & playerChoice/computer choice
function resetAll(){
  resetSelectedIcons()
  playerScoreNumber =0;
  computerScoreNumber=0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  resultText.textContent ='';
  playerChoiceEl.textContent=''
  computerChoiceEl.textContent='';
  resetSelectedIcons();
}

// Call functions to process turn
function checkResult(hoice){
  resetSelectedIcons();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(hoice)
}

// Random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber<0.2){
    computerChoice = 'rock'
  }else if(computerChoiceNumber<=0.4){
    computerChoice = 'paper'
  }else if(computerChoiceNumber<= 0.6){
    computerChoice = 'scissors'
  }else if(computerChoiceNumber<=0.8){
    computerChoice = 'lizard'
  }else{
    computerChoice = 'spock'
  }
}

// add 'selected' styling & computer choice
function displayComputerChoice(){
  switch(computerChoice){
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break
  }
}

// Passing player selection value and styling icons
function select(hoice){
  checkResult(hoice)
  // Add 'selected' styling & playerChoice
  switch(hoice){
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break
  }
}

// update score
function updateScore(hoice){
  console.log(hoice, computerChoice);
  if(hoice=== computerChoice){
    resultText.textContent = "It's a Tie"
  }else{
    const choice = choices[hoice]
    console.log(choice.defeats.indexOf(computerChoice));
    if(choice.defeats.indexOf(computerChoice)>-1){
      resultText.textContent="You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber
    }else{
      resultText.textContent= 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent= computerScoreNumber
    }
  }
}

// load Game
resetAll()