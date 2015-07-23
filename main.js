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
       $( "#home" ).addClass('animated fadeOut').one(animateEnd, function(){
       			$( "#home" ).removeClass("animated fadeOut").addClass('hide');
       			$( "#cont" ).removeClass("hide").addClass('animated fadeIn');
       			$( "#home" ).removeClass('animated fadeIn');		
       			
       		});
       });
    


    $("#navhome").click(function(){
        $( "#cont" ).addClass('animated fadeOut').one(animateEnd, function(){
        		$( "#cont" ).removeClass("animated fadeOut").addClass('hide');
       			$( "#home" ).removeClass("hide").addClass('animated fadeIn');	
       			$( "#cont" ).removeClass('animated fadeIn');
       			
       		});
       });
   
   
// 



});

function reflectString(inputString) {
  
  var result = '';
  for (var i = 0; i < inputString.length; i++) {
    var order = inputString.charCodeAt(i) - 'a'.charCodeAt(0),
        reflectedCharCode = 'a'.charCodeAt(0) + 25 - order;
    result += String.fromCharCode(reflectedCharCode);
  }

  return result;
}


function mixedFractionToImproper(A) {

    var B = [A[1] + A[0] * A[2], A[2]];
  return B;
}
