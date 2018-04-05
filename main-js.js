$(document).ready( function(){
	let lat = '';
	let long = '';
	let url = '';
	if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  	lat = Math.round(position.coords.latitude);
  	long = Math.round(position.coords.longitude);
  	url= "https://fcc-weather-api.glitch.me/api/current?lat="+long+"&lon="+lat;
    $("#test1").html("latitude: " + lat+ "<br>longitude: " + long);
    
  });
}

	$.get(url,function(response){
		$("#test3").html(response.weather);
	});

function showurl(){
$("#test1").html(url);

}
$("#test2").click(showurl);
	
});