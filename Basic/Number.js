console.log(Math.random()) // gives values in between 0 and 1
console.log((Math.random()*10)+1)  // to get value in 1 to 10
console.log(Math.floor(Math.random()*10)+1) // to get value without decimal places

let min = 10
let max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)