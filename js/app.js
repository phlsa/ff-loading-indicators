var after = function(millis, fn) {
	window.setTimeout(fn, millis);
}

$(document).ready(function() {

	var indicator = $('#indicator div');

	$('button.dynamic').click(function() {
		$('#indicator').removeClass('out');
		indicator.show().removeClass().addClass('phase-1');
		after(2000, function() {
			indicator.removeClass().addClass('phase-2');
			after(3000, function() {
				indicator.addClass('finishing');
				after(2000, function() {
					$('#indicator').addClass('out');
					after(200, function() {
						indicator.removeClass().hide();
					});
				});
			});
		});
	});

	$('button.static').click(function() {
		$('#indicator').removeClass('out');
		indicator.show().removeClass().addClass('phase-1 static');
		after(2000, function() {
			indicator.removeClass().addClass('phase-2 static');
			after(5000, function() {
				$('#indicator').addClass('out');
				after(200, function() {
					indicator.removeClass().hide();
				});
			});
		});
	});

});