class LuckyCookie {

    constructor() {
        this.quotes = {
            0: "Het is nooit te laat voor abortus",
            1: "Geld maakt niet gelukkig, maar ik huil liever in een Ferrari dan op een fiets.(Doe toch maar een redbull met wel goede 4 wielen)",
            2: "Geld is niet gelukkig, het maakt je gelukkig",
            3: "Het leven is geen krentebol, het betekend niet dat je een bolle krent moet zijn",
            4: "Ronald for president",
            5: "Sneller slapen is key",
            6: "Alcohol doet de werkende mind shut off",
            7: "Jaqueline mag ik nu alvast een voldoende op Javascript?",
            8: "Marcel mag ik nu alvast een voldoende op Javascript?",
            9: "Ik heb slaaptekort want ik slaap te kort - Boufje",
            10: "If you have five dollars and Chuck Norris has five dollars, Chuck Norris has more money then you!"
        }
    }

    GiveMeAnNiceQuote() {
        let randNum = Math.floor(Math.random() * 11);

        return this.quotes[randNum];
    }

}
