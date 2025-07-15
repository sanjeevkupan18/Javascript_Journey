// Asynchronous programming
// output three and four doesnot wait 4 sec to o/p hello
console.log("one");
console.log("two");

function hello(){
    console.log("hello");
}

setTimeout(hello,4000); // timeout 4sec =4000msec

console.log("three");
console.log("four");