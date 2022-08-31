class Couplet {
    constructor() {
       this.sentences = []
    }

    addSentence(Sentence){
        this.sentences.push(Sentence)
    }

    getSentence()
    {
        return this.sentences
    }
}