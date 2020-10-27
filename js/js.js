$(document).ready(function() {
	
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#nav-menu'
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});