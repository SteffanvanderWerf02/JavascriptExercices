document.addEventListener("DOMContentLoaded", function () {
    let passenger = new Passenger("John", "London");
    let plane = new Plane("Boeing 747", 100, 1000);
    let airport = new Airport("Heathrow", [], []);
    let flight = new Flight("BA123", "London", "New York", "10:00", "12:00", plane);
    airport.addPlane(plane);
    plane.addPassenger(passenger);
    airport.addFlight(flight);

    document.getElementById("passengerName").innerHTML = passenger.getName();
    document.getElementById("passengerDestination").innerHTML = passenger.getDestination();
    document.getElementById("planeName").innerHTML = plane.getName();
    document.getElementById("planeCapacity").innerHTML = plane.getCapacity();
    document.getElementById("planePassengerCount").innerHTML = plane.getPassengerCount();
    document.getElementById("airportName").innerHTML = airport.getName();
    document.getElementById("airportPlaneCount").innerHTML = airport.getPlaneCount();
    document.getElementById("airportFlightCount").innerHTML = airport.getFlightCount();
    document.getElementById("flightDestination").innerHTML = flight.getDeparture();
    document.getElementById("flightArrival").innerHTML = flight.getArrival();
    document.getElementById("flightDepartureTime").innerHTML = flight.getDepartureTime();
    document.getElementById("flightArrivalTime").innerHTML = flight.getArrivalTime();
    document.getElementById("flightPlane").innerHTML = flight.getPlane().getName();
});

