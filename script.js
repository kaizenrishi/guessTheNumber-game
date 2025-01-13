let randomValue = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("number should be bigger than 1");
  } else if (guess > 100) {
    alert("number should be smaller than 100");
  } else {
    previousGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage("game over ! random number was " + randomValue);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomValue) {
    displayMessage("you guessed it right");
    endGame();
  } else if (guess < randomValue) {
    displayMessage("number is very low");
  } else if (guess > randomValue) {
    displayMessage("number is very high");
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} , `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = '<h3 id="newGame" > Start New Game </h3> '
  startOver.appendChild(p)
  playGame = false
  newGame()
}

function newGame() {
  const startAgain = document.querySelector("#newGame")
  startAgain.addEventListener("click",()=>{
    randomValue = parseInt(Math.floor(Math.random() * 100 + 1))
    previousGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
     remaining.innerHTML = `${11-numGuess}`
     userInput.removeAttribute
     startOver.removeChild(p)
     playGame = true
  })
}

// const submit =
