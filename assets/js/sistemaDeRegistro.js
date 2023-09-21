/*
Sistema para registrar pacientes y mostrarlos en tarjetas

//Primer paso: tener todos los elementos de nuestro HTML y guardarlos en variables de JS

//Inputs separados, boton, textoConfirmacion
*/

let nombrePaciente = document.getElementById("nombrePaciente");//input nombre
let edadPaciente = document.getElementById("edadPaciente");//input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente");//boton
let textoConfirmacion = document.getElementById("mensajeConfirmacion");//container mensaje confirmacion


//Array para almacenar a mis pacientes
let pacientes = [];

//funcion para registrar un nuevo paciente
function registrarPaciente() {

    //Obtengo el atributo Value de mi input
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;

    let paciente = {
        nombre: valorNombrePaciente, edad: valorEdadPaciente, citas: []
    };

    //cuando tenga la informacion del paciente...
    pacientes.push(paciente);//array.push(valorAAgregar)

    //1 muestra infor en consola
    mostrarInfoPaciente(paciente);//invoacion de otra funcion para mostrar la info en consola

    //2 muestro el mensaje de confirmacion(textContent)
    mensajeConfirmacion.textContent = "Paciente registrado correctamente";

    //3 genera la tarjeta
    generarTarjetaPaciente(paciente);//Invocacion de una funcion para generar tarjetas

    return paciente;
}//termina funcion registrarPaciente


// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");

    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
}//Aqui termina funcion mostrarInfoPaciente



//funcion para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente) {

    //crear
    let tarjetaDiv = document.createElement("div");//aqui crea un container para mi tarjeta
    tarjetaDiv.className = "col-sm-12 col-md-6 col-lg-4";//aqui le ewspecifico que es una columna


    //Crear contenido de la tarjeta
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>`

    //poner
    contenedorTarjetas.appendChild(tarjetaDiv);

}

botonRegistrarPaciente.addEventListener("click", registrarPaciente);
