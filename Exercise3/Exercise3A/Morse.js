class Morse {

    constructor() {
        this.morseCode = {
            "A": ".-",
            "B": "-...",
            "C": "-.-.",
            "D": "-..",
            "E": ".",
            "F": "..-.",
            "G": "--.",
            "H": "....",
            "I": "..",
            "J": ".---",
            "K": "-.-",
            "L": ".-..",
            "M": "--",
            "N": "-.",
            "O": "---",
            "P": ".--.",
            "Q": "--.-",
            "R": ".-.",
            "S": "...",
            "T": "-",
            "U": "..-",
            "V": "...-",
            "W": ".--",
            "X": "-..-",
            "Y": "-.--",
            "Z": "--.."
        }
    }

    convertWordToMorse(string) {
        let charArray = string.toUpperCase().split("");
        let morseString = "";
        charArray.forEach(element => {
            morseString += this.morseCode[element] + " | ";
        });

        return morseString;
    }

}
