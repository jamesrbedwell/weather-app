const proxy = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = 'INSERT API KEY HERE'
const location = '37.8267,-122.4233'
const WEATHER_API_URL = `${proxy}https://api.darksky.net/forecast/${API_KEY}/`
const GEO_API_URL = `${proxy}https://darksky.net/geo?q=`
const ADDRESS_API_URL = `${proxy}https://darksky.net/rgeo?hires=1 `
function getCoordinates(location) {
    return fetch(`${GEO_API_URL}${location}`)
        .then(response => response.json());
}

function getForecast(lat, lng) {
    return fetch(`${WEATHER_API_URL}${lat},${lng}`)
        .then(response => response.json());
}

function getAddress(lat, lng) {
    return fetch(`${ADDRESS_API_URL}&lat=${lat}&lon=${lng}`)
        .then(response => response.json());
}

function getEmbedURL(lat, lng) {
    return `https://maps.darksky.net/@emoji,${lat},${lng},7?domain="+encodeURIComponent(window.location.href)+"&auth=1537537545_c1cfcadae6b2c9234d49b78ec18d9b09&embed=true&amp;timeControl=false&amp;fieldControl=false&amp;defaultField=emoji`
}

export default {
    getAddress,
    getForecast,
    getCoordinates,
    getEmbedURL
};

