function car(make,model){
    this.make=make
    this.model=model
}

let myCar= new car("Toyota","Camry");
// console.log(myCar);

function tea(type){
    this.type=type
    this.describe= function(){
        return `this is a cup of ${this.type}`;
    }
}

let lemonTea = new tea("lemonTea");
// console.log(`lemon`,lemonTea.describe());


function Animal(species){
    this.species=species;
}

Animal.prototype.sound=function(){
    return ` ${this.species} makes a sound`;
}

let dog= new Animal("Dog");
console.log(dog.sound());