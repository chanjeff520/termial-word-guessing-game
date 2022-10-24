const Letter = require("./Letter");

class Word extends Letter{
    constructor(char, word){
        super(char);
        this.word = word;
        this.letters = () => {
            let arrLetter = []
            for(let i=0; this.word.length; i++){
            arrLetter[i] = new Letter[this.word[i]];
        }
            return arrLetter;
        };
    }
    
    // makeLetters(){
    //     let arrLetter = []
    //     for(let i=0; this.word.length; i++){
    //         arrLetter[i] = new Letter[this.word[i]];
    //     }
    //     return arrLetter;
    // }


}

module.exports = Word;
