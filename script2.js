const listaDeLibros = [];

function añadirLibro(event){
    event.preventDefault();
    const formulario = document.getElementById('formLibro');
    
    
    if (!formulario.checkValidity()) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }
    
    const libro = {
        titulo: document.getElementById("Titulo").value,
        autor: document.getElementById("Autor").value,
        año: document.getElementById("Año").value,
        editorial: document.getElementById("Editorial").value,
        categoria: document.getElementById("Categoria").value,
        portada:document.getElementById("url").value
    };
    listaDeLibros.push(libro);
    actualizarTabla(libro)
     formulario.reset();
    
   }

   function crearThOpciones() {
    
    const thExistente = document.getElementById('headerDeBotones');
    if (!thExistente) {
        const thDeBotones = document.createElement("th");
        thDeBotones.textContent = "Opciones";
        thDeBotones.classList.add("Table-header");
        thDeBotones.id = "headerDeBotones";
        const filaDeEncabezados = document.getElementById("filaDeEncabezados");
        filaDeEncabezados.appendChild(thDeBotones);
    }
}
function eliminarThOpciones() {
    const thExistente = document.getElementById('headerDeBotones');
    if (thExistente && listaDeLibros.length === 0) {
        thExistente.remove();
    }
}



function actualizarTabla(){
const tabla = document.getElementById("tableBody");
tabla.innerHTML = "";

if (listaDeLibros.length === 1) {
    crearThOpciones();
}


listaDeLibros.forEach((libro,indice) => {
const nuevaFila = document.createElement("tr")

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar Libro";
botonEliminar.onclick = () => removerLibro(indice);
botonEliminar.classList.add("boton");

const botonDeEditar = document.createElement("button");
botonDeEditar.textContent = "Editar Libro";
botonDeEditar.onclick = (event) => editarFormulario(libro,indice,event);
botonDeEditar.classList.add("boton");

const celdaTitulo = document.createElement('td');
celdaTitulo.textContent = libro.titulo;
celdaTitulo.classList.add("celdas");

const celdaAutor = document.createElement('td');
celdaAutor.textContent = libro.autor;
celdaAutor.classList.add("celdas");

const celdaAño = document.createElement('td');
celdaAño.textContent = libro.año;
celdaAño.classList.add("celdas");

const celdaEditorial = document.createElement('td');
celdaEditorial.textContent = libro.editorial;
celdaEditorial.classList.add("celdas");

const celdaCategoria = document.createElement('td');
celdaCategoria.textContent = libro.categoria;
celdaCategoria.classList.add("celdas");

celdaPortada = document.createElement("td");
const img = document.createElement('img');
img.src = libro.portada;
celdaPortada.appendChild(img);
celdaPortada.classList.add("celdas");

const celdaBotones = document.createElement("td");
celdaBotones.appendChild(botonDeEditar);
celdaBotones.appendChild(botonEliminar);
celdaBotones.className = "celda-de-botones";

  
nuevaFila.appendChild(celdaTitulo);
nuevaFila.appendChild(celdaAutor);
nuevaFila.appendChild(celdaAño);
nuevaFila.appendChild(celdaEditorial);
nuevaFila.appendChild(celdaCategoria);
nuevaFila.appendChild(celdaPortada);
nuevaFila.appendChild(celdaBotones);

tabla.appendChild(nuevaFila);

});
eliminarThOpciones()
mostrarEnConsola();
}


function removerLibro(indice){
const formulario = document.getElementById("formLibro");
 listaDeLibros.splice(indice,1);
  actualizarTabla(); 
}
function mostrarEnConsola(){
    console.log(listaDeLibros);
}


function editarFormulario(libro,indice,event){ 
    event.preventDefault();
    const formulario = document.getElementById("formLibro");
   
    formulario.Titulo.value = (libro.titulo);
    formulario.Autor.value  =(libro.autor);
    formulario.Año.value = (libro.año);
    formulario.Editorial.value = (libro.editorial);
    formulario.Categoria.value = (libro.categoria);
    formulario.url.value = (libro.portada)

    const botonDeAñadir = document.getElementById("BotonDeañadir")
     const botonDeActualizar = document.getElementById("botonDeActualizar")
    botonDeActualizar.disabled = false;
    botonDeAñadir.disabled = true;
    botonDeActualizar.onclick = () => actualizarLibro(indice);
   }


   
function actualizarLibro(indice){
    const formulario = document.getElementById("formLibro");
 
     const libroActualizado = {
         titulo: formulario.Titulo.value,
         autor: formulario.Autor.value,
         año: formulario.Año.value,
         editorial: formulario.Editorial.value, 
         categoria: formulario.Categoria.value,
         portada: formulario.url.value
     };
     listaDeLibros[indice] = libroActualizado;
     formulario.reset()
     actualizarTabla();
     document.getElementById("botonDeActualizar").disabled = true;
     document.getElementById("BotonDeañadir").disabled = false;

 }
 
 