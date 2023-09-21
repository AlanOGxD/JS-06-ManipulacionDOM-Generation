/*

DOM (Document Object Model / Modelo de Objetos de Documento)

Cuando creamos paginas que usan HTML + CSS estamos creando paginas estaticas (porque no tienen interactividad), cuando agregamos JS, 
nuestras paginas se convierten en sitios dinamicos (tienen interactividad)

El navegador lee el documento html de ariba a abajo, de izquierda a derecha (renderizacion)

Para que una pagina se renderiza correctamewnte, se toma en cuenta el contenido, el peso de las imagenes, la conexion a internet, etc.


Cuando el documento se drenderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de estas etiquetas se consideran "Hojas" (nodos).


cuando hablamos del DOM y entendemos que se rtepresenta cfomo un arbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

Que es un nodo?
Representacion mas basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.

    -Document: Nodo raiz, a partir del cual se derivan los demas nodos. es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.

    -Element: 


*/



//aqui obtengo un elemento por id
let nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);


//Aqui obtengo elementos por clase
let columnas = document.getElementsByClassName("col");
console.log(columnas);


/*
Meodos para modificar 




innerHTML: esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto (ya existe un texto)


textContent:
Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto (crear texto nuevo)



*/

let titulo = document.getElementById("titulo");

titulo.innerHTML = "Nuevo texto de mi titulo";

//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmacion</p>"



/*

Crear elementos 

    -Crear el elemento
        -createElement
        -createTextNode
        -CreateComment

    
    -poner el elemento
        -append
        -appendChild

*/


//Creando un elemento createElement
let imagen = document.createElement("img");

//crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perrito feliz";

//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);