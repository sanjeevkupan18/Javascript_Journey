let computer={cpu:14};
let lenovo={
    screen:"HD",
    __proto__:computer, // old way
};

// console.log(`lenovo`,lenovo.__proto__);

let genericCar={tyre:4};
let tesla={
    driver:"AI"
};
Object.setPrototypeOf(tesla,genericCar); // new way
console.log(`tesla`,Object.getPrototypeOf(tesla));
