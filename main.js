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
       			$( "#home" ).removeClass("animated bounceOutLeft").addClass('hide');
       		});
       });
    


    $("#navhome").click(function(){
        $( "#cont" ).addClass('animated bounceOutLeft').one(animateEnd, function(){
        		$( "#cont" ).removeClass("animated bounceOutLeft").addClass('hide');
       			$( "#home" ).removeClass("hide").addClass('animated bounceInLeft');	
       		});
       });
   
   
// 



});