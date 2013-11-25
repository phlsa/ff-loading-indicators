$(document).ready(function() {

	$('button.dynamic').click(function() {
		$('.indicator div').show().addClass('phase-1').removeClass('phase-2 finishing static');
		_.delay(function() {
			$('.indicator div').removeClass('phase-1').addClass('phase-2');
			_.delay(function() {
			$('.indicator div').addClass('finishing');
				_.delay(function() {
					$('.phase-2').removeClass('finishing').hide();
				}, 2000);
			}, 5000);
		}, 2000);
	});

	$('button.static').click(function() {
		$('.indicator div').show().addClass('phase-1 static').removeClass('phase-2 finishing');
		_.delay(function() {
			$('.indicator div').removeClass('phase-1').addClass('phase-2');
			_.delay(function() {
				$('.indicator div').hide();
			}, 7000);
		}, 2000);
	});

});