const formulario = document.getElementById("form")
const valueInput = document.getElementById("ciudad")
const resultado = document.getElementById("resultado")
//Guarda informacion del nodo

//Escuchador de eventos 
//Cuando usas addEventlistener, es un escuchador de evento, toma una funcion y un objeto del evento accionado 
formulario.addEventListener("submit", (e)=> {
    e.preventDefault()
    console.log(e)
    if(valueInput.value.trim() ===""){
        console.log("No ingresaste ningun dato");
        return // el return esta aca para cortar la ejecucion del cod en este bloq. En este caso corta, el flujo del sumbit 
    } 
    clima(valueInput.value.trim())
    resultado.innerHTML= `
            <p id="clima"></p>
            <p id="temperatura"></p>
            <p id="descripcion"></p>`
    //Trim lo que hace es sacar los espacios que se dejan al princio y al final. No los espacios del medio
})

async function clima(ciudad) {
    const apiKey = "5401a3a9a6a113310e670508e0b7d188"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
//try y el cath manejan errores de red o escribir mal el codigo. 
//pero existe otro tipo error en la llamada que se puede generar
//que es si usuario escribio mal el nombre de ciudad
    try{
        const resp = await fetch(URL);
        const data = await resp.json();
        
        if(data.cod === "404"){
            resultado.innerHTML= `<p class"error">❌ Ciudad no encontrada. Verificá el nombre!</p>`
            return;
        }
        document.getElementById("clima").textContent = `Ciudad: ${data.name}`
        document.getElementById("temperatura").textContent = `Temperatura: ${data.main.temp}°C`
        document.getElementById("descripcion").textContent = `Descripcion: ${data.weather[0].description}`


    }
    catch(error){
        console.error("error en la consulta", error)
    }
}
