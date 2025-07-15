class Bird{
    fly(){
        return `Birds fly..`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly.`
    }
}

let bird= new Bird()
let penguin=new Penguin()
console.log(bird.fly())
console.log(penguin.fly())