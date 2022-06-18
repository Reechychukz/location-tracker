const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
    params: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
    headers: {
      'X-RapidAPI-Key': '46600eab7emsh27985f7eeb5e93cp16a87cjsn03bb3c5645bb',
      'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
    }
};

async function myLocation(){
    const coordinatesResponse = await axios.request(options);
    

    const {longitude, latitude} = coordinatesResponse.data;
    const coordinates = {
        x: longitude,
        y: latitude
    }
    
    return coordinates;
    
}


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
module.exports = {myLocation}

