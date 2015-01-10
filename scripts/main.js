(function(){
	"use strict";

	var date, year;

	date = new Date();
	year = date.getFullYear();
	$('.app-year').text( year );

	$(".navbar-nav a").smoothScroll();

}).call(this);