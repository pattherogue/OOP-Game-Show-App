/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* create Phrase class */
/* constructor that recieves phrase parameter and inititializes the following */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


/* class should have the following methods */

/* addPhraseToDisplay() */
/* adds letter placeholders to the display when game starts */
    addPhraseToDisplay() {
        const phraseDisplay = this.phrase;
        for (let i = 0; i < phraseDisplay.length; i++) {
            const letterPlaceHolder = phraseDisplay[i];
            const phraseUl = document.querySelector('#phrase ul');
            const characterElement = document.createElement('li');
            phraseUl.appendChild(letterPlaceHolder);
            characterElement.textContent = `${phraseUl}`;
            if (letterPlaceHolder === '') {
                /* space CSS for spaces */
                characterElement.className = 'space';
            } else {
                /* letter CSS for letters */
                characterElement.className = `hide letter ${letterPlaceHolder}`;
            }
        };
    };

/* checkLetter */
/* check to see if the letter selected matches letter in phrase */
    checkLetter(letter) {
        return.this.phrase.includes(letter);
    };




/* showMatchedLetter () */
/* reveals letter(s) on the board that matches player selection */

}