let scanner = new TextScanner();

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("go").addEventListener("click", () => {
        document.getElementById("textOutput").textContent = scanner.removeCharactersFromText(document.getElementById("text").value)
    })
})
