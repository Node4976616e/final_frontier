
//applying all variable stats to planet UI stats on screen
id_planetAtmosphere.textContent = getPlanetAtmosphere();
id_planetGravity.textContent = getPlanetGravity();
id_planetTemperature.textContent = getPlanetTemperature();
id_planetWater.textContent = getPlanetWater();
id_planetPlantLife.textContent = getPlanetPlantLife();
id_planetResources.textContent = getPlanetResources();
id_planetFeatures.textContent = getPlanetFeatures();
/*TEXT COLORS*/
const text_red = 'rgb(218, 3, 3)';
const text_yellow = 'rgb(214, 182, 0)';
const text_green = 'rgb(18, 167, 18)';
const text_purple = 'rgb(139, 3, 202)';


function leavePlanet() {
    let element = document.getElementById("main-text");
    element.remove();
    element = document.getElementById("buttons");
    element.remove();
    element = document.getElementById("planet-overview");
    element.remove();
    randomEvent();
}

function randomEvent() { }


//Change color of planet specs text according to if it is positive or negative
/*Variables for each planetary feature - Atmosphere,Gravity,Temperature,Water,Plant life
resources, features*/
const planet_atmosphere_status = document.querySelector('#planetAtmosphere');
const planet_gravity_status = document.querySelector('#planetGravity');
const planet_temperature_status = document.querySelector('#planetTemperature');
const planet_water_status = document.querySelector('#planetWater');
const planet_plant_life_status = document.querySelector('#planetPlantLife');
const planet_resources_status = document.querySelector('#planetResources');
//PLANET ATMOSPHERE

if (planet_atmosphere_status.innerHTML === 'None' || planet_atmosphere_status.innerHTML === 'Non breathable') {
    planet_atmosphere_status.style.color = text_red;
} else if (planet_atmosphere_status.innerHTML === 'Marginal') {
    planet_atmosphere_status.style.color = text_yellow;
} else {
    planet_atmosphere_status.style.color = text_green;
}
//PLANET GRAVITY
if (planet_gravity_status.innerHTML === 'Low' || planet_gravity_status.innerHTML === 'Extreme') {
    planet_gravity_status.style.color = text_red;
} else if (planet_gravity_status.innerHTML === 'High') {
    planet_gravity_status.style.color = text_yellow;
} else {
    planet_gravity_status.style.color = text_green;
}
//PLANET TEMPERATURE
if (planet_temperature_status.innerHTML === 'Freezing' || planet_temperature_status.innerHTML === 'Very hot') {
    planet_temperature_status.style.color = text_red;
} else if (planet_temperature_status.innerHTML === 'Very cold' || planet_temperature_status.innerHTML === 'Hot') {
    planet_temperature_status.style.color = text_yellow;
} else {
    planet_temperature_status.style.color = text_green;
}
//PLANET WATER
if (planet_water_status.innerHTML === 'None' || planet_water_status.innerHTML === 'Trace') {
    planet_water_status.style.color = text_red;
} else if (planet_water_status.innerHTML === 'Rivers') {
    planet_water_status.style.color = text_yellow;
} else {
    planet_water_status.style.color = text_green;
}
//PLANET WATER
if (planet_water_status.innerHTML === 'None' || planet_water_status.innerHTML === 'Trace') {
    planet_water_status.style.color = text_red;
} else if (planet_water_status.innerHTML === 'Rivers') {
    planet_water_status.style.color = text_yellow;
} else {
    planet_water_status.style.color = text_green;
}
//PLANET PLANT LIFE
if (planet_plant_life_status.innerHTML === 'None' || planet_plant_life_status.innerHTML === 'Trace') {
    planet_plant_life_status.style.color = text_red;
} else if (planet_plant_life_status.innerHTML === 'Moss') {
    planet_plant_life_status.style.color = text_yellow;
} else {
    planet_plant_life_status.style.color = text_green;
}
//PLANET RESOURCES
if (planet_resources_status.innerHTML === 'Poor') {
    planet_resources_status.style.color = text_red;
} else if (planet_resources_status.innerHTML === 'Mediocre') {
    planet_resources_status.style.color = text_yellow;
} else {
    planet_resources_status.style.color = text_green;
}






