$(document).ready(function(){

	$('.menu .menu_show').click(function(){
		$('.menu > ul').slideToggle(600);
	});

	$(document).click(function(e){
		if($('.menu_show').css('display') == 'block'){
			if ($(e.target).parents().filter('.menu:visible').length != 1){
				$('.menu > ul').slideUp(600);
			}
		}
	});

	tmp_footer = $('.footer').height();
	tmp_footer_2 = $('.footer').height()+30;
	$('.footer').css('margin-top', '-'+tmp_footer+'px');
	$('.content').css('padding-bottom', tmp_footer_2);

	$('.a_popup_free_quote').click(function(){
		$('.overlay').fadeIn(600);
		$('.popup_free_quote').fadeIn(600).css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
	});

	$('.a_popup_application_form').click(function(){
		$('.overlay').fadeIn(600);
		$('.popup_application_form').fadeIn(600).css('top', ((document.documentElement.scrollTop || document.body.scrollTop) + 150) + 'px');
	});

	$('.overlay, .button_close').click(function(){
		$('.overlay').fadeOut(600);
		$('.popup').fadeOut(600);
	});

});

$(window).resize(function(){
	if($(window).width() < 880){
		$('.menu > ul').css('display', 'none');
	}
	if($(window).width() > 880){
		$('.menu > ul').css('display', 'block');
	}
	$('.footer').css('margin-top', '-'+tmp_footer+'px');
	$('.content').css('padding-bottom', tmp_footer_2);
});