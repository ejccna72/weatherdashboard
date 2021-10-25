// First define the variables
// Let's start with the API key for OpenWeather
    var apikey = "c87c1c241924822ddc08c72333b04ae7"

    // And now the search button
    var sbutton = $(".sbutton");

// We need a FOR loop to let the data persist on HTML
for (var i = 0; i < localStorage.length; i++) {
    var city = localStorage.getItem(i);
    var cityName = $(".list-group").addClass("list-group-item");
    cityName.append("<li>" + city + "</li>");
}

// Now we need to define the key count for the local storage
var keyCount = 0;

// We begin the button event
sbutton.click(function () {

    var sinnput = $(".sinput").val(); 

    // API call for current conditions
    var cUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + sinput + "&Appid=" + apiKey + "&units=imperial";
    // API call for 5 Day conditions
    var fiveUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + sinput + "&Appid=" + apiKey + "&units=imperial";


});