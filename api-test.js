const claveApi = "be911c2dc2c64502aca143415261309";
const idioma = "es";
const ciudad = "Huancayo";

const apiClimaActual =
    `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const respuesta = await fetch(apiClimaActual);

const data = await respuesta.json();

console.log(data);