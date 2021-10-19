/* Me guardo en variables los elementos necesarios */
const listaDeReposUL = document.getElementById("lista-repos");
const botonSearch = document.getElementById("search");
const loader = document.getElementById("loader");

/* Crear un elemento y colocarlo en pantalla */
function crearNuevoRepo(nombre) {
  // Crear un nuevo elemento li y guardarlo en una variable
  const nuevoRepo = document.createElement("li");
  // Cambiar el texto interno del li
  nuevoRepo.textContent = nombre;

  // Agregar el li a la lista de repos
  listaDeReposUL.appendChild(nuevoRepo);
}

botonSearch.addEventListener("click", function () {
  // Vaciamos la lista de repositorios
  listaDeReposUL.innerHTML = "";
  // Mostramos el Loader
  loader.style = "display: block";

  // Leemos el valor del input
  const githubUser = document.getElementById("name").value;
  console.log("llame a click de search con", githubUser);

  // Llamar al servidor, y obtener la información del Github del user ingresado

  const promesa = fetch(`http://localhost:3000/repositorios/${githubUser}`, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      if (response.sucess === true) {
        const repos = response.repositorios;

        repos.forEach((repo) => {
          crearNuevoRepo(repo);
        });
      } else {
        alert("No hay repos para el user " + githubUser);
      }
    })
    .catch(function () {
      alert("Fallo la peticion");
    })
    .finally(function () {
      // Escondemos el Loader
      loader.style = "display: none";
    });
});
