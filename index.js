document.getElementById('toss-button').addEventListener('click', function () {
    const resultDiv = document.getElementById('result');
    const coinDiv = document.getElementById('coin');

    coinDiv.classList.add('flipping');

    setTimeout(() => {
        const tossResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
        resultDiv.textContent = tossResult;

        coinDiv.classList.remove('flipping');
        if (tossResult === 'Heads') {
            coinDiv.classList.remove('tails');
            coinDiv.classList.add('heads');
            coinDiv.textContent = 'Heads';
        } else {
            coinDiv.classList.remove('heads');
            coinDiv.classList.add('tails');
            coinDiv.textContent = 'Tails';
        }
    }, 2000);
});
