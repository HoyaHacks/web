$(function() {

	centerBlock($(".sidebar .wrapper"));

	$(window).resize(function() {
		centerBlock($(".sidebar .wrapper"));
	});

});

function centerBlock($b) {
	var height = $(window).height();
	var blockHeight = $b.outerHeight();
	var offset = (height - blockHeight) * 0.35;
	if (offset > 0) {
		$b.attr("style", "padding-top: " + offset + "px; padding-bottom: " + offset + "px");
	} else {
		$b.attr("style", "padding-top: 0; padding-bottom: 0");
	}
}

function fullHeight($b) {
	var height = $(window).height();
	$b.attr("style", "min-height: " + height + "px");
}