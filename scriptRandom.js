document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generateBtn');
    const displayDiv = document.getElementById('randomNumberDisplay');

    button.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 101); // 0 to 100 inclusive
        displayDiv.textContent = `Random Number: ${randomNumber}`;
    });
});
