//Below method is to fetch the data from the fb API for feeds
function FeedMethod(){
 //below JS variable token Fb used to store token value and apiabouturl variable to store api
 var tokenFB = 'EAACEdEose0cBAMe1pxqExB1vTZAXPVInxcfOMzENf4x2ZBwn8CQNnRxc0OD141SWQSAlZAkvZAvQNGXUFZBl0YMAJeLZAAFs7hYWa5RKTx0AGdMyG9FtkEyUqXoRZAJQX39i6oPyJYeUI9zWyTJbprLm8ucXdeCcdVbcDQfyBW0sx158xuLUsHuf5ofVM14ZAyMZD';
 var apiFeedUrl = 'https://graph.facebook.com/v2.12/me?fields=feed&access_token='+tokenFB;
 
 $.ajax({
			url: apiFeedUrl,
			success: function(result)
			{
				console.log(result);
				//$('#fbFeedcontainer').html(result.feed.data[0]);
				$.each(result.feed.data, function (res) {
					//console.log('message='+result.feed.data[res].message);
					//console.log('story='+result.feed.data[res].story);
				if(result.feed.data[res].message)
				{
					$('#fbFeedcontainer').append('<p style="font-size:2vw;">'+result.feed.data[res].message+'<br /><a style="color:gray;font-size:1vw;">dated:'+result.feed.data[res].created_time+'</a></p><hr>');
				}
				else
				{
					$('#fbFeedcontainer').append('<p style="font-size:2vw;">'+result.feed.data[res].story+'<br /><a style="color:gray;font-size:1vw;">dated:'+result.feed.data[res].created_time+'</a></p><hr>');	
				}
				});
			},
			error:function()
			{
				alert('sorry unable to fetch the data. check the token value');
			},
			complete: function () 
			{
				alert("Data Loaded Successfully.");
			}
	});
};