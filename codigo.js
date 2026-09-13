const claveApi = "be911c2dc2c64502aca143415261309";
const idioma = "es";

const inputCiudad = document.getElementById("input-ciudad");


async function obtenerClima() {

    const ciudad = inputCiudad.value;

    if (!ciudad) {
        alert("Por favor, ingresa una ciudad");
        return;
    }

    const apiClimaActual =
        `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    try {

        const respuesta = await fetch(apiClimaActual);

        if (!respuesta.ok) {
            throw new Error("No se encontró la ciudad");
        }

        const data = await respuesta.json();

        mostrarClima(data);

    } catch (error) {

        alert("No se pudo obtener el clima. Verifica la ciudad.");

        console.error(error);
    }
}


function mostrarClima(data) {

    document.querySelector(".clima-icono").src =
        "https:" + data.current.condition.icon;

    document.querySelector(".clima-texto").innerHTML =
        data.current.condition.text;

    document.querySelector(".temp").innerHTML =
        Math.round(data.current.temp_c) + "°C";

    document.querySelector(".ciudad").innerHTML =
        data.location.name;

    document.querySelector(".humedad").innerHTML =
        data.current.humidity + "%";

    document.querySelector(".viento").innerHTML =
        data.current.wind_kph + " km/h";
}