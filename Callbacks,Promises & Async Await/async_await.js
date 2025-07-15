async function hello(){ //async function returns a promise compulsory
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api(); //1st
    await api(); //2nd
}