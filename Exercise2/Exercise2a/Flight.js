class flight {
    constructor(name, departure, arrival, departureTime, arrivalTime, plane) {
        this.name = name;
        this.departure = departure;
        this.arrival = arrival;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.plane = plane;
    }

    getName() { 
        return this.name;
    }

    setName(name) { 
        this.name = name;
    }

    setDeparture(departure) {  
        this.departure = departure;
    }

    getDeparture() {
        return this.departure;
    }

    setArrival(arrival) {   
        this.arrival = arrival; 
    }

    getArrival() {
        return this.arrival;
    }

    setArrivalTime(arrivalTime) {   
        this.arrivalTime = arrivalTime;
    }

    getDepartureTime() {
        return this.departureTime;
    }

    setArrivalTime(arrivalTime) {   
        this.arrivalTime = arrivalTime;
    }

    getArrivalTime() {
        return this.arrivalTime;
    }

    getPlane() {
        return this.plane;
    }

    setPlane(plane) {
        this.plane = plane;
    }   
}