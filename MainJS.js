$(document).ready(function(){
	$('.aboutMe_li').click(function(){
		$('.aboutMe_li').addClass('active');
		$('.feeds_li').removeClass('active');
		$('#aboutMe').show();
		$('#feeds').hide();
		AboutMethod();
	});
	$('.feeds_li').click(function(){
		$('.feeds_li').addClass('active');
		$('.aboutMe_li').removeClass('active');
		$('#aboutMe').hide();
		$('#feeds').show();
		FeedMethod();
	});
	if($('.aboutMe_li').hasClass( "active" ))
	{
		$('#aboutMe').show();
		$('#feeds').hide();
		AboutMethod();
	}
	if($('.feeds_li').hasClass( "active" ))
	{
		$('#aboutMe').hide();
		$('#feeds').show();
		FeedMethod();
	}
});
