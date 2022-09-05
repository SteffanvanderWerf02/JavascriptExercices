class Machine {


    constructor() {
        this.acceptedCoins = ["5", "10", "25"]
        this.cost = 50;
    }

    insertCoin(coin) {
        if (this.acceptedCoins.includes(coin)) {
            let transaction = this.pay(coin);
            if (transaction > 0) {
                document.getElementById("moneyOwed").textContent = transaction + " Cents";
            } else if (transaction == 0) {
                document.getElementById("moneyOwed").textContent = "U heeft alles betaald!";

            } else {
                document.getElementById("moneyOwed").textContent = "U krijgt " + Math.abs(transaction) + " cent terug";
            }
        } else {
            alert("U heeft niet de juiste munt er in gegooid u kunt alleen betalen met munten van 5 , 10 en 25")
        }
    }

    pay(amount) {
        return this.cost = this.cost - amount;
    }


}