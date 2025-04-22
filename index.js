const formulario = document.getElementById("form")
const valueInput = document.getElementById("ciudad")
//Guarda informacion del nodo

//Escuchador de eventos 
//Cuando usas addEventlistener, es un escuchador de evento, 
formulario.addEventListener("submit", (e)=> {
    e.preventDefault()
    console.log(e)
    console.log("Valor ingresado:", valueInput.value.trim());
})
