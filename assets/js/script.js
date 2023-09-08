document.addEventListener("DOMContentLoaded" function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            startGame(playerChoice)
        })
    }
})

function startGame()

function playerInput()

function computerInput()

function gameInfo()

function incrementPlayerScore()

function incrementComputerScore()