const { getLugarLatLng } = require('./lugar/lugar');
const { getWeather } = require('./clima/clima');

const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//getLugarLatLng(argv.address).then(console.log);

// getWeather(40.68295, -73.9708)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direction) => {

    try {
        const coords = await getLugarLatLng(direction);
        const temp = await getWeather(coords.lat, coords.lng);

        return `El clima de ${coords.address} es de ${temp}.`;

    } catch {
        return `No se pudo determinar el clima de ${direction}`;
    }

}


getInfo(argv.address)
    .then(console.log)
    .catch(console.log);