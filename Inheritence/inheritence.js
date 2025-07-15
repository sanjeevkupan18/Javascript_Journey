class person {
    constructor(name){ 
        this.species="homo sapiens";
        this.name=name;
    }

    eat(){
        console.log("Eat");
    }
}

class Engineer extends person{
    constructor(name){ // to give name to child constructor
        super(name); // to invoke parent class constructor
        // to give name to parent constructor
    }
    work(){
        super.eat(); // to access eat method before work method
        console.log("Solve problems build something");
    }
}
 

let engObj = new Engineer("Sanjeev");
