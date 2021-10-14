const fetch = require("node-fetch");

const getSwapi = async () => {
  try {
    const result = [];
    const data = {
      personaje: {},
      planeta: {},
    };

    const getSwapiPeople = await fetch("https://swapi.dev/api/people/1");

    const character = await getSwapiPeople.json();

    const planet = await fetch(character.homeworld);
    const planetJson = await planet.json();

    data.personaje = {
      nombre: character.name,
      altura: character.height,
      color_ojo: character.eye_color,
    };

    data.planeta = {
      nombre: planetJson.name,
      gravedad: planetJson.gravity,
      terreno: planetJson.terrain,
    };

    result.push(data);

    return result;
  } catch (error) {}
};

getSwapi();
