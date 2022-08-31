
let song = new Song("Baby shark");

let words = ["doo ", "Baby shark", "Mommy shark", "Daddy shark", "Grandma shark", "Grandpa shark", "Let's go hunt", "Run away", "Safe at last", "It's the end"]
const doo = words[0]

//Create amount of couplets
for (let coupletIndex = 0; coupletIndex < words.length - 1; coupletIndex++) {
    let couplet = new Couplet();
    let mainWord = words[coupletIndex + 1]
    // create sentences
    for (let sentenceIndex = 0; sentenceIndex <= 3; sentenceIndex++) {
        let sentenceText = "";
        //check with sentece it is for the change
        if (sentenceIndex < 3) {
            sentenceText += mainWord + ", "
            for (let DooIndex = 0; DooIndex <= 5; DooIndex++) {
                sentenceText += doo
            }
        } else {
            sentenceText += mainWord + "!"
        }
        // add couplet to song
        couplet.addSentence(new Sentence(sentenceText))
    }
    song.addCouplet(couplet)
}

document.addEventListener("DOMContentLoaded", function () {
    song.play();
});
