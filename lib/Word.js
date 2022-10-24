const Letter = require("./Letter");

class Word{
    constructor(word){
        this.word = word;
        this.letters = word.split("").map(character => new Letter(character));
    }

    guessLetter(char){
        
        if(this.letters.char == char){
            return true;}
        return false;
    }

}

module.exports = Word;
