class Letter {
    constructor(char){
        this.char = char;
        this.visible = !/[a-z0-9]/i.test(char);
    }
    
    toString(){
        if(!this.visible){
            return "_";
        }
        return this.char;
    }

    guess(letter){
        if(this.char == letter){
            return true;
        }
        return false;
    }

    getSolution(){
        return this.char;
    }
}


module.exports = Letter;
