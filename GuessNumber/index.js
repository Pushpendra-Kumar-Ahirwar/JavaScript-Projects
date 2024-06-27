let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousgusess = [];
let numOfGusess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess)
        ValidateGusess(guess);
    });
}

function ValidateGusess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number');
    } else if (guess < 0) {
        alert('Please Enter Greater than 0');
    } else if (guess > 100) {
        alert('Please Enter Lower than 100');
    } else {
        previousgusess.push(guess);
        if (numOfGusess === 10) {
            displayGusess(guess);
            displayMessage(
                `You have Reached Limit Right Number is ${randomNumber}`);
            endGame();
        } else {
            displayGusess(guess);
            checkGusess(guess);
        }
    }
}

function checkGusess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You have Won the Game You can Restart`);
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Gusessed Number is too low`);
    } else if (guess > randomNumber) {
        displayMessage(`Gusessed Number is too high`);
    }
}

function displayGusess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numOfGusess++;
    remaining.innerHTML = `${11 - numOfGusess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start the Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()


}

function newGame() {
    const newGame = document.querySelector("#newGame")
    newGame.addEventListener('click', (e) => {
        e.preventDefault();
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousgusess = [];
        guessSlot.innerHTML = ''
        numOfGusess = 1;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        remaining.innerHTML = `${11-guess}`
        playGame = true

    })

}