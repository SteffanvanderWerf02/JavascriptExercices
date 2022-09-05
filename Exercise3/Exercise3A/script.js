let cookie = new LuckyCookie();

// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("quote").textContent = cookie.GiveMeAnNiceQuote();
// })
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nowPlease").addEventListener("click", function () {
        document.getElementById("quote").textContent = cookie.GiveMeAnNiceQuote();
    })
})
