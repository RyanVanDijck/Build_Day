class WordHandler{
    constructor(word){
        this.word = word; 
        this.currentState = this.wordToDashes(word)
    }

    replaceAt(string ,index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }

    wordToDashes(word){
        var string = word
        string = string.toLowerCase(); 
        for(var i = 0; i < string.length; i++){
            if (string[parseInt(i)] !== ' '){
                string = this.replaceAt(string,i, '_')
            }
        }
        return string; 
    }
    guess(string){
        if (string.length === 1){
            if (this.word.indexOf(string) > -1){
                for (var i = 0; i < this.currentState.length; i++){
                    if (this.word[i] === string){
                        this.currentState = this.replaceAt(this.currentState,i,string)
                         
                    }
                }
                return true; 
            }
            else{
                return false;
            }
        }
        else{
            if (string === this.word){
                for (var j = 0; j < this.currentState.length; j++){
                    this.currentState = this.replaceAt(this.currentState,j,this.word[j])
                }
                return true; 
            }
            else{
                return false; 
            }
        }
    }
    
}

export default WordHandler