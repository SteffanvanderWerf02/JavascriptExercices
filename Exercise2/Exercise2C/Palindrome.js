class Palindrome {
    constructor(word) {
        this.word = word;
    }

    setWord(word) {
        this.word = word
    }

    getWord() {
        return this.word;
    }

    isPalindrome() {
        let reverseWord = this.getWord().split("").reverse().join("");
        if (this.word === reverseWord) {
            document.getElementById("Palindrome").textContent = true;
        }
        else {
            document.getElementById("Palindrome").textContent = false;
        }
    }
}
