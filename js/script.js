//our tie, in use
var tie = {
		width: "skinny",
		color1: "navy",
		color2: "green",
		color3: "red",
		tipping: "gray",
		initials: "TF"
	};

//animate to sections of the site
$('.scene_link').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


//resize sections to be full height of browser; needs testing on giant monitors, maybe some max and min conditions
$(function(){
    $('.customizer').css({'height':($(window).height())+'px'});
    $(window).resize(function(){
        $('.customizer').css({'height':($(window).height())+'px'});
    });
});

//save tie width on user click
$("[data-width]").click( function() {
  tie.width = $(this).data("width");
  $(".button-width").removeClass('active');    
  $(this).addClass('active');
});

//update background image, big color box to change on click of color selection for the first color
$(".color-box").click( function() {
	//this variable in this context might be best if it came from a centralized object for the tie
  var chosenColor = $(this).data("color");
	
  var targetId = $("#base-color");
	var multi = $("#color").css('background-image').split(',');
  var bgImages = "";
  
  //adds and removes class from the big box to show selected color
  targetId.removeClass(targetId.attr('class').split(' ').pop());
	targetId.addClass(chosenColor);
  targetId.data("color", chosenColor);
  tie.color1 = chosenColor;
	
  //assigns the appropriate background image to the right spot in the array; hardcoded to be the first one, needs to be abstracted to work for all
  multi[0] = "url(img/Color_1_" + chosenColor + ".png)";
  bgImages = multi[0];
  for (var i=1; i<multi.length;i++)
  {
    var bgImages = bgImages + "," + multi[i];
  };
  $("#color").css('background-image', bgImages);
	return false;
});

//save the initials for monogram
$("#monogram-text").blur( function() {
  tie.initials = $(this).val();
});