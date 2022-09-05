class Fibonacci {
    constructor(limit) {
        this.limit = limit;
    }

    start() {
        let num1 = 0;
        let num2 = 1;
        let num3;

        let reeks = []

        //push first 2 numbers
        reeks.push(num1, num2);
        for (let index = 2; index < this.limit; index++) {
            //do the reeks
            num3 = num1 + num2
            num1 = num2;
            num2 = num3;

            //push to array 
            reeks.push(num3);
        }
        return reeks
    }
}