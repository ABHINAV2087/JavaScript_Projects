let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);
const submit = document.querySelector('#submit-btn')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.remaining')
const lowOrHi = document.querySelector('#message')
const startOver = document.querySelector('#resultarea')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('enter a valid number')
    }
    else if (guess < 1 || guess > 100) {
        alert('enter a number between 1 and 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`game over , Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(' the guessed number is right')
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(' the guessed number is is too low ')
    }
    else if (guess > randomNumber) {
        displayMessage(' the guessed number is is too high ')
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `${message}`
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 0 
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<button id="newGame">Start a New Gamw</button>'
    startOver.appendChild(p)
    playGame = false
    newGame();
}