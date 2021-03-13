// create button to clear the city array
// add functionality to pull current location weather if no current city selected?

var cityList = [];
var id = "c52ebbd0a3f56c59ee405c95485eb3a0";

// stores cityList in localStorage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}