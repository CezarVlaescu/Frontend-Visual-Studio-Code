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

