var tie = {
		width: "skinny",
		color1: "navy",
		color2: "green",
		color3: "red",
		tipping: "gray",
		initials: "TF"
	};
  $("[data-width]").click( function() {
    tie.width = $(this).data("width");
  })

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
  $(".color-box").blur( function() {
  	//save the value of the color box to the tie data object
  });

  $("#monogram-text").blur( function() {
    alert("working");
  });