# Projects related to DOM

## Project 1

```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 solutions 

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weigth = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height} `;
  } else if (weigth === '' || weight > 18.6 || weigth < 0 || isNaN(weigth)) {
    results.innerHTML = `please give a valid weigth ${weigth} `;
  } else {
    const bmi = (weigth / ((height * height) / 10000)).toFixed(2);
    // show result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

```
## Project 2 Assignment Solutions Done

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weigth = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height} `;
  } else if (weigth === '' || weigth < 0 || isNaN(weigth)) {
    (results.innerHTML = `please give a valid weigth  `),
      `underweight ${weigth}`;
  } else {
    const bmi = (weigth / ((height * height) / 10000)).toFixed(2);
    // show result

    let bmicategory = '';
    if (bmi < 18.6) {
      bmicategory = 'underweight';
    } else if (bmi >= 18.6 || bmi <= 24.9) {
      bmicategory = 'normal range';
    } else if (bmi > 24.9) {
      bmicategory = 'overweight';
    }

    results.innerHTML = `<span>BMI: ${bmi}</span><br>
    <span>category: ${bmicategory}</span>`;
  }
});

```
## Project 3 solutions

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## Project 4 Solutions

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('plz enter a valid number');
  } else if (guess < 1) {
    alert('plz enter a  number grater then 1');
  } else if (guess > 100) {
    alert('plz enter a  number less then 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayguess(guess);
      displayMessage(`game over, random number was ${randomNumber}`);
      endGame();
    } else {
      displayguess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your Gussed it right `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is to low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is to high`);
  }
}

function displayguess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameVutton = document.querySelector('#newGame');
  newGameVutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    playGame = true;
    prevGuess = [];
    newGame = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```

### Project 5 Solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
  </div>`;
});

```

### Project 6 Solution 

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```