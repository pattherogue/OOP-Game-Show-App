/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = '';
const startButton = document.getElementById('btn__reset');
/* click event listener "Start Game" */
startButton.addEventListener('click', () => {
    /* creates new Game Object */
    game = new Game;
    /* calls startGame() method */
    game.startGame();
});

/* click event listener to onscreen keyboard buttons */
const qwerty = document.getElementById('qwerty');
qwerty.addEventListener('click', (e) => {
    /* clicking button calls handleInteraction() method */
    if (e.target.tagName === 'BUTTON') {
        /* no clicking on space between and around onscreen keyboard buttons */ 
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keydown', (e) => {
    let selectedKey = e.key;
    let keys = document.getElementsByClassName('key');
    for (let i = 0; i < keys.length; i++) {
        if (selectedKey === keys[i].textContext && keys[i].disabled !== true) {
            game.handleInteraction(keys[i]);
        }
    } 
});