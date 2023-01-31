//variables for planet stats
let planetAtmosphere = ["None", "Non breathable", "Marginal", "Breathable"];
let planetGravity = ["Low", "Earth like", "High", "Extreme"];
let planetTemperature = ["Freezing", "Very cold", "Cold", "Warm", "Hot", "Very hot"];
let planetWater = ["None", "Trace", "Rivers", "Lakes", "Oceans"];
let planetPlantLife = ["None", "Trace", "Moss", "Forrests"];
let planetResources = ["Poor", "Mediocre", "Rich"];

//get IDs of planet stats
let id_planetAtmosphere = document.getElementById("planetAtmosphere");
let id_planetGravity = document.getElementById("planetGravity");
let id_planetTemperature = document.getElementById("planetTemperature");
let id_planetWater = document.getElementById("planetWater");
let id_planetPlantLife = document.getElementById("planetPlantLife");
let id_planetResources = document.getElementById("planetResources");
let id_planetFeatures = document.getElementById("planetFeatures");






// planet features


/*
Planet Features list - positive
natural farmlands, mineral fields, endless forrests, great river, tropical islands,
geothermal vents


Planet Features list - negative
poisonous plants, vast deserts, spore vents, massive craters, dangerous wildlife,
massive glacier, 
*/
const planetFeaturesPositive = [
    "Natural farmlands", //0
    "Mineral fields",
    "Endless forrests",
    "Great river",
    "Tropical islands",
    "Geothermal vents"
];

const planetFeaturesNegative = [
    "Poisonous plants", //0
    "Vast deserts",
    "Spore vents",
    "Massive craters",
    "Dangerous wildlife",
    "Massive glacier"
];

// function for choosing planetary features positive and negative
function getPlanetFeatures() {
    let randomPositive = Math.floor((Math.random() * planetFeaturesPositive.length));
    let randomNegative = Math.floor((Math.random() * planetFeaturesNegative.length));
    return [randomPositive = planetFeaturesPositive[randomPositive], randomNegative = planetFeaturesNegative[randomNegative]];
}
// function for choosing planet atmosphere
function getPlanetAtmosphere() {
    let randomAtmosphere = Math.floor((Math.random() * planetAtmosphere.length));
    return [randomAtmosphere = planetAtmosphere[randomAtmosphere]];
}
// function for choosing planet gravity
function getPlanetGravity() {
    let randomGravity = Math.floor((Math.random() * planetGravity.length));
    return [randomGravity = planetGravity[randomGravity]];
}
// function for choosing planet temperature
function getPlanetTemperature() {
    let randomTemperature = Math.floor((Math.random() * planetGravity.length));
    return [randomTemperature = planetTemperature[randomTemperature]];
}
// function for choosing planet water
function getPlanetWater() {
    let randomWater = Math.floor((Math.random() * planetWater.length));
    return [randomWater = planetWater[randomWater]];
}
// function for choosing planet plant life
function getPlanetPlantLife() {
    let randomPlantLife = Math.floor((Math.random() * planetPlantLife.length));
    return [randomPlantLife = planetPlantLife[randomPlantLife]];
}
// function for choosing planet plant resources
function getPlanetResources() {
    let randomResources = Math.floor((Math.random() * planetResources.length));
    return [randomResources = planetResources[randomResources]];
}








