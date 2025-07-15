class coffeeMachine{
    start(){
        return `starting the machine....`;
    }

    brewCoffee(){
        return `brew coffee`;
    }

    pressStartButton(){
        let msg1=this.start()
        let msg2=this.brewCoffee()
        return `${msg1} + ${msg2}`;
    }
}

let coffee= new coffeeMachine()
console.log(coffee.pressStartButton())