const submitGuessBtn = document.getElementById('submit-guess');
const result = document.getElementById('result');
const answer = document.getElementById('answer');

const answerNumber = Math.floor(Math.random() * 100) + 1;
console.log(`The answer is ${answerNumber}`);

submitGuessBtn.addEventListener('click', () => {
    const guess = document.getElementById('guess').value;
    if (guess == '') {
        result.innerHTML = 'Please enter a guess.';
        result.style.display = 'block';
        return;
    }
    const guessNumber = parseInt(guess);
    if (guessNumber < 1 || guessNumber > 100) {
        result.innerHTML = 'Please enter a number between 1 and 100.';
        result.style.display = 'block';
        return;
    }
    if (guessNumber == answerNumber) {
        result.innerHTML = 'Congratulation!.';
        result.style.display = 'block';
        answer.innerHTML = `The answer is ${answerNumber}.`;
        answer.style.display = 'block';
        submitGuessBtn.disabled = true;
    } else if (guessNumber < answerNumber) {
        result.innerHTML = 'Your guess was too low. Guess again.';
        result.style.display = 'block';
    } else {
        result.innerHTML = 'Your guess was too high. Guess again.';
        result.style.display = 'block';
    }
});
