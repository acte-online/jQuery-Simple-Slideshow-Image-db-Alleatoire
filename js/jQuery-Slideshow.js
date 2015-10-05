$(document).ready(function () {
//-----------------------------------------------------------------------------------------
// SLIDESHOW BANNER
//-----------------------------------------------------------------------------------------
	$(document).ready(function() {
		(function($){  
		  setInterval(function(){  
		    //$(".slideshow ul li:first-child").animate({"margin-left": -350}, 800, function(){  
		    $(".slideshow ul li:first-child").animate({"margin-top": -350}, 1500, function(){
		        $(this).css("margin-top",0).appendTo(".slideshow ul");  
		    });  
		  }, 3500);  
		})(jQuery);
	});
//-----------------------------------------------------------------------------------------
// SLIDESHOW BANNER IMAGES ALEATOIRE
//-----------------------------------------------------------------------------------------
	$(document).ready(function(){
	    var collection = $("ul.alleatoire li").get();
	    collection.sort(function() {
	        return Math.random()*10 > 5 ? 1 : -1;
	    });
	    $.each(collection,function(i,el) {
	        $(el).appendTo( $(el).parent() );
	    });
	});
});
