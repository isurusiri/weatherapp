const url = 'https://freeweatherapi.com/v1/query';

const getWeather = (locations) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "locations": locations
        })
    })
    .then(res => res.json())
    .catch(error => console.error(error));
}

export {getWeather};
