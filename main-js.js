let api = "https://fcc-weather-api.glitch.me/api/current?";
let lat, lon;
let tempUnit = 'C';
let currentTempInCelsius;

$(document).ready(function()
	{
  		if (navigator.geolocation)
  			{
    			navigator.geolocation.getCurrentPosition(function (position)
    				{
      					var lat = "lat=" + position.coords.latitude;
      					var lon = "lon=" + position.coords.longitude;
      					getWeather(lat, lon);
    				});
  			} 
  		else 
  			{
    			console.log("Not Supported by this browser. ");
    		}

    	$("#convert").click(function () {
    var currentTempUnit = $("#tempunit").text();
    var newTempUnit = currentTempUnit == "C" ? "F" : "C";
    $("#tempunit").text(newTempUnit);
    if (newTempUnit == "F") {
      var fahTemp = Math.round(parseInt($("#temp").text()) * 9 / 5 + 32);
      $("#temp").text(fahTemp + " " + String.fromCharCode(176));
    } else {
      $("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
    }
  });

	});

  function getWeather(lat, lon) {
  	let urlString = api + lat + "&" + lon;
  	$.ajax({url: urlString, success: function(result){
  		$("#city").text(result.name+ ", ");
  		$("#country").text(result.sys.country);
  		currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
  		$("#temp").text(currentTempInCelsius + " " + String.fromCharCode(176));
  		$("#tempunit").text(tempUnit);
  		$("#desc").text(result.weather[0].main);
  		$("#icon").attr('src',result.weather[0].icon);
  	}
  	});
  }
