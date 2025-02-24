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