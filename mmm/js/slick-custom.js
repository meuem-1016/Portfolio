//レスポンシブWebデザインp26
$(document).ready(function () {
	$('.slide-item').slick({
		autoplay: false,
		autoplaySpeed: 3000,//5秒
		speed: 500,
		dots: true,
		fade: false,
		pauseOnFocus: false,
		pauseOnHover: false
	});
});