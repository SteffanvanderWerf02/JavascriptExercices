class Airport{
 
    constructor(name,flights,planes){
        this.name = name
        this.flights = flights = [];
        this.planes = planes
    }

    addFlight(flight){  
        //adds a flight to the flights array
        this.flights.push(flight)
    }

    removeFlight(flight){   
        //removes a flight from the flights array
        this.flights.splice(this.flights.indexOf(flight),1)
    }

    addPlane(plane){   
        //adds a plane to the planes array
        this.planes.push(plane)
    }

    removePlane(plane){ 
        //removes a plane from the planes array
        this.planes.splice(this.planes.indexOf(plane),1)
    }

    getPlanes(){
        //returns the planes array
        return this.planes
    }

    getFlights(){   
        //returns the flights array
        return this.flights
    }

    setName(name){
        //sets the name of the airport
        this.name = name
    }
    
    getName(){  
        //returns the name of the airport
        return this.name
    }

    getPlaneCount(){   
        //returns the number of planes in the airport
        return this.planes.length
    }   

    getFlightCount(){       
        //returns the number of flights in the airport
        return this.flights.length
    }

    
}