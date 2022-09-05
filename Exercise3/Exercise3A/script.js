let cookie = new LuckyCookie();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("quote").textContent = cookie.GiveMeAnNiceQuote();
    //on click
    document.getElementById("nowPlease").addEventListener("click", function () {
        document.getElementById("quote").textContent = cookie.GiveMeAnNiceQuote();
    })
})
