class vehicle{
    constructor(make,model){
        this.make=make
        this.model=model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class car extends vehicle{  // using extends we inherit its prop.
    drive(){
        return `${this.make}: this is an inheritence example`
    }
}

let mycar = new car("Toyota","Corolla")
console.log(mycar.drive())
console.log(mycar.start())
