/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const startButton = document.getElementsById('btn__reset');

startButton.addEventListener('click', () => {
    game = new Game;
    game.startGame();
});

document.getElementById('property').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});