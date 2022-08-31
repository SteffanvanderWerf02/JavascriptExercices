class Song{
    constructor(title){
        this.title = title;
        this.couplet = [];
    }  
    addCouplet(couplet){
        this.couplet.push(couplet);
    }
    getCouplet(){
        return this.couplet;
    }
    getTitle(){
        return this.title;
    }
    setTitle(title){
        this.title = title;
    }

}
