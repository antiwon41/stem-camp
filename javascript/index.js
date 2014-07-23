$(document).ready(function(){
	$("#blueDiv").click(function(){
		var backgroundColor = $("#blueDiv").css('background-color');
		if(backgroundColor == 'rgb(0, 0, 255)'){
			$("#blueDiv").css('background-color','red');
		}else{
			$("#blueDiv").css('background-color','blue');
		}
	});
});