const colors = document.querySelectorAll('.color');
const body=document.querySelector('.container');

colors.forEach(function(color){
    color.addEventListener("click", function (e) {
      
      if (e.target.id === "red") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "black") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "blue") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "green") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "pink") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "purple") {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === "yellow") {
        body.style.backgroundColor = e.target.id;
      }
    });
})