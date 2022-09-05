let machine = new Machine();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("moneyOwed").textContent = machine.cost + " Cent";

    // payment method
    document.getElementById("pay").addEventListener("click", () => {
        machine.insertCoin(document.getElementById("payment").value)
    })
})
