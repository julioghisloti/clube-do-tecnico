$(document).ready(function() {
	$('#apostilas-in').children().hover(function() {
		$(this).siblings().stop().fadeTo(4,0.2);
	}, function() {
		$(this).siblings().stop().fadeTo(4,1);
	});
});