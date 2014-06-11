

$(document).ready(function(){
	//show legend
	$(".item2").on("click", function(){
		$("ul.legend").slideToggle(100);
	});

	//open issue submission modal
	$(".item1").on("click", function(){
		$(".overlay1").fadeIn();
	});

	//open help/intro modal
	$(".item3").on("click", function(){
		$(".overlay2").fadeIn();
	});


	var $closeModal = function(){
		$(".overlay").fadeOut();
	};

	$(document).on("keydown", function(e){
		if(e.which == 27) {
			$closeModal();
		}
	});

	$(".overlay").on("click", function(e){
		if($(e.target).hasClass("closeIt")){
			$closeModal();
		}
	});


});

