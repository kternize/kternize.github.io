(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);

	$(document).ready(function(){

        $("#HOME").click(function(){

            $('.photo1').goTo();

        })

		$("#INFO").click(function(){

			$('.photo2').goTo();

		})

        $("#STORIES").click(function(){

            $('.bar2').goTo();
        })

        $("#GETHELP").click(function(){

            $('.bar3').goTo();
        })

        $("#OURMISSION").click(function(){

            $('.photo5').goTo();
        })


        var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 8000); 
}
	})