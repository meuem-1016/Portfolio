// 下からフェードイン用
$(function () {
	$(".js-fadeBottom").on("inview", function () {
		$(this).addClass("inview");
	});
});

// 右からフェードイン用
$(function () {
	$(".image_1").on("inview", function () {
		$(this).addClass("inview");
	});
});

// 左からフェードイン用
$(function () {
	$(".text_1").on("inview", function () {
		$(this).addClass("inview");
	});
});

// 上からフェードイン用
$(function () {
	$(".text_2").on("inview", function () {
		$(this).addClass("inview");
	});
});

// 下からフェードイン用
$(function () {
	$(".image_2").on("inview", function () {
		$(this).addClass("inview");
	});
});

// 下からフェードイン用
$(function () {
	$(".appointment").on("inview", function () {
		$(this).addClass("inview");
	});
});
