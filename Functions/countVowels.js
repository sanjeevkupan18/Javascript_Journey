// function to count vowels
function countvowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i" || char ==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);
}

countvowels("apnacollege");

// arrow function

const countvowels =(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i" || char ==="o" || char==="u"){
            count++;
        }
    }
    console.log(count);

}