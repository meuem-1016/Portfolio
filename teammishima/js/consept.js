$(function () {
	$(".js-fadeRight").on("inview", function () {
		$(this).addClass("inview");
	});
});

$(function () {
	$(".js-fadeLeft").on("inview", function () {
		$(this).addClass("inview");
	});
});

$(function () {
	$(".js-fadeRight1").on("inview", function () {
		$(this).addClass("inview");
	});
});

// テキスト変化用
$(function () {
	$(".js-color").on("inview", function () {
		$(this).addClass("inview");
	});
});

// 左からフェードイン用
$(function () {
	$(".timeline").on("inview", function () {
		$(this).addClass("inview");
	});
});

$(function () {
	$(".history-image").on("inview", function () {
		$(this).addClass("inview");
	});
});