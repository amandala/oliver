/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
*/
google.load("jquery", "1.3.1");
google.setOnLoadCallback(function()
{
	// Just for demonstration purposes, change the contents/active state using jQuery
	$("#menu ul li a").click(function(e) {
		e.preventDefault();
		
		$("#menu ul li a").each(function() {
			$(this).removeClass("active");	
		});
		
		$(this).addClass("active");
		
		$("#variety").html($(this).attr("title"));
		id = $(this).attr("title");
		id = '\#' + id;
		$('#main').children('div').css('display', 'none');
		$(id).css('display', 'block');

	});
});