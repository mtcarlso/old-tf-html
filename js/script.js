//our tie, in use
var tie = {
		width: "skinny",
		color1: "black",
		color2: "black",
		color3: "bred",
		tipping: "gray",
		initials: "TF"
};

//carousel
$('.carousel').carousel();

//animate to sections of the site
$('.scene_link').click(function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});


//resize sections to be full height of browser; needs testing on giant monitors, maybe some max and min conditions
$(function(){
    $('.customizer').css({'height':($(window).height()) + 'px'});
    $(window).resize(function(){
        $('.customizer').css({'height':($(window).height()) + 'px'});
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
  //set variables for the appropriate key and value for the tie
	var chosenTarget = $(this).data("color-target");
  var chosenColor = $(this).data("color");

  //assign the value to the key for the tie
  tie[chosenTarget] = chosenColor;
  $(".color-box").removeClass('active');    
  $(this).addClass('active');

  //make the big thumbnail color change - makes first one change....
  if (chosenTarget == "color1") {
      var lastClass = $('#primary-thumb').attr('class').split(' ').pop();
      $("#primary-thumb").removeClass(lastClass);
      $("#primary-thumb").addClass(chosenColor);
      $("#primary-color").attr("src", "img/tie/primary__" + chosenColor + ".png");
  } else if (chosenTarget == "color2") {
    var lastClass = $('#secondary-thumb').attr('class').split(' ').pop();
    $("#secondary-thumb").removeClass(lastClass);
    $("#secondary-thumb").addClass(chosenColor);  
    $("#secondary-color").attr("src", "img/tie/secondary__" + chosenColor + ".png");
  } else if (chosenTarget == "color3") {
    var lastClass = $('#tertiary-thumb').attr('class').split(' ').pop();
    $("#tertiary-thumb").removeClass(lastClass);
    $("#tertiary-thumb").addClass(chosenColor);  
    $("#tertiary-color").attr("src", "img/tie/tertiary__" + chosenColor + ".png");
  }

  //make the background image update with the new values
  /*var bgImage = " + tie.color1 + '_'  + tie.color2 + '_' + tie.color3 + '.png"
  $("#color").css('background-image', 'url(img/bg/' + tie.color1 + '_' 
              + tie.color2 + '_' + tie.color3 + '.png)');*/
  

  //this variable in this context might be best if it came from a centralized object for the tie

/*  var chosenColor = $(this).data("color");
	
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
	*/
  return false;
});

//save the initials for monogram
$("#monogram-text").blur( function() {
  tie.initials = $(this).val();
});