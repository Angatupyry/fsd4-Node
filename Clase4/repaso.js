const fetch = require("node-fetch");

async function main() {
  try {
    const result = [];
    const data = {
      personaje: {},
      planeta: {},
    };
    const fetchResponse = await fetch("https://swapi.dev/api/people/1");

    const apiPersonaje = await fetchResponse.json();
    const personajePlaneta = await fetch(apiPersonaje.homeworld);

    const personajePlanetaJson = await personajePlaneta.json();

    data.personaje = {
      nombre: apiPersonaje.name,
      peso: apiPersonaje.height,
      color_pelo: apiPersonaje.hair_color,
      color_ojo: apiPersonaje.eye_color,
    };

    data.planeta = {
      nombre: personajePlanetaJson.name,
      gravedad: personajePlanetaJson.gravity,
      terreno: personajePlanetaJson.terrain,
    };

    result.push(data);
    console.log(result);
    return data;
  } catch (error) {
    console.log(error);
  }
}

main();
