class Weather {
    constructor(city, zip) {
        this.apiKey = '4dde78a43db993b308e0caac0a288c4d';
        this.city = city;
        this.zip = zip;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`)
   
        const zipResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&APPID=${this.apiKey}`)
        const responseData = await response.json();
        const zipResponseData = await zipResponse.json();

        return responseData.weather, zipResponseData;
    
    }

    // Change weather location
    changeLocation(city, zip) {
        this.city = city;
        this.zip = zip;
    }
}