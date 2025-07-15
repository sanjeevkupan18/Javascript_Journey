function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("Success");
        },3000);
    });
}

// Promise chain

getData(1)
    .then((res)=>{
    return getData(2);
    })
    .then((res)=>{
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
    })
