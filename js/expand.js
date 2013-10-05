	console.log("YO");
$(document).ready(function(){
	$(".item").click(function(){
		$(this).next().slideToggle();
	});

	var request = $.getJSON("http://www.whoismytd.com/v1",function( data ) {console.log(data)});
});