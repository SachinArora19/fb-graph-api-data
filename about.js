 //Below method is to fetch the data from the fb API for about me
function AboutMethod(){
 //below JS variable token Fb used to store token value and apiabouturl variable to store api
 var tokenFB = 'EAACEdEose0cBAMe1pxqExB1vTZAXPVInxcfOMzENf4x2ZBwn8CQNnRxc0OD141SWQSAlZAkvZAvQNGXUFZBl0YMAJeLZAAFs7hYWa5RKTx0AGdMyG9FtkEyUqXoRZAJQX39i6oPyJYeUI9zWyTJbprLm8ucXdeCcdVbcDQfyBW0sx158xuLUsHuf5ofVM14ZAyMZD';
 var apiAboutUrl = 'https://graph.facebook.com/v2.12/me?fields=id%2Cname%2Cemail%2Cabout%2Caddress%2Cbirthday%2Ceducation%2Cfirst_name%2Cgender%2Chometown%2Cage_range&access_token='+tokenFB;
 
 $.ajax({
			url: apiAboutUrl,
			success: function(result)
			{
				console.log(result);
				$('#fbId').html(result.id);
				$('#fbName').html(result.name);
				$('#fbEmailId').html(result.email);
				$('#fbAboutMe').html(result.about);
				$('#fbBirthday').html(result.birthday);
				$('#fbGender').html(result.gender);
				$('#fbHomeTown').html(result.hometown.name);
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