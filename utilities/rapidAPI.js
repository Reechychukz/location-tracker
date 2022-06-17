const axios = require('axios').default;

const options = {
    method: 'GET',
    url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
    params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
    headers: {
      'X-RapidAPI-Key': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
    }
};

async function myLocation(){
    const coordinatesResponse = await axios.request(options);
    const {longitude, latitude} = coordinatesResponse.data;
    //console.log(longitude, latitude);
    const coordinate2 = {
        x: longitude,
        y: latitude
    }
    //console.log(coordinate2);
    return (coordinate2);
}


module.exports = {myLocation}
