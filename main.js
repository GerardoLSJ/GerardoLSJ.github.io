$(document).ready(function () {

    var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $("#navcont").click(function () {
        $("#home").addClass('animated fadeOut');
        $("#home").removeClass("animated fadeOut").addClass('hide');
        $("#cont").removeClass("hide").addClass('animated fadeIn');
        $("#home").removeClass('animated fadeIn');
        //active navbar
        $("#navhome").removeClass("active");
        $("#navcont").addClass('active');
    });



    $("#navhome").click(function () {
        $("#cont").addClass('animated fadeOut');
        $("#cont").removeClass("animated fadeOut").addClass('hide');
        $("#home").removeClass("hide").addClass('animated fadeIn');
        $("#cont").removeClass('animated fadeIn');
        //active navbar
        $("#navcont").removeClass("active");
        $("#navhome").addClass('active');
    });
    
 			//cd gerardolsj.github.io

 			//templates

 	 
     $("#includedContent").load("b.html"); 
    	
});