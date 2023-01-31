// variables

//SHIP VARIABLES//
//ship scanners 
let shipAtmosphere = 100;
let shipGravity = 100;
let shipTemperature = 100;
let shipWater = 100;
let shipResources = 100;
let shipProbes = 10;

//ship systems
let shipLanding = 100;
let shipConstruction = 100;
let shipColonists = 1000;

//ship databases
let shipScientific = 100;
let shipCultural = 100;

//getting all IDs of ship stats
let id_shipAtmosphere = document.getElementById("atmosphere");
let id_shipGravity = document.getElementById("gravity");
let id_shipTemperature = document.getElementById("temperature");
let id_shipWater = document.getElementById("water");
let id_shipResources = document.getElementById("resources");
let id_shipProbes = document.getElementById("probes");
//systems IDs
let id_shipLanding = document.getElementById("landing");
let id_shipConstruction = document.getElementById("construction");
let id_shipColonists = document.getElementById("colonists");
//databases IDs
let id_shipScientific = document.getElementById("scientific");
let id_shipCultural = document.getElementById("cultural");


//applying all variable stats to ships UI stats on screen
//Scanners
id_shipAtmosphere.textContent = shipAtmosphere + "%";
id_shipGravity.textContent = shipGravity + "%";
id_shipTemperature.textContent = shipTemperature + "%";
id_shipWater.textContent = shipWater + "%";
id_shipResources.textContent = shipResources + "%";
id_shipProbes.textContent = shipProbes;
//Systems
id_shipLanding.textContent = shipLanding + "%";
id_shipConstruction.textContent = shipConstruction + "%";
id_shipColonists.textContent = shipColonists;
//Databases
id_shipScientific.textContent = shipScientific + "%";
id_shipCultural.textContent = shipCultural + "%";