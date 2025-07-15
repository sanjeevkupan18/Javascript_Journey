const getPromise=()=>{
    return new Promise((resolve,reject) =>{
        console.log("I am a promise");
        //resolve("success");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
});

promise.catch((err)=>{
    console.log("rejected",err);
});





// function getData(dataId,getNextData){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data ",dataId);
//             resolve("Success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }