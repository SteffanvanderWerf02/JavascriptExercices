class Plane {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.passengers = [];
    }

    addPassenger(passenger) {
        this.passengers.push(passenger);
    }

    removePassenger(passenger) {
        const index = this.passengers.indexOf(passenger);
        if (index === -1) {
            return;
        } 
        this.passengers.splice(index, 1);
    }

    getPassengers() {
        return this.passengers;
    }

    getPassengerCount() {
        return this.passengers.length;
    }

    getCapacity() {
        return this.capacity;
    }

    setCapacity(capacity) {
        this.capacity = capacity;
    }

    getName() { 
        return this.name;
    }

    setName(name) { 
        this.name = name;
    }

}