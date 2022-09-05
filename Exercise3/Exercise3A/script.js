let string = new Morse();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Morse").textContent = string.convertWordToMorse("Sylvana");

})
