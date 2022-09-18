class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 
    }
    toString() {
        return '${this.make} ${this.model} ${this.year};'
    }
}

class Car  {
constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
}
}

class Motorcycle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return;
    }
}
class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle){
        if(!(this.vehicle instanceof Vehicle)){
            return 
        }
        if(this.vehicles.length >= this.capacity){

        }
        this.vehicle.push(newVehicle);
        return;
    }
}