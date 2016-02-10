$(document).ready(function() {
	
	$("#main").load("landscapes.html");
	
	$("#landscape").click( function() {
		$("#main").load("landscapes.html")
	});

	$("#nature").click( function() {
		$("#main").load("nature.html")
	});

	$("#people").click( function() {
		$("#main").load("moments.html")
	});

  $("#about").click( function() {
		$("#main").load("about.html")
	});

});
