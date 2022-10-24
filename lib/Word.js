const Letter = require("./Letter");

class Word{
    constructor(word){
        this.word = word;
        this.letters = word.split("").map(character => new Letter(character));
    }

    guessLetter(letter){
        return !this.letters.filter(letterObj => letterObj.guess(letter)).letter > 0;
    }

    guessedCorrectly(){
        return !this.letters.filter(letterObj => letterObj.guess(visible).length) === this.letter.length;
    }

    toString() {
        return this.letters.join("");
    }

    getSolution() {
        return this.word;
    }

}

module.exports = Word;
