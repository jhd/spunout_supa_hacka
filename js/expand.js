	console.log("YO");
$(document).ready(function(){
	$(".item").click(function(){
		console.log(this);
		$(this).next().slideToggle();
	});
});