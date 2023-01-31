
//applying all variable stats to planet UI stats on screen
id_planetAtmosphere.textContent = getPlanetAtmosphere();
id_planetGravity.textContent = getPlanetGravity();
id_planetTemperature.textContent = getPlanetTemperature();
id_planetWater.textContent = getPlanetWater();
id_planetPlantLife.textContent = getPlanetPlantLife();
id_planetResources.textContent = getPlanetResources();
id_planetFeatures.textContent = getPlanetFeatures();

function leavePlanet() {
    let element = document.getElementById("main-text");
    element.remove();
    element = document.getElementById("buttons");
    element.remove();
    element = document.getElementById("planet-overview");
    element.remove();
}