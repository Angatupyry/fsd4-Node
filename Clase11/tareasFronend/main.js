/* Me guardo en variables los elementos necesarios */
const listaDeTareasUL = document.getElementById("lista-tareas");
const botonAgregar = document.getElementById("agregar");
const barrita = document.getElementById("tarea");
const listaDeBoton = document.getElementById("prioridad");

/* Crear un elemento y colocarlo en pantalla */
function crearNuevaTareaHTML(descripcion, prioridad, autor) {
  // Crear un nuevo elemento li y guardarlo en una variable
  const nuevaTarea = document.createElement("li");
  // Cambiar el texto interno del li
  nuevaTarea.textContent = `${descripcion} - Autor: ${autor}`;

  // Agregar una clase CSS al li
  nuevaTarea.classList.add(prioridad);

  // Agregar el li a la lista de tareas
  listaDeTareasUL.appendChild(nuevaTarea);
}

botonAgregar.addEventListener("click", function () {
  fetch("http://localhost:3000/tareas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({
      titulo: barrita.value,
      prioridad: listaDeBoton.value,
    }),
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuestaJSON) {
      const tareaNueva = respuestaJSON.tareaNueva;

      crearNuevaTareaHTML(
        tareaNueva.titulo,
        tareaNueva.prioridad,
        tareaNueva.autor
      );
    });
});

listaDeTareasUL.addEventListener("click", function (evento) {
  evento.target.remove();
});

function cargarTareas() {
  /* Utilizar fetch para acceder a las tareas */
  fetch("http://localhost:3000/tareas", {
    method: "GET",
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (respuestaJSON) {
      const tareas = respuestaJSON.tareas;
      const cantidadDeTareas = tareas.length;

      for (i = 0; i < cantidadDeTareas; i++) {
        crearNuevaTareaHTML(
          tareas[i].titulo,
          tareas[i].prioridad,
          tareas[i].autor
        );
      }
    });
}

cargarTareas();
