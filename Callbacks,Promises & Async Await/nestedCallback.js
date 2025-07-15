function getData(DataId,getNextData){
    // 2 sec
    setTimeout(()=>{
        console.log("data" ,DataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}

//Callback Hell

getData(1, ()=>{
    console.log("getting data 2...");
    getData(2, ()=>{
        console.log("getting data 3...");
        getData(3, ()=>{
            console.log("getting data 4...");
            getData(4);
        });
    });
});