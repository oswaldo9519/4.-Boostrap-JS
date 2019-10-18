alert("Bienvenido!");

alert("Por Favor Completa Los Siguientes Datos Requeridos!");

var nombre = prompt("Cual es tu Nombre?");

var edad = prompt("Cual es tu Edad?");

function ejecucion() {
    if (nombre === "oswaldo") {
        document.getElementById("objeto").innerText = 'Bienvenido Oswaldo!' + ', tu Edad es ' + edad
        
    } else {

        var body = document.body;
        body.style.backgroundColor = 'black'
        body.innerHTML = '<h1 id="error">ERROR</h1>'
        var error = document.getElementById('error')
        error.style.color = 'red'
        error.style.textAlign = 'center'
        error.style.fontSize = "200px"
    }
}

ejecucion ();

