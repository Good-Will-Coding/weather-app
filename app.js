// Init weather object

const weather = new Weather('New York', '10001');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));
}
