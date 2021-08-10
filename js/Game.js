/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* create the 'game' class */
class Game {
    constructor() {
        /* track the number of missed guesses */
        this.missed = 0;
        /* array of five 'Phrase' objects */
        this.phrase = this.createPhrase();
        /* 'Phrase' currently in play */
        this.activePhrase = null;
        this.startScreenOverlay = document.getElementById('overlay');
    }
}