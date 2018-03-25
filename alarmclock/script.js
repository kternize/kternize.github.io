$(document).ready(function() {

document.getElementById('circle4').style.visibility="hidden";

document.getElementById('stage4').style.visibility="hidden";

setTimeout(function() {
	$(".wake-up-text").addClass("alarming");
 	$(".snooze, .button").addClass("alarming2");
 	$(".circle2").addClass("alarming3")
 	$(".circle1").addClass("alarming4")
 	
 	document.getElementById('circle3').style.visibility="hidden";
 	
 	document.getElementById('circle4').style.visibility="visible";

 	document.getElementById('stage4').style.visibility="visible";


 }, 5000);
 
 $(".button, .snooze").click(function() {

 	$(".wake-up-text").removeClass("alarming");
 	$(".button, .snooze").removeClass("alarming2");
 	$(".circle2").removeClass("alarming3")
 	$(".circle1").removeClass("alarming4")
 
 	document.getElementById('circle3').style.visibility="visible";
 	
 	document.getElementById('circle4').style.visibility="hidden";

 	document.getElementById('stage4').style.visibility="hidden";

 });

  });

