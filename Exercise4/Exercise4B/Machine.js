class Machine {


    constructor() {
        this.acceptedCoins = ["5", "10", "25"]
        this.cost = 50;
    }

    insertCoin(coin) {
        console.log(this.acceptedCoins)
        console.log(coin);
        if (this.acceptedCoins.includes(coin)) {
            let transaction = this.pay(coin);

            document.getElementById("moneyOwed").textContent = transaction + " Cents";
        } else {
            alert("not right coin you can insert 5 , 10 , 25")
        }
    }

    pay(amount) {
        return this.cost - amount;
        console.log("payed")
    }


}