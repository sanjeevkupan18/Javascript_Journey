//for loop
let i;
for(i=1;i<=5;i++){

    console.log("i=",i);
}
console.log(i);

// for of loop
// used for strings
let str="ApnaCollege";
for(let i of str){
    console.log("i =",i);
}

//for in loop
// used for arrays
let student={
    Name : "sanjeev",
    branch : "cse" ,
    year : 2,
    cgpa : 9.17
};
for(let key in student ){
    console.log("Key = ",key, "Value = ",student[key]);
}

//while loop
let a=1;
while(a<=5){
    console.log(a);
    a++;
}

// Do while loop
let b=1;
do{
    console.log(b);
    b++;
} while(b<=5);

