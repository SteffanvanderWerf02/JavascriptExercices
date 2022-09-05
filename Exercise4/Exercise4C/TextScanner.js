class TextScanner {

    constructor() {
        this.removedCharacters = {
            "A": "",
            "a": "",
            "E": "",
            "e": "",
            "I": "",
            "i": "",
            "O": "",
            "o": "",
            "U": "",
            "u": ""
        };
    }

    removeCharactersFromText(text) {
        text.split("").forEach((character) => {
            if (this.removedCharacters.hasOwnProperty(character)) {
                text = text.replace(character, this.removedCharacters[character]);
            }
        });

        return text;
    }
}