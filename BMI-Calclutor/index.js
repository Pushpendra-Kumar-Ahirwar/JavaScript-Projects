const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');
    if (height === '' || isNaN(height) || height < 0) {
        results.innerHTML = `Plese Enter a valid hieght ${height}`;
    } else if (weight === '' || isNaN(weight) || weight < 0) {
        results.innerHTML = `Plese Enter a value valid wieght ${weight}`;
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = bmi;
        if (bmi < 18.6) {
            message.innerHTML = 'You are underwieght';
        } else if (bmi <= 24.9) {
            message.innerHTML = 'You are Normal Range';
        } else {
            message.innerHTML = 'You are Overweiegt';
        }
        // message.innerHTML="Pushpedra"
    }
});