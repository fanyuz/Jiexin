window.onload=function(){
	document.documentElement.style.fontSize=innerWidth/25+"px";
	onresize = function(){
		document.documentElement.style.fontSize = innerWidth/25 +"px";
		
	}
}

$(function(){
	$("#activity").click(function(){
		$(".main").slideToggle(200)
	})
	$("#activityapp").click(function(){
		$(".main").slideToggle(200)
	})
})