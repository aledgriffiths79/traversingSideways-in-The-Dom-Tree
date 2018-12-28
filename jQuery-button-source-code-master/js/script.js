$(document).ready(function(){
 // put your code here
 
  //hides all panels when a panel is clicked
/*$(".theButton").click(function(){
  $("#panel .container").siblings().fadeTo(1000, 0.5);
   });
   
   $(".superButton").click(function(){
  $("#panel .container").siblings().fadeTo(1000, 1);
   
});*/

//turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout 
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });
});
