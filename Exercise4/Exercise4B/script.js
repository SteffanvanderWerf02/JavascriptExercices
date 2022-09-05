let machine = new Machine();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("pay").addEventListener("click", () => {
        machine.insertCoin(document.getElementById("payment").value)
    })
})
