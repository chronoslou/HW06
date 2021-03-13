// create button to clear the city array
// add functionality to pull current location weather if no current city selected?

var cityList = [];
var id = "c52ebbd0a3f56c59ee405c95485eb3a0";

// stores cityList in localStorage
function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cityList));
}
// adds last searched city to list-group as button for user to select city
function createCityList(){
    $(".cityList").empty();
    cityList.forEach(function(city) {
        $(".cityList").prepend($(`<button class="list-group-item list-group-item-action cityButton" data-city="${city}">${city}</button>`));
    })
}

// loads cityList from local storage and calls api to get data for last searched city if it exists
function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if (storedCities !== null) {
        cityList = storedCities;
    }