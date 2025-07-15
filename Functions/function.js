function sum(a,b){
    s=a+b;
    return s;
}

let val = sum(45,45);
console.log(val);

// forEach function

let arr=[1,34,67,43];
arr.forEach((val,idx)=>{
    console.log(val,idx);

});

// forEach function as a argument
let nums=[21,22,25];

let calcsquare=(nums)=>{
    console.log(num*num);

};

nums.forEach(calcsquare);

// reduce method
let arr1=[12,34,56,90];
const output =arr1.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);

// code to print the largest number
let arr2=[23,1,45,67];
const output1 = arr2.reduce((pre,curr) => {
    return pre>curr?pre:curr;
});

console.log(output1);