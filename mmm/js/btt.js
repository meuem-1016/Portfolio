$(function () {
	// 上に戻るボタンを隠す
	$("#btt").hide();
	// スクロール時の動作
	$(window).scroll(function () {
		$("#pos").text($(this).scrollTop());
		// ビューポートより下の時にフェードイン
		if ($(this).scrollTop() > 600) {
			$("#btt").fadeIn();
		} else {
			$("#btt").fadeOut();
		}
	});
	// クリック時の動作
	$("#btt a").click(function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},
			1000
		);
		return false;
	});
});

