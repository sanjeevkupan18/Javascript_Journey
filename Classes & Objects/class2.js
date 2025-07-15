class ToyotaCar {
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("Stop");
    }

}

let fortuner = new ToyotaCar("fortuner",12);
let lexus = new ToyotaCar("lexus",10);
