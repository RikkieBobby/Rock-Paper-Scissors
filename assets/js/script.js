const buttons = document.querySelectorAll("button")
const playerChoiceBox = document.getElementById("player-choice")
const computerChoiceBox = document.getElementById("computer-choice")
const messages = document.getElementById("game-info")
let playerChoice
let computerChoice
let result
let playerScore
let computerScore

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceBox.innerText = playerChoice
    computerInput()
    generateResult()
}))



// function playerInput()

function computerInput() {

    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }

    computerChoiceBox.innerHTML = computerChoice

}

function generateResult() {
    if (computerChoice === playerChoice) {
        result = "It's a draw"
    }
    if (computerChoice === "rock" && playerChoice === "paper") {
        result = "The Player Wins!"
        incrementPlayerScore()
    }
    if (computerChoice === "rock" && playerChoice === "scissors") {
        result = "The Computer Wins!"
        incrementComputerScore()
    }
    if (computerChoice === "scissors" && playerChoice === "rock") {
        result = "The Player Wins!"
        incrementPlayerScore()
    }
    if (computerChoice === "scissors" && playerChoice === "paper") {
        result = "The Computer Wins!"
        incrementComputerScore()
    }
    if (computerChoice === "paper" && playerChoice === "scissors") {
        result = "The Player Wins!"
        incrementPlayerScore()
    }
    if (computerChoice === "paper" && playerChoice === "rock") {
        result = "The Computer Wins!"
        incrementComputerScore()
    }

    messages.innerHTML = result


}

function incrementPlayerScore() {
    playerScore = parseInt(document.getElementById("player-count").innerText)
    document.getElementById("player-count").innerText = ++playerScore
}

function incrementComputerScore() {
    computerScore = parseInt(document.getElementById("computer-count").innerText)
    document.getElementById("computer-count").innerText = ++computerScore
}