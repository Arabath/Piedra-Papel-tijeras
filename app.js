const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'piedra'
  }
  if (randomNumber === 2) {
    computerChoice = 'tijeras'
  }
  if (randomNumber === 3) {
    computerChoice = 'papel'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'EMPATE!'
  }
  if (computerChoice === 'piedra' && userChoice === "papel") {
    result = 'GANASTE!'
  }
  if (computerChoice === 'piedra' && userChoice === "tijeras") {
    result = 'PERDISTE!'
  }
  if (computerChoice === 'papel' && userChoice === "tijeras") {
    result = 'GANASTE!'
  }
  if (computerChoice === 'papel' && userChoice === "piedra") {
    result = 'PERDISTE!'
  }
  if (computerChoice === 'tijeras' && userChoice === "piedra") {
    result = 'GANASTE!'
  }
  if (computerChoice === 'tijeras' && userChoice === "papel") {
    result = 'PERDISTE!'
  }
  resultDisplay.innerHTML = result
}