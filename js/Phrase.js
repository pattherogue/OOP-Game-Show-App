/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

/* create Phrase class */
/* constructor that recieves phrase parameter and inititializes the following */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
}

/* class should have the following methods */

/* addPhraseToDisplay() */
/* adds letter placeholders to the display when game starts */
addPhraseToDisplay() {
    const phraseDisplayed = this.phrase;
    for (let i = 0; i < phraseDisplayed.length; i++) {
        const letter = phraseDisplayed[i];
        const phraseUl = document.querySelector('#phrase ul');
        const characterChosen = document.createElement('li');
        phraseUl.appendChild(letter);
        characterChosen.textContent = `${phraseUl}`;
        if (letter === '') {
            characterChosen.className = 'space';
        } else {
            characterChosen.className = `hide letter ${letter}`;
        }
    };
};





/* checkLetter */
/* check to see if the letter selected matches letter in phrase */

/* showMatchedLetter () */
/* reveals letter(s) on the board that matches player selection */