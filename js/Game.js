/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

/* create the 'game' class */
class Game {
    constructor() {
        /* track the number of missed guesses */
        this.missed = 0;
        /* array of five 'Phrase' objects */
        this.phrase = this.storedPhrase();
        /* 'Phrase' currently in play */
        this.activePhrase = null;
        this.startScreenOverlay = document.getElementById('overlay');
    };

    storedPhrase() {
        let storedArray = [
            newPhrase('Buy low sell high');
            newPhrase('I am waiting for the pullback');
            newPhrase('The trend is your friend');
            newPhrase('When the tide goes out you see who is swimming naked');
            newPhrase('Investing should be more like watching paint dry or watching grass grow');
        ]

        return storedArray;
    };






    


}
