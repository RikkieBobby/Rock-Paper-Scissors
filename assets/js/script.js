const buttons = document.querySelectorAll("button")
const playerScore = document.getElementById("player-count")
const computerScore = document.getElementById("computer-count")
const playerChoiceBox = document.getElementById("player-choice")
const computerChoiceBox = document.getElementById("computer-choice")
const messages = document.getElementById("game-info")
let playerChoice

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceBox.innerText = playerChoice
}))



// function playerInput()

// function computerInput()

// function gameInfo()

// function incrementPlayerScore()

// function incrementComputerScore()