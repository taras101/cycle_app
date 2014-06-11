$(document).ready(function(){
	// var $closeIt = 	function(){
	// 	$(".overlay").fadeOut();
	// };	

	// $(".overlay").on("click", function(e){
	// 	// if ( $(e.currentTarget).hasClass( "close" ) ) {
	// 	// 	$closeIt();
	// 	// }
	// 	console.log("click");
	// });

	// $(document).on("keydown", function(e){
	// 	if (e.which == 27) {
	// 		$closeIt();
	// 	}
	// });

	$(".item1").on("click", function(){
		$(".overlay1").fadeIn();
	});

	$(".item2").on("click", function(){
		$("ul.legend").toggle(100);
	});



	$(".item3").on("click", function(){
		$(".overlay2").fadeIn();
	});

	$(".overlay").on("click", function(e){
		e.preventDefault();
		if($(e.currentTarget).hasClass("close")){
			$(".overlay").fadeOut();
		}
	});
});
