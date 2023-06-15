// dom manipulation

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    
    // const cityDets = data.cityDets;
    // const weather = data.weather; // ! this one

    // destructure proprerties

    const {cityDets, weather} = data; // the shorted version of the code upside
    
    // update details template 

    details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    // update the night/day & icon images

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'; // ternary operator
    time.setAttribute('src', timeSrc);

    // remove the d-none class if present

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => { // async functions return a promise
    const cityDets = await getCity(city); // we store the city response
    const weather = await getWeather(cityDets.Key); // we store the weather response about city

    return { cityDets, weather };// object shorthand notation -> set the name by deafault of the name he seems (ex weather : weather iss just weather and set to be weather by default)
                                 // we return an object of that 2 variables
};

cityForm.addEventListener('submit', (e) => {
    // prevent the default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));

    // set local storage 

    localStorage.setItem('city', city); // storing the most recent location 
});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city')).then(data => updateUI(data)).catch(err => console.log(err));
}