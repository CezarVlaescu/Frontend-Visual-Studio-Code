// the version of code below as class
class Forecast{
    constructor(){
        this.key = 'AgCKk0OrumMoCLsrNzd24DG4y2b0On6u';
        this.base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    }
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key); 
        return { cityDets, weather };
    };
    async getCity(city){
        const query = `apikey=${this.key}&q=${city}`; 
        const response = await fetch(this.cityUrl + query); 
        const data = await response.json(); 
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.base + query);
        const data = await response.json();    
        return data[0];
    }
};


// ------------------------------------------------------------------------------------------

const APIkey = 'AgCKk0OrumMoCLsrNzd24DG4y2b0On6u';


// get weather information

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    
    return data[0];
}

// get city information 

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'; // the api key for search
    const query = `apikey=${APIkey}&q=${city}`; // what is coming after search

    const response = await fetch(base + query); // returns a promise, concat of the links
    const data = await response.json(); // return the data as a json

    return data[0];
};

getCity('manchester').then(data => {
    return getWeather(data.Key);
}).then(data => {
    console.log(data);
}).catch(err => console.log(err));

