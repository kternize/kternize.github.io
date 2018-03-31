$(document).ready(function() {

document.getElementById('circle4').style.visibility="hidden";

document.getElementById('stage4').style.visibility="hidden";

setTimeout(function() {
	// $(".wake-up-text").addClass("alarming");
 	$(".button, .button2, .reset").addClass("alarming2");
 	$(".button2").addClass("alarming5")
 	$(".circle2").addClass("alarming3")
 	$(".circle1").addClass("alarming4")
 	
 	document.getElementById('circle3').style.visibility="hidden";
 	
 	document.getElementById('circle4').style.visibility="visible";

 	document.getElementById('stage4').style.visibility="visible";


 }, 5000);
 
 $(".button, .button2, .reset").click(function() {

 	// $(".wake-up-text").removeClass("alarming");
 	$(".button, .button2, .reset").removeClass("alarming2");
 	$(".circle2").removeClass("alarming3")
 	$(".circle1").removeClass("alarming4")
 	$(".button2").removeClass("alarming5")
 
 	document.getElementById('circle3').style.visibility="visible";
 	
 	document.getElementById('circle4').style.visibility="hidden";

 	document.getElementById('stage4').style.visibility="hidden";

 });

  });

