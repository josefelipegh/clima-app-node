const axios = require('axios');


const getLugarLatLng = async (dir) => {

    const encodedUrl = encodeURI(dir);
    const baseUrl = `http://api.positionstack.com/v1/forward?access_key=0127fca2bbb125730c15713147a6e15b&query=${encodedUrl}`;

    const instance = axios.create({
        baseURL: baseUrl
    });

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.data[0];
    const address = data.name;
    const lat = data.latitude;
    const lng = data.longitude;


    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}