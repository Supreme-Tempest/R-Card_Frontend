const body = document.getElementById("body");
const boton = document.getElementById("onload");


boton.addEventListener("click", function(event){
    event.preventDefault();
    onload();})

function onload(){
    fetch('/user', {
        method: 'GET'
    }).then(res => res.json())
    .then(data => {
        let nuevo = `<h1> ${data} </h1>`;
        body.innerHTML = nuevo;}
        
    )};
