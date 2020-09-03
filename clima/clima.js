const axios = require('axios');

const getWeather = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f48d5cd3d2c9a1374b50658ca45207dc&units=metric`);


    return resp.data.main.temp;

}


module.exports = {
    getWeather
}