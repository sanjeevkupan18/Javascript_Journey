let text = document.querySelector(".text");
const button = document.getElementById("btn");
const ptag = document.getElementById("para")
const body = document.querySelector('body')

var curr = "dark";

button.addEventListener('click',function(e){
    if(curr=="dark"){
        body.style.backgroundColor="white";
        curr ="white"
        text.innerHTML="Din me Padhayi"
        text.style.color="black"
        ptag.style.color="green"
        button.style.border="2px solid black"
    }
    else{
        body.style.backgroundColor="#212121";
        curr ="dark"
        text.innerHTML = "Raat me Chudayi";
        text.style.color = "white";
        ptag.style.color = "green";
        button.style.border = "2px solid white";

    }

})
