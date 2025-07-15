const student={
    fullName:"sanjeev kumar",
    marks:94.8,
    printMarks:function(){
        console.log("marks =",this.marks);// this.marks means student marks and this is a keyword
    },

};

const employee={
    calcTax(){    //prototype method 
        console.log("tax rate is 10%");
    },
};

const karan ={
    salary:30000,
    calcTax(){
        console.log("tax rate is 20%"); // object's method got preference over prototype methods
    },
};

karan.__proto__ = employee; //karan info got inherited with employee class