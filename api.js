const weatherApiUrl = 'https://freeweatherapi.com/v1/query';
const geoApiUrl = 'https://api.opencagedata.com/geocode/v1/json?q=LAT+LONG&key=d18d426c2f914f96b125158968980ba5';

const getWeather = (locations) => {
    return fetch(weatherApiUrl, {
        method: 'POST',
        body: JSON.stringify({
            "locations": locations
        })
    })
    .then(res => res.json())
    .catch(error => console.error(error));
}

const getLocationByGeoCoordinates = (lat, long) => {
    return fetch(geoApiUrl.replace('LAT', lat).replace('LONG', long), {
        method: 'GET'
    })
    .then(res => res.json())
    .catch(error => console.error(error));
}

export {getWeather, getLocationByGeoCoordinates};
