$(document).ready(function(){

/*
	  $( ".cover" ).on( "mouseover", function() {
  	$( this ).css( "color", "red" );
	}); 


	$( ".cover" ).on( "mouseleave", function() {
  	$( this ).css( "color", "green" );
	}); 

	$( "#feat" ).click(function() {
 	$( "#home" ).removeClass( "wow fadeInDown" );
	});

*/ var animateEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$("#feat").click(function(){
       $( "#home" ).addClass('animated bounceOutLeft').one(animateEnd, function(){

       			$( "#cont" ).removeClass("hide").addClass('animated bounceInLeft');	
       		});
       });
    


    $("#navhome").click(function(){
       $( "#home" ).css( "display", "block" );
    });
   
   
// 



});