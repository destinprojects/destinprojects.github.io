jQuery(document).ready(function(){
	
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});
	
	$('.tabs').tabulous();  
	
	
	$( "a.scrollLink" ).click(function( event ) {
		event.preventDefault();
		
		$("html, body").animate({ 
			scrollTop: $($(this).attr("href")).offset().top }, 500);
	});		
});