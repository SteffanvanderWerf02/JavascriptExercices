class Song{
    constructor(title){
        this.title = title;
        this.couplets = [];
    }  
    addCouplet(couplet){
        this.couplets.push(couplet);
    }
    getCouplets(){
        return this.couplets;
    }
    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }

    play() {
        this.couplets.forEach(couplet => {
            couplet.getSentence().forEach(sentence => {
                let p = document.createElement("p");
                p.textContent = sentence.getSentence();
                console.log(sentence.getSentence());
                document.getElementById("songText").append(p)
            })
        });


    }

}
