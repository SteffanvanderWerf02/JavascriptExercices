let Fibo = new Fibonacci(10);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("reeks").textContent = Fibo.start();
})
