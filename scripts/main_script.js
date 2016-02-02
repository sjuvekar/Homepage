/**
 * 
 * @param page
 * @param section
 * Loads a page in a div
 */
 
$(document).ready(function() {
	$("#main").load("main.html");
	
$("#home").click( function() {
	$("#main").load("main.html");
.});

$("#paintings").click( function() {
	$("#main").load("painting.html")
});

$("#geek").click( function() {
	$("#main").load("geek.html")
});

$("#reading").click( function() {
	$("#main").load("reading.html")
});

$("#contact").click( function() {
	$("#main").load("contact.html")
});

});

/**
 * 
 * @param imagename
 * @param newsrc
 * Rollover image
 */
function rollover(imagename, newsrc) {
	document.images[imagename].src = newsrc
}