$(function() {

	centerBlock($(".main-content"));

	$(window).resize(function() {
		centerBlock($(".main-content"));
	});

});

function centerBlock($b) {
	var height = $(window).height();
	var blockHeight = $b.outerHeight();
	var offset = (height - blockHeight) * 0.35;
	if (offset > 0) {
		$b.attr("style", "margin-top: " + offset + "px;");
	} else {
		$b.attr("style", "margin-top: 0;");
	}
}